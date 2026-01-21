/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Returns an array of every object currently in the scene. Caution: Lua arrays are 1-indexed, meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_all_objects(): WildLife.SandboxObject[];

/**
 * This function returns a string table of all prop categories that exist within
 * the game (Flora, Decoration, Automation, Prototype etc.)
 */
declare function wl_get_all_prop_categories(): string[];

/**
 * This function will return a string table of all prop IDs in the game.
 */
declare function wl_get_all_prop_ids(): string[];

/**
 * This function will return a string table of all prop IDs in the game that are
 * in a specific 'category'.
 */
declare function wl_get_all_prop_ids_in_category(category: string): string[];

/**
 * Returns an array of every top-level/root object currently in the scene. If you want to include children, use wl_get_all_objects. Caution: Lua arrays are 1-indexed, meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_all_root_objects(): WildLife.SandboxObject[];

/**
 * Returns a reference to the first sandbox object in the outliner named 'objectName'. Since this function potentially needs to iterate over lots of sandbox objects, it is better to cache the return value in a variable at game start and then using the variable in subsequent function calls
 */
declare function wl_get_object(objectName: string): WildLife.SandboxObject;

/**
 * Similarly to wl_get_object, this returns a sandbox object with the name 'objectName', but it will only search for a sandbox object that is parented below the given 'sandboxObject'. Since this function potentially needs to iterate over lots of sandbox objects, it is better to cache the return value in a variable at game start and then using the variable in subsequent function calls
 */
declare function wl_get_object_below(
  objectName: string,
  sandboxObject: WildLife.SandboxObject,
): WildLife.SandboxObject;

/**
 * Returns a sandbox object that has the given 'guid'. Returns nil if it does
 * not exist.
 */
declare function wl_get_object_by_guid(guid: string): WildLife.SandboxObject;

/**
 * This function will return the category that the given 'sandboxObject' is in.
 * This only works for props. Characters, Poses and Sex Scenes will return nil.
 */
declare function wl_get_object_category(
  sandboxObject: WildLife.SandboxObject
): string;

/**
 * Returns an array of all the direct children the 'sandboxObject' has. If you also want to retrieve children of children, use wl_get_object_children_recursive instead. Caution: Lua arrays are 1-indexed, meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_object_children(
  sandboxObject: WildLife.SandboxObject,
): WildLife.SandboxObject[];

/**
 * Returns an array of all the children the 'sandboxObject' has. If you only want to retrieve the direct children of the object, use wl_get_object_children instead. Caution: Lua arrays are 1-indexed, meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_object_children_recursive(
  sandboxObject: WildLife.SandboxObject,
): WildLife.SandboxObject[];

/**
 * Returns the underlying GUID of the 'sandboxObject'. Every object has a unique GUID, even if two objects share the same name, settings or other data. Keep in mind though, that the GUID is generated when an object gets spawned (map load, placing, prop collection etc), meaning that loading the same map multiple times will always result in a new unique GUID per object. Thus, saving and loading GUIDs over multiple sessions is not possible/recommended.
 */
declare function wl_get_object_guid(
  sandboxObject: WildLife.SandboxObject
): string;

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
 * Returns an array of all the direct children the currently executing Lua prop has. If you also want to retrieve children of children, use wl_get_object_self_children_recursive instead. Caution: Lua arrays are 1-indexed, meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_object_self_children(): WildLife.SandboxObject[];

/**
 * Returns an array of all the children the currently executing Lua prop has. If you only want to retrieve the direct children of the object, use wl_get_object_self_children instead. Caution: Lua arrays are 1-indexed, meaning the first element of an array is in array[1] and not in array[0].
 */
declare function wl_get_object_self_children_recursive(): WildLife.SandboxObject[];

/**
 * Returns the object parent of the currently executing Lua prop.
 */
declare function wl_get_object_self_parent(): WildLife.SandboxObject;

/**
 * This function will return the type of the given 'sandboxObject'. If the specified object is a Prop, it will return the kind of prop, for example, a Lua prop will return "Lua" or an input prop will return "Input". Characters will return "Character", poses will return "Pose" and sex scenes will return "SexScene". Otherwise nil.
 */
declare function wl_get_object_type(
  sandboxObject: WildLife.SandboxObject
): string;

