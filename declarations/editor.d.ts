/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This function will focus the editor camera on the given 'sandboxObject'
 * similarly to how key "F" does it. Returns true if successful, otherwise
 * false.
 */
declare function wl_editor_focus_object(
  sandboxObject: WildLife.SandboxObject,
): boolean;

/**
 * Returns the active object of a selection, meaning the object that currently
 * has the movement gizmo attached to it.
 */
declare function wl_editor_get_active_object(): WildLife.SandboxObject;

/**
 * Returns an array of all of the currently selected objects in the outliner.
 */
declare function wl_editor_get_selection(): WildLife.SandboxObject[];

/**
 * This function can be used to set the current active object, meaning the
 * object that currently has the movement gizmo attached to it. This will only
 * succeed if the given sandboxObject is not locked and is part of the current
 * selection. Returns true when successful, otherwise false.
 */
declare function wl_editor_set_active_object(
  sandboxObject: WildLife.SandboxObject,
): boolean;

/**
 * Sets the current selection of the editor. This function accepts a
 * sandboxObject array, a single sandboxObject and nil. nil will deselect
 * everything. Returns true if successful, otherwise false.
 */
declare function wl_editor_set_selection(
  sandboxObjects: WildLife.SandboxObject[] | WildLife.SandboxObject | null,
): boolean;

/**
 * This function will spawn a character into the world. The 'characterName'
 * specifies the character that should be spawned, this is not the skeleton
 * name.
 */
declare function wl_editor_spawn_character(
  characterName: string,
  name?: string,
): WildLife.SandboxObject | null;

/**
 * This function will spawn a pose into the world. The 'characterName' specifies
 * the character that should be spawned, this is not the skeleton name.
 */
declare function wl_editor_spawn_pose(
  characterName: string,
  name?: string,
): WildLife.SandboxObject | null;

/**
 * This function will spawn a prop into the world. The 'propID' of a prop can be
 * found when hovering over the desired prop in the editor.
 */
declare function wl_editor_spawn_prop(
  propID: string,
  name?: string,
): WildLife.SandboxObject | null;

/**
 * Tries to spawn a prop collection with the given name. Returns the top-most
 * spawned object when successful, otherwise nil.
 */
declare function wl_editor_spawn_prop_collection(
  propCollectionNameString: string,
): WildLife.SandboxObject | null;

/**
 * This function will spawn a sex scene into the world. The 'charactersArray'
 * and 'animationsArray' tables need to contain at least one element to be
 * accepted.
 */
declare function wl_editor_spawn_sex_scene(
  charactersArray: string[],
  animationsArray: string[],
  name?: string,
): WildLife.SandboxObject | null;

/**
 * This function will attempt to duplicate the specified 'sandboxObject' with
 * all it's children. Returns the newly duplicated object.
 */
declare function wl_editor_duplicate_object(
  sandboxObject: WildLife.SandboxObject,
  makeNamesUnique?: boolean,
): WildLife.SandboxObject;

/**
 * This function can be used to delete the specified 'sandboxObject'. Returns
 * true if successful, otherwise false.
 */
declare function wl_editor_delete_object(
  sandboxObject: WildLife.SandboxObject,
): boolean;
