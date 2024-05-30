/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Returns the relative position to the parent of the given 'sandboxObject' as a
 * Vector.
 */
declare function wl_get_object_local_position(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the relative rotation to the parent of the given 'sandboxObject' as a
 * Vector.
 */
declare function wl_get_object_local_rotation(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the relative scale to the parent of the given 'sandboxObject' as a
 * Vector.
 */
declare function wl_get_object_local_scale(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the world position of the given 'sandboxObject' as a Vector.
 */
declare function wl_get_object_position(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the world rotation of the given 'sandboxObject' as a Vector.
 */
declare function wl_get_object_rotation(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the world scale of the given 'sandboxObject' as a Vector.
 */
declare function wl_get_object_scale(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * This function can be used to set the position relative to the parent of a
 * sandbox object directly.
 */
declare function wl_set_object_local_position(
  sandboxObject: WildLife.SandboxObject,
  x: number,
  y: number,
  z: number,
): void;

/**
 * This function can be used to set the position relative to the parent of a
 * sandbox object directly.
 */
declare function wl_set_object_local_position(
  sandboxObject: WildLife.SandboxObject,
  vector: WildLife.Vector,
): void;

/**
 * This function can be used to set the rotation relative to the parent of a
 * sandbox object directly.
 */
declare function wl_set_object_local_rotation(
  sandboxObject: WildLife.SandboxObject,
  x: number,
  y: number,
  z: number,
): void;

/**
 * This function can be used to set the rotation relative to the parent of a
 * sandbox object directly.
 */
declare function wl_set_object_local_rotation(
  sandboxObject: WildLife.SandboxObject,
  vector: WildLife.Vector,
): void;

/**
 * This function can be used to set the scale relative to the parent of a
 * sandbox object directly.
 */
declare function wl_set_object_local_scale(
  sandboxObject: WildLife.SandboxObject,
  x: number,
  y: number,
  z: number,
): void;

/**
 * This function can be used to set the scale relative to the parent of a
 * sandbox object directly.
 */
declare function wl_set_object_local_scale(
  sandboxObject: WildLife.SandboxObject,
  vector: WildLife.Vector,
): void;

/**
 * This function can be used to set the world position of a sandbox object
 * directly.
 */
declare function wl_set_object_position(
  sandboxObject: WildLife.SandboxObject,
  x: number,
  y: number,
  z: number,
): void;

/**
 * This function can be used to set the world position of a sandbox object
 * directly.
 */
declare function wl_set_object_position(
  sandboxObject: WildLife.SandboxObject,
  vector: WildLife.Vector,
): void;

/**
 * This function can be used to set the world rotation of a sandbox object
 * directly.
 */
declare function wl_set_object_rotation(
  sandboxObject: WildLife.SandboxObject,
  x: number,
  y: number,
  z: number,
): void;

/**
 * This function can be used to set the world rotation of a sandbox object
 * directly.
 */
declare function wl_set_object_rotation(
  sandboxObject: WildLife.SandboxObject,
  vector: WildLife.Vector,
): void;

/**
 * This function can be used to set the world scale of a sandbox object
 * directly.
 */
declare function wl_set_object_scale(
  sandboxObject: WildLife.SandboxObject,
  x: number,
  y: number,
  z: number,
): void;

/**
 * This function can be used to set the world scale of a sandbox object
 * directly.
 */
declare function wl_set_object_scale(
  sandboxObject: WildLife.SandboxObject,
  vector: WildLife.Vector,
): void;
