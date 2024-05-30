/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Returns the name of the sandbox object. This is the same name as the one you
 * can see in the outliner.
 */
declare function wl_get_object_name(
  sandboxObject: WildLife.SandboxObject,
): string;

/**
 * Returns the back direction vector of the given 'sandboxObject'.
 */
declare function wl_get_object_back_vector(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the down direction vector of the given 'sandboxObject'.
 */
declare function wl_get_object_down_vector(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the forward direction vector of the given 'sandboxObject'.
 */
declare function wl_get_object_forward_vector(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the left direction vector of the given 'sandboxObject'.
 */
declare function wl_get_object_left_vector(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the right direction vector of the given 'sandboxObject'.
 */
declare function wl_get_object_right_vector(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns the up direction vector of the given 'sandboxObject'.
 */
declare function wl_get_object_up_vector(
  sandboxObject: WildLife.SandboxObject,
): WildLife.Vector;

/**
 * Returns whether the given 'sandboxObject' is currently visible or not.
 */
declare function wl_get_object_up_vector(
  sandboxObject: WildLife.SandboxObject,
): boolean;

/**
 * This function can be used to set the visibility of the given 'sandboxObject'
 * to the value of 'newVisibility'
 */
declare function wl_set_object_visibility(
  sandboxObject: WildLife.SandboxObject,
  newVisibility: boolean,
): void;
