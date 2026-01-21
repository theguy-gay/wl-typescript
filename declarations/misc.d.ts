/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This will cast a box with the given 'extentsVector' (meaning the distance
 * from center of the box to each outside face on the x, y and z axes) from the
 * given location 'originVector' in the direction of 'directionVector' with a
 * max distance of 'maxDistance'. The box can have a different 'rotationVector'
 * of needed. If the box hits anything on it's path, it will add useful hit
 * information into a the returned RayCastHit table. Compared with the normal
 * wl_raycast, this function will add three additional entries into the
 * resulting RayCastHit table: 'hit_sphere_point', 'hit_sphere_normal' and
 * 'penetration_depth'. 'hit_sphere_point' will contain the center position of
 * the box when it touched a surface (as opposed to where exactly the surface
 * touched in 'hit_point') and 'hit_sphere_normal' will contain a normalized
 * direction vector that points from the 'hit_point' towards 'hit_sphere_point'.
 * If the boxcast ends up inside an object (for example, if the cast already
 * starts inside a wall), the 'penetration_depth' will show how far the box was
 * embedded in that object.
 */
declare function wl_boxcast(
  extentsVector: WildLife.Vector,
  originVector: WildLife.Vector,
  directionVector: WildLife.Vector,
  maxDistance: number,
  rotationVector: WildLife.Vector,
): WildLife.RayCastHit;

/**
 * This will cast a capsule with the given 'radius' and 'halfHeight' (meaning
 * the distance from the origin to the start of the spherical caps) from the
 * given location 'originVector' in the direction of 'directionVector' with a
 * max distance of 'maxDistance'. The capsule can have a different
 * 'rotationVector' of needed. If the capsule hits anything on it's path, it
 * will add useful hit information into a the returned RayCastHit table.
 * Compared with the normal wl_raycast, this function will add three additional
 * entries into the resulting RayCastHit table: 'hit_sphere_point',
 * 'hit_sphere_normal' and 'penetration_depth'. 'hit_sphere_point' will contain
 * the center position of the capsule when it touched a surface (as opposed to
 * where exactly the surface touched in 'hit_point') and 'hit_sphere_normal'
 * will contain a normalized direction vector that points from the 'hit_point'
 * towards 'hit_sphere_point'. If the capsulecast ends up inside an object (for
 * example, if the cast already starts inside a wall), the 'penetration_depth'
 * will show how far the capsule was embedded in that object.
 */
declare function wl_capsulecast(
  radius: number,
  halfHeight: number,
  originVector: WildLife.Vector,
  directionVector: WildLife.Vector,
  maxDistance: number,
  rotationVector: WildLife.Vector,
): WildLife.RayCastHit;

/**
 * This function can be used to take a screenshot. The resulting image will be
 * saved to %localappdata%/WildLifeC/Saved/Screenshots. You can call this
 * function with a bool ('useGameResolution'), where 'true' will use the game's
 * current resolution as the dimensions for the screenshot, whereas 'false' will
 * use the screenshot resolution settings in the game options. Keep in mind that
 * this function can fail if either another screenshot is still being processed
 * or if the screenshot cooldown is currently active (this can be adjusted in
 * the game settings) Returns an absolute path to the new screenshot when
 * successful, otherwise returns an empty string.
 */
declare function wl_capture_screenshot(useGameResolution: boolean): string;

/**
 * This function can be used to take a screenshot. The resulting image will be
 * saved to %localappdata%/WildLifeC/Saved/Screenshots. Calling the function
 * with two integer values will take those values as the dimensions for the
 * screenshot. These values are internally clamped to a range of 1 to 4096. Keep
 * in mind that this function can fail if either another screenshot is still
 * being processed or if the screenshot cooldown is currently active (this can
 * be adjusted in the game settings) Returns an absolute path to the new
 * screenshot when successful, otherwise returns an empty string.
 */
declare function wl_capture_screenshot(
  resolutionX: number,
  resolutionY: number,
): string;

/**
 * This function will accurately combine two rotation vectors using internal
 * Quaternion maths. Keep in mind that the order of rotations is important here.
 * Switching 'rotationA' and 'rotationB' will give a different result.
 */
declare function wl_combine_rotations(
  rotationA: WildLife.Vector,
  rotationB: WildLife.Vector,
): WildLife.Vector;

/**
 * This function can be used to execute lua code at a later point in time. As
 * the name suggests, the 'delaySeconds' parameter defines the amount of seconds
 * to wait until executing the code in 'luaCodeString'.
 */
declare function wl_execute_delayed(
  delaySeconds: number,
  luaCodeString: string,
): void;

/**
 * This function will cancel a wl_execute_delayed_retriggerable call with the
 * given 'delayID'.
 */
declare function wl_execute_delayed_cancel(delayID: string): void;

/**
 * This function will create a delayed call similar to wl_execute_delayed, but
 * is assigned the given 'delayID'. No two delayed calls with the same ID can
 * exist at the same time. An existing delayed call will be overwritten when
 * this function is called with the same ID again.
 */
declare function wl_execute_delayed_retriggerable(
  delayID: string,
  delaySeconds: number,
  luaCodeString: string,
): void;

/**
 * This function will return a random GUID every time it is called.
 */
declare function wl_generate_guid(): string;

/**
 * This function will return the current view direction of the viewing camera as
 * a normalized vector.
 */
declare function wl_get_camera_direction(): WildLife.Vector;

/**
 * This function will return the current position of the viewing camera.
 */