/**
 * Similar to wl_get_object, but instead of returning the first instance of a sandbox object named 'objectName', it will instead return an array of all sandbox objects with that name. Caution: Lua arrays are 1-indexed, meaning the first element of an array is in array[1] and not in array[0]
 */
declare function wl_get_objects(objectName: string): WildLife.SandboxObject[];

/**
 * Returns the current player object.
 */
declare function wl_get_player_object(): WildLife.SandboxObject;

/**
 * This function assigns the 'characterObject' to the specified 'controllerObject'. This way you can make the character go from an NPC, to a pose, to a sex scene. If 'characterObject' is nil, the 'controllerObject' will release its currently controlled character (if it has one) to become an NPC. If 'controllerObject' is nil, the 'characterObject' will release itself from whatever controller is currently controlling it. The 'index' parameter is only necessary for sex scenes. Returns true if successful, otherwise false.
 */
declare function wl_set_character_controller(
  characterObject: WildLife.SandboxObject | null,
  controllerObject: WildLife.SandboxObject | null,
  index?: number
): boolean;

/**
 * Returns the current attachment of the given 'sandboxObject'. This is only really relevant, if the given 'sandboxObject' is attached to a character.
 */
declare function wl_get_object_attachment(
  sandboxObject: WildLife.SandboxObject
): string;

/**
 * Will return an object that is above the given 'sandboxObject' in the scene outliner. The optional 'amount' parameter determines how many objects you want to go up, default is 1. The optional 'onlyVisible' parameter will change the behaviour of this function depending on the foldout state of the objects in the hierarchy: If all children of all objects in your scene are expanded, the function will always return the object directly above the specified 'sandboxObject' (if the amount is 1), but if you go up to an object with collapsed children, having 'onlyVisible' on 'true' will return the parent itself, while having 'onlyVisible' on 'false' will return that parent's last child (recursively). Default is false.
 */
declare function wl_get_object_over(
  sandboxObject: WildLife.SandboxObject,
  amount?: number,
  onlyVisible?: boolean
): WildLife.SandboxObject;

/**
 * Will return an object that is above the given 'sandboxObject' in the scene outliner but shares the same parent. The optional 'amount' parameter determines how many objects you want to go up, default is 1. If the 'sandboxObject' is already the top child in the hierarchy, trying to use this function with a positive amount will return nil since there are no objects above it sharing the same parent.
 */
declare function wl_get_object_over_with_same_parent(
  sandboxObject: WildLife.SandboxObject,
  amount?: number
): WildLife.SandboxObject;

/**
 * Will return an object that is below the given 'sandboxObject' in the scene outliner. The optional 'amount' parameter determines how many objects you want to go down, default is 1. The optional 'onlyVisible' parameter will change the behaviour of this function depending on the foldout state of the objects in the hierarchy: If all children of all objects in your scene are expanded, the function will always return the object directly below the specified 'sandboxObject' (if the amount is 1), but if you go down from an object with collapsed children, having 'onlyVisible' on 'true' will return the next visible object, while having 'onlyVisible' on 'false' will return that parent's first child. Default is false.
 */
declare function wl_get_object_under(
  sandboxObject: WildLife.SandboxObject,
  amount?: number,
  onlyVisible?: boolean
): WildLife.SandboxObject;

/**
 * Will return an object that is below the given 'sandboxObject' in the scene outliner but shares the same parent. The optional 'amount' parameter determines how many objects you want to go down, default is 1. If the 'sandboxObject' is already the bottom child in the hierarchy, trying to use this function with a positive amount will return nil since there are no objects below it sharing the same parent.
 */
declare function wl_get_object_under_with_same_parent(
  sandboxObject: WildLife.SandboxObject,
  amount?: number
): WildLife.SandboxObject;

/**
 * Can be used to attach the 'sandboxObject' to 'newParentObject'. If the specified parent is nil then the object will be detached from everything. Returns true if successful, otherwise false. The optional 'attachment' parameter will determine the bone on which to attach this object to if the 'newParentObject' is a character, default is "None". The second optional parameter 'desiredChildIndex' will try to put the 'sandboxObject' at the desired position below the 'newParentObject', meaning 0 would put it as the first child and any higher number will put it further down the list. Default is -1, which defaults to the end of the children list.
 */
declare function wl_set_object_parent(
  sandboxObject: WildLife.SandboxObject,
  newParentObject: WildLife.SandboxObject | null,
  attachment?: string,
  desiredChildIndex?: number
): boolean;
