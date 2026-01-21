/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Returns the bool value of the 'optionID' option of the given 'sandboxObject'.
 * This works for props, characters, sex scenes and poses. The 'index' parameter
 * is only necessary when dealing with sex scenes to select the animation index.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_get_object_bool_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  index?: number
): boolean;

/**
 * Returns the color value of the 'optionID' option of the given
 * 'sandboxObject'. This works for props, characters, sex scenes and poses. The
 * 'index' parameter is only necessary when dealing with sex scenes to select
 * the animation index. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_color_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  index?: number
): WildLife.Color;

/**
 * Returns the float value of the 'optionID' option of the given
 * 'sandboxObject'. This works for props, characters, sex scenes and poses. The
 * 'index' parameter is only necessary when dealing with sex scenes to select
 * the animation index. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_float_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  index?: number
): number;

/**
 * Returns the integer value of the 'optionID' option of the given
 * 'sandboxObject'. This works for props, characters, sex scenes and poses. The
 * 'index' parameter is only necessary when dealing with sex scenes to select
 * the animation index. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_integer_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  index?: number
): number;

/**
 * Returns the string value of the 'optionID' option of the given
 * 'sandboxObject'. This works for props, characters, sex scenes and poses. The
 * 'index' parameter is only necessary when dealing with sex scenes to select
 * the animation index. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_string_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  index?: number
): string;

/**
 * Returns the vector value of the 'optionID' option of the given
 * 'sandboxObject'. This works for props, characters, sex scenes and poses. The
 * 'index' parameter is only necessary when dealing with sex scenes to select
 * the animation index. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_vector_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  index?: number
): WildLife.Vector;

/**
 * Sets the bool value of the 'optionID' option of the given 'sandboxObject'.
 * This works for props, characters, sex scenes and poses. The 'index' parameter
 * is only necessary when dealing with sex scenes to select the animation index.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_bool_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: boolean,
  index?: number
): void;

/**
 * Sets the color value of the 'optionID' option of the given 'sandboxObject'.
 * This works for props, characters, sex scenes and poses. The 'index' parameter
 * is only necessary when dealing with sex scenes to select the animation index.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_color_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: WildLife.Color,
  index?: number
): void;

/**
 * Sets the float value of the 'optionID' option of the given 'sandboxObject'.
 * This works for props, characters, sex scenes and poses. The 'index' parameter
 * is only necessary when dealing with sex scenes to select the animation index.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_float_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: number,
  index?: number
): void;

/**
 * Sets the integer value of the 'optionID' option of the given 'sandboxObject'.
 * This works for props, characters, sex scenes and poses. The 'index' parameter
 * is only necessary when dealing with sex scenes to select the animation index.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_integer_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: number,
  index?: number
): void;

/**
 * Sets the string value of the 'optionID' option of the given 'sandboxObject'.
 * This works for props, characters, sex scenes and poses. The 'index' parameter
 * is only necessary when dealing with sex scenes to select the animation index.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_string_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: string,
  index?: number
): void;

/**
 * Sets the vector value of the 'optionID' option of the given 'sandboxObject'.
 * This works for props, characters, sex scenes and poses. The 'index' parameter
 * is only necessary when dealing with sex scenes to select the animation index.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_vector_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: WildLife.Vector,
  index?: number
): void;

/**
 * Returns a table of all options which the specified 'sandboxObject' contains,
 * including their current value. This is a read-only operation, changing the
 * values in the table will not change the options on the object.
 */
declare function wl_get_object_options(
  sandboxObject: WildLife.SandboxObject
): WildLife.Table;

/**
 * This function can bulk-apply 'options' to the given 'sandboxObject'. The
 * table should be formatted as described in wl_get_object_options.
 */
declare function wl_set_object_options(
  sandboxObject: WildLife.SandboxObject,
  options: WildLife.Table
): boolean;
