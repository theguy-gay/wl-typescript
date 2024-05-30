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
declare function wl_vector_length(
  vectorA: WildLife.Vector,
  vectorB: WildLife.Vector,
): number;

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
declare function wl_vector_normalize(vectorA: WildLife.Vector): WildLife.Vector;

/**
 * Projects 'vectorA' onto a plane with normal 'vectorB' and returns the
 * projected vector.
 */
declare function wl_vector_plane_project(
  vectorA: WildLife.Vector,
): WildLife.Vector;

/**
 * Projects 'vectorA' onto 'vectorB' and returns the projected vector.
 */
declare function wl_vector_project(vectorA: WildLife.Vector): WildLife.Vector;

/**
 * Calculates the reflected vector of 'vectorA' bouncing off a surface with
 * normal vector 'vectorB'.
 */
declare function wl_vector_reflect(vectorA: WildLife.Vector): WildLife.Vector;

/**
 * Subtracts 'vectorB' from 'vectorA' component wise, or alternatively subtracts
 * 'numB' from 'vectorA', meaning 'numB' is subtracted from all x, y and z
 * components of the vector.
 */
declare function wl_vector_subtract(vectorA: WildLife.Vector): WildLife.Vector;
