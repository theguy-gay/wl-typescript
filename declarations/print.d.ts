/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Prints a color to the log. This is a helper function to aid debugging or
 * visualizing your colors.
 */
declare function wl_print_color(color: WildLife.Color): void;

/**
 * Prints the entire 'table' to the log using json syntax. This is a helper
 * function to aid debugging or visualizing your custom lua tables.
 */
declare function wl_print_table(table: WildLife.Table): void;

/**
 * Prints a vector to the log. This is a helper function to aid debugging or
 * visualizing your vectors.
 */
declare function wl_print_vector(vector: WildLife.Vector): void;
