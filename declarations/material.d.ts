/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This function will add a new usable material to the sandbox. The 'materialName' parameter defines the string used in material options on props. Adding slashes into the name will put the material into one or more subfolders, for example, "House/Table/Glass" will put the "Glass" material into the "Table" folder, which itself is inside the "House" folder. The 'material' parameter represents the material data you want to add. The material data can be created using the wl_material_create function.
 */
declare function wl_material_add(
  materialName: string,
  material: WildLife.Material,
): boolean;

/**
 * This function creates table data for a material. All material data fields will be initialized to the same values that a default material would have, and then you can modify them from there.
 */
declare function wl_material_create(): WildLife.Material;

/**
 * This function will return a material data table for the material with the given 'materialName'. Returns nil if no material with a matching name exists. Note that changing the data in this table will not automatically update the material in-game, you will have to use wl_material_add again to update it.
 */
declare function wl_material_get(materialName: string): WildLife.Material;

/**
 * This function removes all custom materials that are not used by any prop. Returns a table of all the material IDs it deleted.
 */
declare function wl_material_remove_unused(): string[];
