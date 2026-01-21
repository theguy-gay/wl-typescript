/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Adds 'vectorA' and 'vectorB' together component wise, or alternatively adds
 * 'vectorA' and 'numB' together, meaning 'numB' is added to all x, y and z
 * components of the vector.
 */
declare function wl_vector_add(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * Adds 'vectorA' and 'vectorB' together component wise, or alternatively adds
 * 'vectorA' and 'numB' together, meaning 'numB' is added to all x, y and z
 * components of the vector.
 */
declare function wl_vector_add(
  vectorA: WildLife.Vector,
  numB: number,
): WildLife.Vector;

/**
 * Calculates the cross product between 'vectorA' and 'vectorB', meaning it
 * finds a vector that is perpendicular to both 'vectorA' and 'vectorB'.
 */
declare function wl_vector_cross(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * Calculates and returns the distance between the two given vectors.
 */
declare function wl_vector_distance(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): number;

/**
 * Divides 'vectorB' from 'vectorA' component wise, or alternatively divides
 * 'numB' from 'vectorA', meaning 'numB' is divided from all x, y and z
 * components of the vector.
 */
declare function wl_vector_divide(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * Divides 'vectorB' from 'vectorA' component wise, or alternatively divides
 * 'numB' from 'vectorA', meaning 'numB' is divided from all x, y and z
 * components of the vector.
 */
declare function wl_vector_divide(
  vectorA: WildLife.Vector,
  numB: number,
): WildLife.Vector;

/**
 * Calculates the dot product between 'vectorA' and 'vectorB', meaning all x, y,
 * z components are multiplied component wise and the resulting components are
 * summed together.
 */
declare function wl_vector_dot(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): number;

/**
 * Returns the length of the vector in centimeters.
 */
declare function wl_vector_length(vector: WildLife.Vector): number;

/**
 * Calculates a new vector that is between 'vectorA' and 'vectorB' with the
 * given 'alpha' value. An 'alpha' value of 0 will return 'vectorA', a value of
 * 1 will return 'vectorB' and any value inbetween will return a position
 * relative to the 'alpha' value, for example, an 'alpha' value of 0.5 would
 * return the middle between the two vectors.
 */
declare function wl_vector_lerp(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
  alpha: number,
): WildLife.Vector;

/**
 * This function will calculate a vector between 'vectorA' and 'vectorB', but
 * unlike wl_vector_lerp, the third parameter is the speed at what to move
 * towards the target position in centimeters per second. So if your vectors are
 * 100 centimeters apart and you provide a speed of 100, Then you will
 * effectively get a new vector that is equivalent to 100/FPS between those two
 * vectors.
 */
declare function wl_vector_lerp_constant(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
  speed: number,
): WildLife.Vector;

/**
 * Multiplies 'vectorA' and 'vectorB' together component wise, or alternatively
 * multiplies 'vectorA' and 'numB' together, meaning each x, y and z component
 * is multiplied with 'numB'.
 */
declare function wl_vector_multiply(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * Multiplies 'vectorA' and 'vectorB' together component wise, or alternatively
 * multiplies 'vectorA' and 'numB' together, meaning each x, y and z component
 * is multiplied with 'numB'.
 */
declare function wl_vector_multiply(
  vectorA: WildLife.Vector,
  numB: number,
): WildLife.Vector;

/**
 * Normalizes the given vector 'vector', meaning the direction will remain the
 * same, but the length of the vector will be exaclty 1 centimeter
 */
declare function wl_vector_normalize(vector: WildLife.Vector): WildLife.Vector;

/**
 * Projects 'vectorA' onto a plane with normal 'vectorB' and returns the
 * projected vector.
 */
declare function wl_vector_plane_project(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * Projects 'vectorA' onto 'vectorB' and returns the projected vector.
 */
declare function wl_vector_project(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * Calculates the reflected vector of 'vectorA' bouncing off a surface with
 * normal vector 'vectorB'.
 */
declare function wl_vector_reflect(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * This code rotates the given 'vector' around the given 'axisVector' vector by
 * 'degrees'°
 */
declare function wl_vector_rotate_around_axis(
  vector: WildLife.Vector,
  axisVector: WildLife.Vector,
  degrees: number,
): WildLife.Vector;

/**
 * Similar to wl_vector_rotate_around_axis, this code rotates the given 'vector'
 * around the given 'axisVector' vector by 'degrees'°. This time however you can
 * specify an offset point you want to rotate around, instead of assuming
 * rotation around the (0, 0, 0) point.
 */
declare function wl_vector_rotate_around_axis_offset(
  vector: WildLife.Vector,
  axisVector: WildLife.Vector,
  degrees: number,
  offsetVector: WildLife.Vector,
): WildLife.Vector;

/**
 * Subtracts 'vectorB' from 'vectorA' component wise, or alternatively subtracts
 * 'numB' from 'vectorA', meaning 'numB' is subtracted from all x, y and z
 * components of the vector.
 */
declare function wl_vector_subtract(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): WildLife.Vector;

/**
 * Subtracts 'vectorB' from 'vectorA' component wise, or alternatively subtracts
 * 'numB' from 'vectorA', meaning 'numB' is subtracted from all x, y and z
 * components of the vector.
 */
declare function wl_vector_subtract(
  vectorA: WildLife.Vector,
  numB: number,
): WildLife.Vector;
