/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This function returns the current time in the animation prop. Returns -1 if
 * unsuccessful.
 */
declare function wl_animation_get_current_time(
  animationObject: WildLife.SandboxObject,
): number;

/**
 * This function will return the guid of the event track. The event track works
 * the same as an object track, except that the guid is always the same and it
 * doesn't point towards an object.
 */
declare function wl_animation_get_event_track_guid(): string;

/**
 * Calling this function will move the play cursor to the specified 'time'. By
 * default, the objects in the animation will update and all event notifies
 * between the old and the new position will be triggered, but this can be
 * disabled with the optional 'updateAnimation' and 'triggerNotifies' parameters
 * respectively. Returns true if successful, otherwise false.
 */
declare function wl_animation_go_to_time(
  animationObject: WildLife.SandboxObject,
  time: number,
  updateAnimation?: boolean,
  triggerNotifies?: boolean,
): boolean;

/**
 * This function will remove a group with the given 'groupName' from an
 * animation. By default, all tracks currently in that group will not be deleted
 * and will just move out of the group. If you do want to delete all sub-tracks,
 * set the optional 'removeChildren' parameter to true. Returns true if
 * successful, otherwise false.
 */
declare function wl_animation_group_remove(
  animationObject: WildLife.SandboxObject,
  groupName: string,
  removeChildren?: boolean,
): boolean;

/**
 * This function will rename a group in the given 'animationObject' from
 * 'oldGroupName' to 'newGroupName'. Returns true if successful, otherwise
 * false.
 */
declare function wl_animation_group_rename(
  animationObject: WildLife.SandboxObject,
  oldGroupName: string,
  newGroupName: string,
): boolean;

/**
 * This function will return an array of all guids that have a track in the
 * given 'animationObject'.
 */
declare function wl_animation_guid_tracks_get(
  animationObject: WildLife.SandboxObject,
): string[];

/**
 * This function will add a keyframe to the 'animationObject'. The object's
 * 'guid', the 'identifier' and 'time' need to be specified for the keyframe to
 * know what track to be added to. The 'value' parameter can be a float,
 * integer, bool, string, color, vector or notify (which is also just two
 * strings separated with a semicolon e.g. "eventName;eventParameter"). The
 * 'groupIndex' specifies what subtrack the keyframe should be added to (for
 * example, whether to add to the red, green, blue or alpha of a color track,
 * starting at 0 for red/x). If the 'value' already is a color/vector, the
 * 'groupIndex' is not needed and a keyframe will be added to all subtracks.
 * Returns true if successful, otherwise false.
 */
declare function wl_animation_keyframe_add(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  time: number,
  value: number | boolean | string | WildLife.Color | WildLife.Vector,
  groupIndex?: number,
): boolean;

/**
 * This function will add a keyframe to the 'animationObject'. The object's
 * 'guid', the 'identifier' and 'time' need to be specified for the keyframe to
 * know what track to be added to. The 'keyframeData' can be created using the
 * wl_animation_keyframe_create function. The 'groupIndex' specifies what
 * subtrack the keyframe should be added to (for example, whether to add to the
 * red, green, blue or alpha of a color track, starting at 0 for red/x). If the
 * 'value' already is a color/vector, the 'groupIndex' is not needed and a
 * keyframe will be added to all subtracks. Returns true if successful,
 * otherwise false.
 */
declare function wl_animation_keyframe_add_advanced(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  time: number,
  keyframeData: WildLife.KeyframeData,
  groupIndex?: number,
): boolean;

/**
 * This function will create a table that can be used as the 'keyframeData' in
 * the wl_animation_keyframe_add_advanced function. The 'value' parameter can be
 * a float, integer, bool, string, color, vector or notify (which is also just
 * two strings separated with a semicolon e.g. "eventName;eventParameter"). The
 * 'inTangent' and 'outTangent' define the incoming and outgoing tangents, where
 * 0 means flat. The 'tangentMode' parameter defines how the tangent should be
 * handled, default is "Smooth". Available candidates are: "Auto" "Smooth"
 * "Broken". The 'inTangentType' and 'outTangentType' parameters define the
 * interpolation, default is "Free". Available candidates are: "Free" "Linear"
 * "Constant"
 */
