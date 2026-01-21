/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This function will return a list of all valid animation names for a sex
 * scene pairing with the given characters in the 'characters_array'.
 */
declare function wl_sex_scene_get_animations_for_characters(
  characters_array: string[],
): string[];

/**
 * Returns a table with the camera sequence data for the 'sexSceneObject' for
 * animation at 'animationIndex'.
 */
declare function wl_sex_scene_get_camera_sequence(
  sexSceneObject: WildLife.SandboxObject,
  animationIndex: number,
): WildLife.Table;

/**
 * Returns a table with a specific camera entry (index 'cameraSequenceIndex') in
 * the camera sequence data for the 'sexSceneObject' for animation at
 * 'animationIndex'.
 */
declare function wl_sex_scene_get_camera_sequence_index(
  sexSceneObject: WildLife.SandboxObject,
  animationIndex: number,
  cameraSequenceIndex: number,
): WildLife.Table;

/**
 * This function will return a list of all valid character pairings for sex
 * scenes.
 */
declare function wl_sex_scene_get_character_pairings(): WildLife.Table;

/**
 * This function will return a controlled character object at the specified
 * character 'index' of the 'sexSceneObject'. Returns nil if invalid (empty) or
 * out if the index is out of bounds. Since this function accesses internal
 * data, the index starts at 0 for the first element.
 */
declare function wl_sex_scene_get_controlled_character_at(
  sexSceneObject: WildLife.SandboxObject,
  index: number,
): WildLife.SandboxObject;

/**
 * This function will return an array table of all the characters the given
 * 'sexSceneObject' is currently controlling. Empty slots will still show up as
 * nil values in the array.
 */
declare function wl_sex_scene_get_controlled_characters(
  sexSceneObject: WildLife.SandboxObject,
): WildLife.SandboxObject[];

/**
 * This function will return the amount of characters the given 'sexSceneObject'
 * can have. Returns 0 if the 'sexSceneObject' is invalid. The amount of
 * characters will always remain the same for the sex scene, even if some
 * character slots are currently empty.
 */
declare function wl_sex_scene_get_num_controlled_characters(
  sexSceneObject: WildLife.SandboxObject,
): number;

/**
 * This function will apply the given 'cameraSequence' data to the
 * 'sexSceneObject' animation at index 'animationIndex'.
 */
declare function wl_sex_scene_set_camera_sequence(
  sexSceneObject: WildLife.SandboxObject,
  animationIndex: number,
  cameraSequence: WildLife.Table,
): boolean;

/**
 * This function will apply the given 'cameraSequence' data entry to the
 * 'sexSceneObject' animation at index 'animationIndex', camera sequence index
 * 'cameraSequenceIndex'.
 */
declare function wl_sex_scene_set_camera_sequence_index(
  sexSceneObject: WildLife.SandboxObject,
  animationIndex: number,
  cameraSequenceIndex: number,
  cameraSequence: WildLife.Table,
): boolean;