declare function wl_get_camera_position(): WildLife.Vector;

/**
 * This function will return the current rotation of the viewing camera.
 */
declare function wl_get_camera_rotation(): WildLife.Vector;

/**
 * This functions return the time since the last frame, in seconds. This is
 * useful if you want to build functionality that is not dependent on the
 * framerate, like moving an object forwards by a constant value.
 */
declare function wl_get_delta_time(): number;

/**
 * This function will return a unique event name with the 'baseName' as the base
 * and a numbered suffix. For example, if your scene already contains an event
 * named "MyEvent", this function will return "MyEvent_001".
 */
declare function wl_get_unique_event_name(baseName: string): string;

/**
 * This function will return a unique material name with the 'baseName' as the
 * base and a numbered suffix. For example, if your scene already contains a
 * material named "MyMaterial", this function will return "MyMaterial_001".
 */
declare function wl_get_unique_material_name(baseName: string): string;

/**
 * This function will return a unique object name with the 'baseName' as the
 * base and a numbered suffix. For example, if your scene already contains an
 * object named "MyObject", this function will return "MyObject_001".
 */
declare function wl_get_unique_object_name(baseName: string): string;

/**
 * This function allows you to load another sandbox scene. The scene needs to be
 * compatible with the current level, for example, a Showroom map could not be
 * loaded while in the Wild Life map. Only the scene name needs to be specified
 * (without the .json extension). You can specify whether the loaded scene
 * should be loaded by itself or additively using the second function parameter.
 * Returns true or false, depending on the success of the load. This function is
 * experimental and could lead to a multitude of unexpected edge cases. Before
 * running this function, make sure all necessary scenes and code are saved to
 * prevent any data loss. It is also recommended to not load multiple scenes at
 * the same time, both additively and not. Any code that follows this function
 * could lead to unexpected behaviour and should be avoided.
 */
declare function wl_load_scene(
  sceneName: string,
  loadAdditively: boolean,
): boolean;

/**
 * This will cast an ray from the given location 'originVector' in the direction
 * of 'directionVector' with a max distance of 'maxDistance'. If the ray hits
 * anything on it's path, it will add useful hit information into a the returned
 * RayCastHit table.
 */
declare function wl_raycast(
  originVector: WildLife.Vector,
  directionVector: WildLife.Vector,
  maxDistance: number,
): WildLife.RayCastHit;

/**
 * This will cast a sphere with the given 'radius' from the given location
 * 'originVector' in the direction of 'directionVector' with a max distance of
 * 'maxDistance'. If the sphere hits anything on it's path, it will add useful
 * hit information into a the returned RayCastHit table. Compared with the
 * normal wl_raycast, this function will add three additional entries into the
 * resulting RayCastHit table: 'hit_sphere_point', 'hit_sphere_normal' and
 * 'penetration_depth'. 'hit_sphere_point' will contain the center position of
 * the sphere when it touched a surface (as opposed to where exactly the surface
 * touched in 'hit_point') and 'hit_sphere_normal' will contain a normalized
 * direction vector that points from the 'hit_point' towards 'hit_sphere_point'.
 * If the spherecast ends up inside an object (for example, if the cast already
 * starts inside a wall), the 'penetration_depth' will show how far the sphere
 * was embedded in that object.
 */
declare function wl_spherecast(
  radius: number,
  originVector: WildLife.Vector,
  directionVector: WildLife.Vector,
  maxDistance: number,
): WildLife.RayCastHit;

/**
 * This function will convert a 3D world position into a screen position. Keep
 * in mind that if you want to use these screen coordinates in your custom UI,
 * you need to include the wl_get_ui_scale in your calculations.
 */
declare function wl_world_to_screen_position(
  worldPositionVector: WildLife.Vector,
): WildLife.Vector;

/**
 * Converts a JSON string to a table.
 */
declare function wl_json_string_to_table(jsonString: string): WildLife.Table;

/**
 * Converts a table to a JSON string representation.
 */
declare function wl_table_to_json_string(table: WildLife.Table): string;

/**
 * Returns the mouse cursor location relative to the game window as a vector.
 */
declare function wl_get_mouse_position(): WildLife.Vector;

/**
 * Returns the global UI scale value. The UI scale is a dynamic value that
 * changes depending on the display resolution and the viewport resolution. A
 * screen position may not match the UI position in certain cases, so
 * incorporating this value into calculations will mitigate any position offsets
 * caused by this mismatch.
 */
declare function wl_get_ui_scale(): number;

/**
 * Takes the mouse position and creates a world space direction vector which
 * points in the direction of that pixel.
 */
declare function wl_mouse_cursor_to_world_direction(): WildLife.Vector;

/**
 * Takes the given screen position ('x', 'y') and creates a world space
 * direction vector which points in the direction of that pixel.
 */
declare function wl_screen_point_to_world_direction(
  x: number,
  y: number,
): WildLife.Vector;

/**
 * This function returns the current game's resolution width. When using this
 * function in combination with UI props, keep in mind that the UI has an
 * additional scale multiplier applied to it which you need to include in your
 * calculations, see wl_get_ui_scale.
 */
declare function wl_get_screen_width(): number;

/**
 * This function returns the current game's resolution height. When using this
 * function in combination with UI props, keep in mind that the UI has an
 * additional scale multiplier applied to it which you need to include in your
 * calculations, see wl_get_ui_scale.
 */
declare function wl_get_screen_height(): number;
