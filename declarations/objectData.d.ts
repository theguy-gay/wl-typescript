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
 * The function changes the name of the specified 'sandboxObject'. Returns true
 * if successful, otherwise false.
 */
declare function wl_set_object_name(
  sandboxObject: WildLife.SandboxObject,
  name: string,
): boolean;

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
declare function wl_get_object_visibility(
  sandboxObject: WildLife.SandboxObject,
): boolean;

/**
 * This function can be used to set the visibility of the given 'sandboxObject'
 * to the value of 'newVisibility'. Setting the optional 'recursive' boolean to
 * 'true' will also change the visibility of all child objects to the given
 * 'newVisibility'.
 */
declare function wl_set_object_visibility(
  sandboxObject: WildLife.SandboxObject,
  newVisibility: boolean,
  recursive?: boolean,
): void;

/**
 * Returns whether the given object is valid. This might be necessary if you
 * want to make sure that an object that was saved in a variable has not since
 * been deleted.
 */
declare function wl_is_object_valid(
  sandboxObject: WildLife.SandboxObject,
): boolean;
