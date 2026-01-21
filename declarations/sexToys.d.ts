/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * This function will return the info and capabilities of the sex toy with the
 * specified 'deviceIndex'
 */
declare function wl_sex_toys_get_toy_by_index(
  deviceIndex: number,
): WildLife.SexToy;

/**
 * This function will return a list of all connected sex toys with their info
 * and capabilities.
 */
declare function wl_sex_toys_get_toys_list(): WildLife.SexToy[];

/**
 * This function will send the specified 'intensity' value to all connected sex
 * toys. It will work for all motors on the sex toy, be it vibrate, rotate or
 * thrust. It is recommended to not call this function more than 10 times per
 * second to give the devices time to process the command. Too many requests
 * will cause most devices to fail to catch up.
 */
declare function wl_sex_toys_send_global_intensity(intensity: number): boolean;

/**
 * This function will send the specified 'intensity' value to the sex toy with
 * the given 'deviceIndex'. The deviceIndex is the number you can see on the
 * left side of a sex toy in the sex toy settings, or in Intiface. This function
 * will work for all motors on the sex toy, be it vibrate, rotate or thrust. It
 * is recommended to not call this function more than 10 times per second to
 * give the device time to process the command. Too many requests will cause
 * most devices to fail to catch up.
 */
declare function wl_sex_toys_send_intensity(
  deviceIndex: number,
  intensity: number,
): boolean;

/**
 * This function sends a linear command to a sex toy with the specified
 * 'deviceIndex'. Linear commands usually refer to thrust position, but some sex
 * toys implement scalar values differently. The 'position' value ranges from 0
 * to 1, anything outside this range is invalid. Note that this does not change
 * the oscillation, but rather sets the toy's position directly, 0 meaning fully
 * retracted, 1 meaning fully extended. If you want to control the oscillation,
 * either send 0 and 1 in an interval or use wl_sex_toys_send_intensity instead.
 * The optional 'scalarIndex' parameter can be used if the sex toy has multiple
 * linear commands and you only want to target one. Skipping this parameter or
 * setting it to a value below 0 will send the intensity to all linear commands
 * on the toy.
 */
declare function wl_sex_toys_send_linear_command(
  deviceIndex: number,
  position: number,
  linearIndex?: number,
): boolean;

/**
 * This function sends a rotate command to a sex toy with the specified
 * 'deviceIndex'. The 'intensity' value ranges from 0 to 1, anything outside
 * this range is invalid. The optional 'rotateIndex' parameter can be used if
 * the sex toy has multiple rotate commands and you only want to target one.
 * Skipping this parameter or setting it to a value below 0 will send the
 * intensity to all rotate commands on the toy.
 */
declare function wl_sex_toys_send_rotate_command(
  deviceIndex: number,
  intensity: number,
  rotateIndex?: number,
): boolean;

/**
 * This function sends a scalar command to a sex toy with the specified
 * 'deviceIndex'. Scalar commands usually refer to vibration intensity, but some
 * sex toys implement scalar values differently. The 'intensity' value ranges
 * from 0 to 1, anything outside this range is invalid. The optional
 * 'scalarIndex' parameter can be used if the sex toy has multiple scalar
 * commands and you only want to target one. Skipping this parameter or setting
 * it to a value below 0 will send the intensity to all scalar commands on the
 * toy.
 */
declare function wl_sex_toys_send_scalar_command(
  deviceIndex: number,
  intensity: number,
  scalarIndex?: number,
): boolean;

/**
 * This function will stop all commands on all sex toys.
 */
declare function wl_sex_toys_stop_all_devices(): boolean;

/**
 * This function will stop all commands on the sex toy with the given
 * 'deviceIndex'. The deviceIndex is the number you can see on the left side of
 * a sex toy in the sex toy settings, or in Intiface.
 */
declare function wl_sex_toys_stop_device(deviceIndex: number): boolean;
