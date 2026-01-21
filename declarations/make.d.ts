/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Unlike wl_make_color_string, this function does not create a single string containing all values. Instead, it returns a table with r, g, b and a set to the given parameter values.
 */
declare function wl_make_color(
  r: number,
  g: number,
  b: number,
  a: number,
): WildLife.Color;

/**
 * When using the event system, some receivers require option color strings as parameters (for example, setting the color of a prototype shape). This is just a helper function to create only the color part of an event parameter. If you want the full option color string, see wl_make_option_color_string().
 */
declare function wl_make_color_string(
  r: number,
  g: number,
  b: number,
  a: number,
): WildLife.ColorString;

/**
 * When using the event system, some receivers require option color strings as parameters (for example, setting the color of a prototype shape). This is just a helper function to create only the color part of an event parameter. If you want the full option color string, see wl_make_option_color_string().
 */
declare function wl_make_color_string(
  color: WildLife.Color,
): WildLife.ColorString;

/**
 * This is a helper function to create a table array with names. You can add as many parameters as needed. Functionally it is the same as creating a Lua table yourself, for example: array = wl_make_name_array("Maya", "Max") and array = {"Maya", "Max"} are the same, just in function form.
 */
declare function wl_make_name_array(...names: string[]): string[];

/**
 * When using the event system, some receivers require option color strings as parameters (for example, setting the color on a prototype shape). This is just a helper function to create these option color strings.
 */
declare function wl_make_option_color_string(
  optionName: string,
  r: number,
  g: number,
  b: number,
  a: number,
): WildLife.OptionColorString;

/**
 * When using the event system, some receivers require option color strings as parameters (for example, setting the color on a prototype shape). This is just a helper function to create these option color strings.
 */
declare function wl_make_option_color_string(
  optionName: string,
  color: WildLife.Color,
): WildLife.OptionColorString;

/**
 * When using the event system, some receivers require option vector strings as parameters (for example, setting the start value on a Transformer prop). This is just a helper function to create these option vector strings.
 */
declare function wl_make_option_vector_string(
  optionName: string,
  x: number,
  y: number,
  z: number,
): WildLife.OptionVectorString;

/**
 * When using the event system, some receivers require option vector strings as parameters (for example, setting the start value on a Transformer prop). This is just a helper function to create these option vector strings.
 */
declare function wl_make_option_vector_string(
  optionName: string,
  vector: WildLife.Vector,
): WildLife.OptionVectorString;

/**
 * This function creates a rotation from the given vector. If applied to a sandbox object, the object's forward vector (aka X, aka red arrow in local space) will be pointing in the direction of the given vector.
 */
declare function wl_make_rotation_from_x(
  vectorX: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vectors. The resulting rotation will have it's forward vector (aka X, aka red arror in local space) point in the direction of vectorX and try to point it's right vector (aka Y, aka green arrow in local space) towards vectorY, which will not always be possible if the two vectors are not orthogonal to each other.
 */
declare function wl_make_rotation_from_xy(
  vectorX: WildLife.Vector,
  vectorY: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vectors. The resulting rotation will have it's forward vector (aka X, aka red arror in local space) point in the direction of vectorX and try to point it's up vector (aka Z, aka blue arrow in local space) towards vectorZ, which will not always be possible if the two vectors are not orthogonal to each other.
 */
declare function wl_make_rotation_from_xz(
  vectorX: WildLife.Vector,
  vectorZ: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vector. If applied to a sandbox object, the object's right vector (aka Y, aka green arrow in local space) will be pointing in the direction of the given vector.
 */
declare function wl_make_rotation_from_y(
  vectorY: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vectors. The resulting rotation will have it's right vector (aka Y, aka green arror in local space) point in the direction of vectorY and try to point it's forward vector (aka X, aka red arrow in local space) towards vectorX, which will not always be possible if the two vectors are not orthogonal to each other.
 */
declare function wl_make_rotation_from_yx(
  vectorY: WildLife.Vector,
  vectorX: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vectors. The resulting rotation will have it's right vector (aka Y, aka green arror in local space) point in the direction of vectorY and try to point it's up vector (aka Z, aka blue arrow in local space) towards vectorZ, which will not always be possible if the two vectors are not orthogonal to each other.
 */
declare function wl_make_rotation_from_yz(
  vectorY: WildLife.Vector,
  vectorZ: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vector. If applied to a sandbox object, the object's up vector (aka Z, aka blue arrow in local space) will be pointing in the direction of the given vector.
 */
declare function wl_make_rotation_from_z(
  vectorZ: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vectors. The resulting rotation will have it's up vector (aka Z, aka blue arror in local space) point in the direction of vectorZ and try to point it's forward vector (aka X, aka red arrow in local space) towards vectorX, which will not always be possible if the two vectors are not orthogonal to each other.
 */
declare function wl_make_rotation_from_zx(
  vectorZ: WildLife.Vector,
  vectorX: WildLife.Vector,
): WildLife.Vector;

/**
 * This function creates a rotation from the given vectors. The resulting rotation will have it's up vector (aka Z, aka blue arror in local space) point in the direction of vectorZ and try to point it's right vector (aka Y, aka green arrow in local space) towards vectorY, which will not always be possible if the two vectors are not orthogonal to each other.
 */
declare function wl_make_rotation_from_zy(
  vectorZ: WildLife.Vector,
  vectorY: WildLife.Vector,
): WildLife.Vector;

/**
 * Unlike wl_make_vector_string, this function does not create a single string containing all values. Instead, it returns a table with x, y and z set to the given parameter values.
 */
declare function wl_make_vector(
  x: number,
  y: number,
  z: number,
): WildLife.Vector;

/**
 * When using the event system, some receivers require option vector strings as parameters (for example, setting the start value on a Transformer prop). This is just a helper function to create only the vector part of an event parameter. If you want the full option vector string, see wl_make_option_vector_string().
 */
declare function wl_make_vector_string(
  x: number,
  y: number,
  z: number,
): WildLife.VectorString;

/**
 * When using the event system, some receivers require option vector strings as parameters (for example, setting the start value on a Transformer prop). This is just a helper function to create only the vector part of an event parameter. If you want the full option vector string, see wl_make_option_vector_string().
 */
declare function wl_make_vector_string(
  vector: WildLife.Vector,
): WildLife.VectorString;
