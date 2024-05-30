/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Returns a reference to the first sandbox object in the outliner named
 * 'objectName'. Since this function potentially needs to iterate over lots of
 * sandbox objects, it is better to cache the return value in a variable at game
 * start and then using the variable in subsequent function calls
 */
declare function wl_get_object(objectName: string): WildLife.SandboxObject;

/**
 * Similarly to wl_get_object, this returns a sandbox object with the name
 * 'objectName', but it will only search for a sandbox object that is parented
 * below the given 'sandboxObject'. Since this function potentially needs to
 * iterate over lots of sandbox objects, it is better to cache the return value
 * in a variable at game start and then using the variable in subsequent
 * function calls
 *
 * Example: Say we have the following outliner hierarchy:
 *
 * ```
 * Lamp Post 1
 *  - Post
 *  - Light
 * Lamp Post 2
 *  - Post
 *  - Light
 * Lamp Post 3
 *  - Post
 *  - Light
 * ```
 *
 * As you can see, there are multiple sandbox objects with the name "Light".
 */
declare function wl_get_object_below(
  objectName: string,
  sandboxObject: WildLife.SandboxObject,
): WildLife.SandboxObject;

/**
 * Returns an array of all the direct children the 'sandboxObject' has. If you
 * also want to retrieve children of children, use
 * wl_get_object_children_recursive instead. Caution: Lua arrays are 1-indexed,
 * meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_object_children(
  sandboxObject: WildLife.SandboxObject,
): [WildLife.SandboxObject];

/**
 * Returns an array of all the children the 'sandboxObject' has. If you only
 * want to retrieve the direct children of the object, use
 * wl_get_object_children instead. Caution: Lua arrays are 1-indexed, meaning
 * the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_object_children_recursive(
  sandboxObject: WildLife.SandboxObject,
): [WildLife.SandboxObject];

/**
 * Returns the object parent of the given 'sandboxObject'.
 */
declare function wl_get_object_parent(
  sandboxObject: WildLife.SandboxObject,
): WildLife.SandboxObject;

/**
 * Returns a reference to the Lua sandbox object that is currently executing
 * this code.
 */
declare function wl_get_object_self(): WildLife.SandboxObject;

/**
 * Returns an array of all the direct children the currently executing Lua prop
 * has. If you also want to retrieve children of children, use
 * wl_get_object_self_children_recursive instead. Caution: Lua arrays are
 * 1-indexed, meaning the first element of an array is in array[1] and not in
 * array[0].
 */
declare function wl_get_object_self_children(): [WildLife.SandboxObject];

/**
 * Returns an array of all the children the currently executing Lua prop has. If
 * you only want to retrieve the direct children of the object, use
 * wl_get_object_self_children instead. Caution: Lua arrays are 1-indexed,
 * meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_object_self_children_recursive(): [
  WildLife.SandboxObject
];

/**
 * Returns the object parent of the currently executing Lua prop.
 */
declare function wl_get_object_self_parent(): WildLife.SandboxObject;

/**
 * Similar to wl_get_object, but instead of returning the first instance of a
 * sandbox object named 'objectName', it will instead return an array of all
 * sandbox objects with that name. Caution: Lua arrays are 1-indexed, meaning
 * the first element of an array is in array[1] and not in array[0]
 */
declare function wl_get_objects(): [WildLife.SandboxObject];

/**
 * Returns the current player object.
 */
declare function wl_get_player_object(): WildLife.SandboxObject;
