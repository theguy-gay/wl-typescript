/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Returns the bool value of the 'optionID' option of the given 'sandboxObject'.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_get_object_bool_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string
): boolean;

/**
 * Returns the color value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_color_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string
): WildLife.Color;

/**
 * Returns the float value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_float_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string
): number;

/**
 * Returns the integer value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_integer_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string
): number;

/**
 * Returns the string value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_string_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string
): string;

/**
 * Returns the vector value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_get_object_vector_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string
): WildLife.Vector;

/**
 * Sets the bool value of the 'optionID' option of the given 'sandboxObject'.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_bool_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: boolean
): void;

/**
 * Sets the color value of the 'optionID' option of the given 'sandboxObject'.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_color_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: WildLife.Color
): void;

/**
 * Sets the float value of the 'optionID' option of the given 'sandboxObject'.
 * Tip: if you click on the label of an option, it will automatically copy the
 * option ID to the clipboard for you to paste it into your code.
 */
declare function wl_set_object_float_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: number
): void;

/**
 * Sets the integer value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_set_object_integer_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: number
): void;

/**
 * Sets the string value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_set_object_string_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: string
): void;

/**
 * Sets the vector value of the 'optionID' option of the given
 * 'sandboxObject'. Tip: if you click on the label of an option, it will
 * automatically copy the option ID to the clipboard for you to paste it into
 * your code.
 */
declare function wl_set_object_vector_option(
  sandboxObject: WildLife.SandboxObject,
  optionName: string,
  optionValue: WildLife.Vector
): void;
