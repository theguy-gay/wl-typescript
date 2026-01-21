/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Calculates a new vector that is between 'rotationA' and 'rotationB' with the
 * given 'alpha' value. An 'alpha' value of 0 will return 'rotationA', a value
 * of 1 will return 'rotationB' and any value inbetween will return a position
 * relative to the 'alpha' value, for example, an 'alpha' value of 0.5 would
 * return the middle between the two rotations. Compared to wl_vector_lerp, this
 * will accurately interpolate rotations internally using quaternions, bypassing
 * any problems that could occur with euler angles.
 */
declare function wl_rotation_lerp(
  rotationA: WildLife.Vector,
  rotationB: WildLife.Vector,
  alpha: number,
): WildLife.Vector;

/**
 * This function will calculate a rotation between 'rotationA' and 'rotationB',
 * but unlike wl_rotationr_lerp, the third parameter is the speed at what to
 * move towards the target rotation in degrees per second. So if your vectors
 * are 100° apart and you provide a speed of 100, Then you will effectively get
 * a new rotation that is equivalent to 100/FPS between those two vectors.
 */
declare function wl_rotation_lerp_constant(
  rotationA: WildLife.Vector,
  rotationB: WildLife.Vector,
  speed: number,
): WildLife.Vector;
