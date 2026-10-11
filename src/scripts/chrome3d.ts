import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

type Mode = 'stars' | 'svg' | 'glb' | 'single' | 'model';

/** A dark studio with bright strip lights, so chrome reads as chrome, tinted purple. */
export function studioEnvironment(renderer: THREE.WebGLRenderer) {
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, 30),
    new THREE.MeshBasicMaterial({ color: 0x08040f, side: THREE.BackSide }),
  ));
  const light = (w: number, h: number, color: number, power: number, x: number, y: number, z: number) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(power), side: THREE.DoubleSide }),
    );
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  light(18, 6, 0xf2ecff, 2.2, 0, 10, 2);       // big soft top panel
  light(14, 1.2, 0xffffff, 8, 0, 9, 4);        // top strip
  light(1.4, 12, 0xffffff, 4, -10, 1, 3);      // left strip
  light(1.0, 10, 0xd9c8ff, 3, 10, 0, 2);       // right rim
  light(10, 3, 0x6a3fd0, 3.5, 0, -8, 6);       // purple floor bounce
  light(6, 6, 0x9b74ff, 1.6, 4, 4, -10);       // purple back glow
  light(5, 4, 0xffffff, 3.5, -4, -3, 10);       // front kicker
  light(4, 8, 0xe6dcff, 2.5, 6, 2, 9);         // front right fill
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.035).texture;
  pmrem.dispose();
  return tex;
}

/**
 * Loads a .gltf JSON whose buffers are embedded as base64. The buffers are decoded here instead of
 * letting GLTFLoader fetch() the data: URIs, which strict hosts (CSP connect-src) block.
 */
export async function loadGltf(src: string) {
  const res = await fetch(src);
  if (!res.ok) throw new Error(`${src}: ${res.status}`);
  const json = await res.json();
  const chunks: Uint8Array[] = [];
  let offset = 0;
  const views = json.bufferViews ?? [];
  const buffers = json.buffers ?? [];
  const starts: number[] = [];
  for (const buf of buffers) {
    const b64 = String(buf.uri ?? '').split(',')[1] ?? '';
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    while (offset % 4) { chunks.push(new Uint8Array(1)); offset++; }
    starts.push(offset); chunks.push(bytes); offset += bytes.length;
  }
  for (const v of views) { v.byteOffset = (v.byteOffset ?? 0) + starts[v.buffer ?? 0]; v.buffer = 0; }
  while (offset % 4) { chunks.push(new Uint8Array(1)); offset++; }
  json.buffers = [{ byteLength: offset }];
  const enc = new TextEncoder().encode(JSON.stringify(json));
  const jsonLen = Math.ceil(enc.length / 4) * 4;
  const glb = new Uint8Array(12 + 8 + jsonLen + 8 + offset);
  const dv = new DataView(glb.buffer);
  dv.setUint32(0, 0x46546c67, true); dv.setUint32(4, 2, true); dv.setUint32(8, glb.length, true);
  dv.setUint32(12, jsonLen, true); dv.setUint32(16, 0x4e4f534a, true);
  glb.fill(0x20, 20, 20 + jsonLen); glb.set(enc, 20);
  let o = 20 + jsonLen;
  dv.setUint32(o, offset, true); dv.setUint32(o + 4, 0x004e4942, true); o += 8;
  for (const c of chunks) { glb.set(c, o); o += c.length; }
  const base = new URL(src, location.href).href.replace(/[^/]*$/, '');
  return new GLTFLoader().parseAsync(glb.buffer, base);
}

function chromeMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: 0xece6ff,
    metalness: 1,
    roughness: 0.14,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    envMapIntensity: 1.5,
  });
}

/** Puffy four-point sparkle, like the objects in the reference. */
function starGeometry() {
  const R = 1, r = 0.16;
  const s = new THREE.Shape();
  s.moveTo(0, R);
  s.quadraticCurveTo(r, r, R, 0);
  s.quadraticCurveTo(r, -r, 0, -R);
  s.quadraticCurveTo(-r, -r, -R, 0);
  s.quadraticCurveTo(-r, r, 0, R);
  const g = new THREE.ExtrudeGeometry(s, {
    depth: 0.02,
    bevelEnabled: true,
    bevelThickness: 0.28,
    bevelSize: 0.07,
    bevelSegments: 14,
    curveSegments: 64,
  });
  g.center();
  const merged = mergeVertices(g.deleteAttribute('normal') as THREE.BufferGeometry, 1e-4);
  merged.computeVertexNormals();
  return merged;
}

function fitToSize(obj: THREE.Object3D, size: number) {
  const box = new THREE.Box3().setFromObject(obj);
  const dims = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  obj.position.sub(center);
  const wrapper = new THREE.Group();
  wrapper.add(obj);
  wrapper.scale.setScalar(size / Math.max(dims.x, dims.y, dims.z || 0.001));
  return wrapper;
}

