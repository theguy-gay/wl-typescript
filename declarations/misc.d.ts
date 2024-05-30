/** @noSelfInFile */

/// <reference path="types.d.ts" />

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
 * This functions return the time since the last frame, in seconds. This is
 * useful if you want to build functionality that is not dependent on the
 * framerate, like moving an object forwards by a constant value.
 */
declare function wl_get_delta_time(): number;

/**
 * This function allows you to load another sandbox scene. The scene needs to
 * be compatible with the current level, for example, a Showroom map could not
 * be loaded while in the Wild Life map. Only the scene name needs to be
 * specified (without the .json extension). You can specify whether the loaded
 * scene should be loaded by itself or additively using the second function
 * parameter. Returns true or false, depending on the success of the load.
 *
 * This function is experimental and could lead to a multitude of unexpected
 * edge cases. Before running this function, make sure all necessary scenes
 * and code are saved to prevent any data loss. It is also recommended to not
 * load multiple scenes at the same time, both additively and not. Any code
 * that follows this function could lead to unexpected behaviour and should be
 * avoided.
 */
declare function wl_load_scene(
  sceneName: string,
  loadAdditively: boolean,
): number;

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