declare function wl_animation_keyframe_create(
  value: number | boolean | string | WildLife.Color | WildLife.Vector,
  inTangent?: number,
  outTangent?: number,
  tangentMode?: string,
  inTangentType?: string,
  outTangentType?: string,
): WildLife.KeyframeData;

/**
 * This function will return the data of a keyframe at the given 'time'. The
 * object's 'guid', and 'identifier' need to be specified to narrow down what
 * track to check on. The 'groupIndex' specifies the subtrack
 * (red/green/blue/alpha or x/y/z as an index starting from 0). The resulting
 * table will contain the following data: "value" "in_tangent" "out_tangent"
 * "tangent_mode" "in_tangent_type" "out_tangent_type" "time". If no keyframe
 * was found at the specified time, nil will be returned instead.
 */
declare function wl_animation_keyframe_get(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  time: number,
  groupIndex: number,
): WildLife.KeyframeData | null;

/**
 * This function will return the data of a keyframe with the given 'index' on
 * it's track. The object's 'guid', and 'identifier' need to be specified to
 * narrow down what track to check on. The 'groupIndex' specifies the subtrack
 * (red/green/blue/alpha or x/y/z as an index starting from 0). The resulting
 * table will contain the following data: "value" "in_tangent" "out_tangent"
 * "tangent_mode" "in_tangent_type" "out_tangent_type" "time". If no keyframe
 * was found at the specified time, nil will be returned instead.
 */
declare function wl_animation_keyframe_get_index(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  index: number,
  groupIndex: number,
): WildLife.KeyframeData | null;

/**
 * This function will attempt to remove a keyframe at the given 'time'. The
 * object's 'guid', the 'identifier' and 'time' need to be specified for the
 * keyframe to know what track to be removed from. The 'groupIndex' specifies
 * the subtrack (red/green/blue/alpha or x/y/z as an index starting from 0).
 * Returns true if a keyframe was removed, otherwise false.
 */
declare function wl_animation_keyframe_remove(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  time: number,
  groupIndex: number,
): boolean;

/**
 * This function will attempt to remove a keyframe with the given 'index' in
 * it's track (starting at 0 for the first keyframe). The object's 'guid', and
 * 'identifier' need to be specified for the keyframe to know what track to be
 * removed from. The 'groupIndex' specifies the subtrack (red/green/blue/alpha
 * or x/y/z as an index starting from 0). Returns true if a keyframe was
 * removed, otherwise false.
 */
declare function wl_animation_keyframe_remove_index(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  index: number,
  groupIndex: number,
): boolean;

/**
 * This code will add a keyframe track to the given 'animationObject' prop. The
 * 'guid' is the object guid of the desired object to add to, and the
 * 'identifier' is the option you want to animate with this keyframe track
 * (OptionID). For position, rotation and scale the identifier is not strictly
 * needed, but it is best to use "Position", "Rotation" and "Scale" respectively
 * to avoid potential problems. The given 'type' defines what kind of track it
 * should be. Available types are: "Position" "Rotation" "Scale" "Float" "Int"
 * "Bool" "String" "Vector" "Color" "Notify". For more control over the keyframe
 * track, use wl_animation_keyframe_track_add_advanced instead. Returns true if
 * successful, otherwise false.
 */
declare function wl_animation_keyframe_track_add(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  type: string,
): boolean;

/**
 * This code will add a keyframe track to the given 'animationObject' prop. The
 * 'guid' is the object guid of the desired object to add to, and the
 * 'identifier' is the option you want to animate with this keyframe track
 * (OptionID). For position, rotation and scale the identifier is not strictly
 * needed, but it is best to use "Position", "Rotation" and "Scale" respectively
 * to avoid potential problems. The 'keyframeTrackData' is the keyframe track
 * data you want to add - you can create this data using the
 * wl_animation_keyframe_track_create function. Returns true if successful,
 * otherwise false.
 */
declare function wl_animation_keyframe_track_add_advanced(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  keyframeTrackData: WildLife.KeyframeTrackData,
): boolean;

