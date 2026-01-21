/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This function adds a bone control to the given 'characterObject'. The
 * 'boneName' specifies which bone should be modified by the 'boneControl'. You
 * can create a bone control by using the wl_character_create_bone_control
 * function. Calling this function multiple times will overwrite the previous
 * bone control, as there can only be a maximum of one bone control per bone at
 * any time. Returns true if successful, otherwise false.
 */
declare function wl_character_add_bone_control(
  characterObject: WildLife.SandboxObject,
  boneName: string,
  boneControl: WildLife.BoneControl,
): boolean;

/**
 * This is a helper function to create a BoneControl table which can be used as
 * a parameter in the wl_character_add_bone_control function. All parameters are
 * optional and default to: controlObject: nil, alpha: 1.0, positionOffset: a
 * vector with 0 on all axes, rotationOffset: a vector with 0 on all axes,
 * scaleOffset: a vector with 1 on all axes, controlChildBones: true
 */
declare function wl_character_create_bone_control(
  controlObject?: WildLife.SandboxObject,
  alpha?: number,
  positionOffset?: WildLife.Vector,
  rotationOffset?: WildLife.Vector,
  scaleOffset?: WildLife.Vector,
  controlChildBones?: boolean,
): WildLife.BoneControl;

/**
 * This function will return all current bone controls on the given
 * 'characterObject'. If the character is invalid, this function will return
 * nil.
 */
declare function wl_character_get_all_bone_controls(
  characterObject: WildLife.SandboxObject,
): WildLife.BoneControl[] | null;

/**
 * This function will return an existing bone control table from the given
 * 'characterObject' and 'boneName'. If the character is invalid or the
 * specified bone does not have a bone control, this function will return nil.
 */
declare function wl_character_get_bone_control(
  characterObject: WildLife.SandboxObject,
  boneName: string,
): WildLife.BoneControl | null;

/**
 * This function returns the internal character name of the given
 * 'characterObject'.
 */
declare function wl_character_get_character_name(
  characterObject: WildLife.SandboxObject,
): string;

/**
 * This function returns the current controller of the given 'characterObject'.
 * This could either be a pose, a sex scene or nil.
 */
declare function wl_character_get_controller(
  characterObject: WildLife.SandboxObject,
): WildLife.SandboxObject | null;

/**
 * This function will return the amount of outfits the specified
 * 'sandboxCharacter' has.
 */
declare function wl_character_get_num_outfits(
  sandboxCharacter: WildLife.SandboxObject,
): number;

/**
 * This function will return the names of all existing character presets for the
 * given 'characterName'.
 */
declare function wl_character_get_presets_for_character(
  characterName: string,
): string[];

/**
 * This function will return the names of all existing character presets for the
 * given 'skeletonName'. This means that using a 'skeletonName' of "Maya" will
 * also return all presets for characters that share the Maya skeleton, like
 * Serenia, Alissa etc. If you want to get presets that are only for Maya, use
 * wl_character_get_presets_for_character instead.
 */
declare function wl_character_get_presets_for_skeleton(
  skeletonName: string,
): string[];

/**
 * This function returns the internal character skeleton name of the given
 * 'characterObject'.
 */
declare function wl_character_get_skeleton_name(
  characterObject: WildLife.SandboxObject,
): string;

/**
 * This function removes a bone control on the given 'characterObject'. The
 * 'boneName' specifies which bone should be removed'. Returns true if
 * successful, otherwise false.
 */
declare function wl_character_remove_bone_control(
  characterObject: WildLife.SandboxObject,
  boneName: string,
): boolean;

/**
 * This function returns all existing attachment names for characters.
 */
declare function wl_get_all_attachment_names(): string[];

/**
 * This function returns an array of character names that are associated with
 * this skeleton.
 */
declare function wl_get_character_names_with_skeleton(
  skeletonName: string,
): string[];

/**
 * This function returns the skeleton name of a given 'characterName'.
 */
declare function wl_get_skeleton_from_character_name(
  characterName: string,
): string;

/**
 * This function will return the name of the parent bone of the given 'boneName'
 * on 'characterObject'. Returns nil if no parent bone was found.
 */
declare function wl_character_get_parent_bone(
  characterObject: WildLife.SandboxObject,
  boneName: string,
): string | null;
