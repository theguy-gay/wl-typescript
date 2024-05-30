/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Unlike wl_make_color_string, this function does not create a single string
 * containing all values. Instead, it returns a table with r, g, b and a set to
 * the given parameter values.
 */
declare function wl_make_color(
  r: number,
  g: number,
  b: number,
  a: number,
): WildLife.Color;

/**
 * When using the event system, some receivers require option color strings as
 * parameters (for example, setting the color of a prototype shape). This is
 * just a helper function to create only the color part of an event parameter.
 * If you want the full option color string, see wl_make_option_color_string().
 */
declare function wl_make_color_string(
  r: number,
  g: number,
  b: number,
  a: number,
): WildLife.ColorString;

/**
 * When using the event system, some receivers require option color strings as
 * parameters (for example, setting the color of a prototype shape). This is
 * just a helper function to create only the color part of an event parameter.
 * If you want the full option color string, see wl_make_option_color_string().
 */
declare function wl_make_color_string(
  color: WildLife.Color,
): WildLife.ColorString;

/**
 * When using the event system, some receivers require option color strings as
 * parameters (for example, setting the color on a prototype shape). This is
 * just a helper function to create these option color strings.
 */
declare function wl_make_option_color_string(
  optionName: string,
  r: number,
  g: number,
  b: number,
  a: number,
): WildLife.OptionColorString;

/**
 * When using the event system, some receivers require option color strings as
 * parameters (for example, setting the color on a prototype shape). This is
 * just a helper function to create these option color strings.
 */

declare function wl_make_option_color_string(
  optionName: string,
  color: WildLife.Color,
): WildLife.OptionColorString;

/**
 * When using the event system, some receivers require option vector strings as
 * parameters (for example, setting the start value on a Transformer prop). This
 * is just a helper function to create these option vector strings.
 */
declare function wl_make_option_vector_string(
  optionName: string,
  x: number,
  y: number,
  z: number,
): WildLife.OptionVectorString;

/**
 * When using the event system, some receivers require option vector strings as
 * parameters (for example, setting the start value on a Transformer prop). This
 * is just a helper function to create these option vector strings.
 */

declare function wl_make_option_vector_string(
  optionName: string,
  vector: WildLife.Vector,
): WildLife.OptionVectorString;

/**
 * Unlike wl_make_vector_string, this function does not create a single string
 * containing all values. Instead, it returns a table with x, y and z set to the
 * given parameter values.
 */
declare function wl_make_vector(
  x: number,
  y: number,
  z: number,
): WildLife.Vector;

/**
 * When using the event system, some receivers require option vector strings as
 * parameters (for example, setting the start value on a Transformer prop). This
 * is just a helper function to create only the vector part of an event
 * parameter. If you want the full option vector string, see
 * wl_make_option_vector_string().
 */
declare function wl_make_vector_string(
  x: number,
  y: number,
  z: number,
): WildLife.VectorString;

/**
 * When using the event system, some receivers require option vector strings as
 * parameters (for example, setting the start value on a Transformer prop). This
 * is just a helper function to create only the vector part of an event
 * parameter. If you want the full option vector string, see
 * wl_make_option_vector_string().
 */

declare function wl_make_vector_string(
  vector: WildLife.Vector,
): WildLife.VectorString;