/**
 * This function will create a table that can be used as the 'keyframeTrackData'
 * in the wl_animation_keyframe_track_add_advanced function. The given 'type'
 * defines what kind of track it should be. Available types are: "Position"
 * "Rotation" "Scale" "Float" "Int" "Bool" "String" "Vector" "Color" "Notify".
 * The 'tag' specifies what exactly should be affected, Available tags are:
 * "Default" "BoneController"
 */
declare function wl_animation_keyframe_track_create(
  type: string,
  tag: string,
): WildLife.KeyframeTrackData;

/**
 * This function will return a table with the data of the 'guid' -> 'identifier'
 * keyframe track. The entries in this table will be: "type" "tag" "num_tracks"
 */
declare function wl_animation_keyframe_track_get(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
): WildLife.KeyframeTrack;

/**
 * This function will return an array of all keyframes in the 'guid' ->
 * 'identifier' -> 'groupIndex' keyframe track. Every keyframe entry in this
 * table will have the following data: "value" "in_tangent" "out_tangent"
 * "tangent_mode" "in_tangent_type" "out_tangent_type" "time"
 */
declare function wl_animation_keyframe_track_get_keyframes(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
  groupIndex: number,
): WildLife.KeyframeData[];

/**
 * This function will remove the keyframe track for the given 'guid' and
 * 'identifier' on the 'animationObject'. Any owned keyframes will also be
 * cleared. Returns true if successful, otherwise false.
 */
declare function wl_animation_keyframe_track_remove(
  animationObject: WildLife.SandboxObject,
  guid: string,
  identifier: string,
): boolean;

/**
 * This code will add an object track to the given 'animationObject' prop. The
 * 'guid' is the object guid of the desired object to add, or
 * wl_animation_get_event_track_guid if you want to add the event track. For
 * more control over the object track, use wl_animation_object_track_add_advanced
 * instead. Returns true if successful, otherwise false.
 */
declare function wl_animation_object_track_add(
  animationObject: WildLife.SandboxObject,
  guid: string,
): boolean;

/**
 * This code will add an object track to the given 'animationObject' prop. The
 * 'objectTrackData' is the object track data you want to add - you can create
 * this data using the wl_animation_object_track_create function. Returns true
 * if successful, otherwise false.
 */
declare function wl_animation_object_track_add_advanced(
  animationObject: WildLife.SandboxObject,
  objectTrackData: WildLife.ObjectTrackData,
): boolean;

/**
 * This function will create a table that can be used as the 'objectTrackData'
 * in the wl_animation_object_track_add_advanced function. The given 'guid' is
 * the guid of the object you want to create a track for, while the 'groupName'
 * specifies the group it should be added to within the animation prop. You can
 * add slashes to put it into a subgroup, for example "Maya/Arms/Hands".
 */
declare function wl_animation_object_track_create(
  guid: string,
  groupName: string,
): WildLife.ObjectTrackData;

/**
 * This function will return a table with the data of the 'guid' object track.
 * The entries in this table will be: "guid" "group_name" "sub_tracks"
 */
declare function wl_animation_object_track_get(
  animationObject: WildLife.SandboxObject,
  guid: string,
): WildLife.ObjectTrack;

/**
 * This function will remove an object track with the given 'guid' on the
 * 'animationObject'. Any owned keyframe tracks and keyframes will also be
 * cleared. Returns true if successful, otherwise false.
 */
declare function wl_animation_object_track_remove(
  animationObject: WildLife.SandboxObject,
  guid: string,
): boolean;

/**
 * This function turns on or off auto-keying of the given 'animationObject'
 * based on the specified 'isEnabled' parameter.
 */
declare function wl_animation_set_auto_keying_enabled(
  animationObject: WildLife.SandboxObject,
  isEnabled: boolean,
): boolean;

/**
 * This function will put the given object track into the specified 'groupName'.
 * For subgroups you can use slashes, for example "Maya/Arms/Hand". Returns true
 * if successful, otherwise false.
 */
declare function wl_animation_set_object_track_group(
  animationObject: WildLife.SandboxObject,
  guid: string,
  groupName: string,
): boolean;