async function loadSvgLogo(src: string, material: THREE.Material) {
  const data = await new SVGLoader().loadAsync(src);
  const group = new THREE.Group();
  for (const path of data.paths) {
    for (const shape of SVGLoader.createShapes(path)) {
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 70, bevelEnabled: true, bevelThickness: 26, bevelSize: 7, bevelSegments: 12, curveSegments: 64,
      });
      group.add(new THREE.Mesh(geo, material));
    }
  }
  group.scale.y = -1; // SVG y axis points down
  return fitToSize(group, 3.4);
}

/** Loads a .glb/.gltf model. Glass parts become pearly lilac, everything else chrome, so the layers stay readable. */
async function loadGlb(src: string, material: THREE.Material) {
  const gltf = /\.json$/.test(src) ? await loadGltf(src) : await new GLTFLoader().loadAsync(src);
  const pearl = new THREE.MeshPhysicalMaterial({
    color: 0xe4d9ff, metalness: 0.55, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05,
    iridescence: 0.8, iridescenceIOR: 1.6, envMapIntensity: 1.6, side: THREE.DoubleSide,
  });
  const deep = new THREE.MeshPhysicalMaterial({
    color: 0x7b62c4, metalness: 1, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.4, side: THREE.DoubleSide,
  });
  gltf.scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const name = ((mesh.material as THREE.Material)?.name || '').toLowerCase();
    mesh.material = name.includes('green') ? pearl : name.includes('dark') ? material : deep;
  });
  return fitToSize(gltf.scene, 3.2);
}

export async function mountChrome(canvas: HTMLCanvasElement, mode: Mode, src = '') {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    canvas.parentElement?.classList.add('no-webgl');
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.environment = studioEnvironment(renderer);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  const material = chromeMaterial();
  const root = new THREE.Group();
  scene.add(root);

  type Floater = { obj: THREE.Object3D; base: THREE.Vector3; phase: number; spin: number; amp: number };
  const floaters: Floater[] = [];
  const add = (obj: THREE.Object3D, x: number, y: number, z: number, s: number, spin: number, rz = 0) => {
    obj.position.set(x, y, z);
    obj.scale.multiplyScalar(s);
    obj.rotation.z = rz;
    root.add(obj);
    floaters.push({ obj, base: obj.position.clone(), phase: Math.random() * Math.PI * 2, spin, amp: 0.08 + Math.random() * 0.06 });
  };

  if (mode === 'stars' || mode === 'single') {
    const geo = starGeometry();
    if (mode === 'stars') {
      add(new THREE.Mesh(geo, material), 0.35, -0.15, 0, 1.55, 0.25, 0.08);
      add(new THREE.Mesh(geo, material), -1.55, 1.25, -0.6, 0.78, -0.35, -0.12);
      add(new THREE.Mesh(geo, material), 1.5, -1.7, 0.3, 0.42, 0.5, 0.1);
    } else {
      add(new THREE.Mesh(geo, material), 0, 0, 0, 1.6, 0.3, 0.05);
    }
  } else {
    try {
      const logo = mode === 'svg' ? await loadSvgLogo(src, material) : await loadGlb(src, material);
      if (mode === 'model') logo.scale.multiplyScalar(1.25);
      add(logo, 0, 0, 0, 1, 0);
      logo.rotation.x = -0.12;
    } catch (err) {
      console.warn('[ovnistudio] could not load 3D logo, falling back to stars', err);
      add(new THREE.Mesh(starGeometry(), material), 0, 0, 0, 1.6, 0.3);
    }
  }

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    // keep the objects framed on narrow screens
    camera.position.z = w / h < 0.9 ? 11 : 9;
    if (reduce) renderer.render(scene, camera);
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const pointer = new THREE.Vector2();
  const target = new THREE.Vector2();
  window.addEventListener('pointermove', (e) => {
    target.set((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
  }, { passive: true });

  let visible = true;
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(canvas);

  const clock = new THREE.Clock();
  const tick = () => {
    const t = clock.getElapsedTime();
    pointer.lerp(target, 0.05);
    root.rotation.y = pointer.x * 0.35;
    root.rotation.x = pointer.y * 0.2;
    for (const f of floaters) {
      f.obj.position.y = f.base.y + Math.sin(t * 0.9 + f.phase) * f.amp;
      // a logo sways gently so it stays readable; the stars also spin
      f.obj.rotation.y = Math.sin(t * 0.5 + f.phase) * (f.spin ? 0.6 : 0.35) + t * f.spin * 0.25;
      f.obj.rotation.x = (f.spin ? 0 : -0.12) + Math.cos(t * 0.4 + f.phase) * 0.12;
    }
    renderer.render(scene, camera);
  };

  canvas.parentElement?.classList.add('is-ready');
  if (reduce) { tick(); return; }
  renderer.setAnimationLoop(() => { if (visible) tick(); });
}
