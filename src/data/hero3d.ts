/*
 * The 3D object in the hero.
 *
 * - 'stars': chrome sparkle stars (placeholder, matches the reference)
 * - 'svg':   your logo extruded into chrome 3D. Put the file at public/3d/logo.svg
 * - 'glb':   a ready-made 3D model. Put the file at public/3d/logo.glb
 */
export const hero3d: { mode: 'stars' | 'svg' | 'glb'; src: string } = {
  mode: 'stars',
  src: '/3d/logo.svg',
};
