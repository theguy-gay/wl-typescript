/** @noSelfInFile */

/// <reference path="types.d.ts" />

// TODO Constrain the fileName type to be alphanumeric.

/**
 * This function can be used to save custom data onto the hard drive for later
 * use. The save location will always be in the
 * "%localappdata%/WildLifeC/Saved/SandboxSaveGames/CustomSaves/" folder. Of
 * course, having the power to save any amount of data needs to be restricted
 * for security purposes, so saving data has the following limitations:
 *
 * The file name may only contain characters a-z, A-Z and 0-9 The saved data may
 * not exceed 1MB You are only allowed 10 separate file names before the sandbox
 * will block any new files being created. You can reset the block by resetting
 * the lua state (Trash icon in the lua editor, this will also clean all
 * globally defined functions and variables).
 *
 * You can save both single values as well as tables using this function. If you
 * require a lot of values to be saved, it is recommended to create a save
 * structure lua table containing all the values you want to save. Tables are
 * saved as json strings. Also, make sure to use unique file names so that they
 * don't clash with other creators' scenes, since all custom save files share
 * the same folder.
 */
declare function wl_data_save(data: WildLife.Data, fileName: string): boolean;

/**
 * This function allows you to load save data from the
 * "%localappdata%/WildLifeC/Saved/SandboxSaveGames/CustomSaves/" folder. If the
 * file failed to load, the function will return 'nil' instead. Loading files
 * has the following limitations:
 *
 * The file name may only contain characters a-z, A-Z and 0-9
 */
declare function wl_data_load(fileName: string): WildLife.Data;

/**
 * This function allows you to check whether a save file exists before trying to
 * load, save or delete it. Checking files has the following limitations:
 *
 * The file name may only contain characters a-z, A-Z and 0-9
 */
declare function wl_data_exists(fileName: string): boolean;

/**
 * This functions allows you to delete a save file in the
 * "%localappdata%/WildLifeC/Saved/SandboxSaveGames/CustomSaves/" folder. It
 * will return either 'true' or 'false', depending on the success or failure of
 * the deletion. Deleting files has the following limitations:
 *
 * The file name may only contain characters a-z, A-Z and 0-9
 */
declare function wl_data_exists(fileName: string): boolean;
