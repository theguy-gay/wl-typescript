/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This function will invoke the "Create missing" function for custom poses,
 * which creates all pose controls that are not yet set in the given
 * 'poseSandboxObject'. If the given pose is not yet in custom pose mode, this
 * function will also convert it to a custom pose in the process. Returns true
 * if successful, otherwise false.
 */
declare function wl_pose_create_missing_controls(
  poseSandboxObject: WildLife.SandboxObject,
): boolean;

/**
 * This function returns the name of a given body pose index. Caution: While
 * Lua indices start at 1, the internal pose data is not Lua based and starts
 * at 0, meaning index 0 will return the first name.
 */
declare function wl_pose_get_body_pose_name(
  poseSandboxObject: WildLife.SandboxObject,
  index: number,
): string;

/**
 * This function will return the sandbox object which is currently controlling
 * a custom pose with the given 'controlID'.
 */
declare function wl_pose_get_control_object(
  poseObject: WildLife.SandboxObject,
  controlID: string,
): WildLife.SandboxObject;

/**
 * Returns a table with all current control objects in the given 'poseObject'.
 * The key of each table entry is the controlID, and the value is the
 * corresponding sandboxObject.
 */
declare function wl_pose_get_control_objects(
  poseObject: WildLife.SandboxObject,
): WildLife.Table;

/**
 * This function will return the character that the given 'poseObject' is
 * currently controlling. Returns nil if no character is currently being
 * controlled.
 */
declare function wl_pose_get_controlled_character(
  poseObject: WildLife.SandboxObject,
): WildLife.SandboxObject;

/**
 * This function returns the name of a given face pose index. Caution: While
 * Lua indices start at 1, the internal pose data is not Lua based and starts
 * at 0, meaning index 0 will return the first name.
 */
declare function wl_pose_get_face_pose_name(
  poseSandboxObject: WildLife.SandboxObject,
  index: number,
): string;

/**
 * This function will return the amount of body poses which the given
 * 'poseSandboxObject' has. If the given 'poseSandboxObject' is nil or is not a
 * pose object, the function will return 0.
 */
declare function wl_pose_get_num_body_poses(
  poseSandboxObject: WildLife.SandboxObject,
): number;

/**
 * This function will return the amount of face poses which the given
 * 'poseSandboxObject' has. If the given 'poseSandboxObject' is nil or is not a
 * pose object, the function will return 0.
 */
declare function wl_pose_get_num_face_poses(
  poseSandboxObject: WildLife.SandboxObject,
): number;

/**
 * This function will set the sandbox object which is currently controlling a
 * custom pose with the given 'controlID'. Returns true if successful,
 * otherwise false.
 */
declare function wl_pose_set_control_object(
  poseObject: WildLife.SandboxObject,
  controlID: string,
  controlObject: WildLife.SandboxObject,
): boolean;

/**
 * This function can bulk apply many custom control objects to the given
 * 'poseObject'. Each entry in the 'controlObjectsTable' needs to have the
 * controlID as the key and a sandboxObject in it's value. Returns true if
 * successful, otherwise false.
 */
declare function wl_pose_set_control_objects(
  poseObject: WildLife.SandboxObject,
  controlObjectsTable: WildLife.Table,
): boolean;
