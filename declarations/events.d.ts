/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Adds an event to an event dispatcher on 'sandboxObject'. The 'dispatcherID' is the ID of the dispatcher you want to add the event to. Tip: if you click on the label of a dispatcher, it will automatically copy the dispatcher ID to the clipboard for you to paste it into your code.
 */
declare function wl_add_event_to_dispatcher(
  sandboxObject: WildLife.SandboxObject,
  dispatcherID: string,
  eventName: string,
  eventValue: string
): void;

/**
 * Adds an event to an event receiver on 'sandboxObject'. The 'receiverID' is the ID of the receiver you want to add the event to. Tip: if you click on the label of a receiver, it will automatically copy the receiver ID to the clipboard for you to paste it into your code.
 */
declare function wl_add_event_to_receiver(
  sandboxObject: WildLife.SandboxObject,
  receiverID: string,
  eventName: string,
  eventValue: string
): void;

/**
 * This function will clear all events in the specific event dispatcher on the
 * 'sandboxObject'. Returns true if successful, otherwise false.
 */
declare function wl_clear_events_in_dispatcher(
  sandboxObject: WildLife.SandboxObject,
  dispatcherID: string
): boolean;

/**
 * This function will clear all events in the specific event receiver on the
 * 'sandboxObject'. Returns true if successful, otherwise false.
 */
declare function wl_clear_events_in_receiver(
  sandboxObject: WildLife.SandboxObject,
  receiverID: string
): boolean;

/**
 * Dispatches an event just like any other prop can using the event system. As
 * the parameters suggest, 'eventName' would be the name of the event to be
 * fired, and 'eventValue' would be the value (or parameter) of the event.
 */
declare function wl_dispatch_event(
  eventName: string,
  eventValue: boolean | string | number
): void;

/**
 * Dispatches an event just like any other prop can using the event system, except it will only send it to 'sandboxObject'. As the parameters suggest, 'eventName' would be the name of the event to be fired, and 'eventValue' would be the value (or parameter) of the event.
 */
declare function wl_dispatch_event_to_object(
  eventName: string,
  eventValue: boolean | string | number,
  sandboxObject: WildLife.SandboxObject
): void;

/**
 * Will add a listener on a specific event 'eventName' and calls the given 'luaFunctionString' function with the parameter which the event dispatched with. Adding the same event to the same function multiple times will be ignored. Returns true if successful, otherwise false.
 */
declare function wl_event_system_add_listener(
  eventName: string,
  luaFunctionString: string
): boolean;

/**
 * Will remove a listener from a specific event 'eventName' which points to 'luaFunctionString'. If no listener exists, nothing will happen. Returns true if successful, otherwise false.
 */
declare function wl_event_system_remove_listener(
  eventName: string,
  luaFunctionString: string
): boolean;

/**
 * Directly executes the dispatcher with the given 'dispatcherID' without the need of an event name. 'eventValue' will be used as the parameter.
 */
declare function wl_execute_object_event_dispatcher(
  sandboxObject: WildLife.SandboxObject,
  dispatcherID: string,
  eventValue: boolean | string | number
): void;

/**
 * Directly executes the receiver with the given 'receiverID' without the need of an event name. 'eventValue' will be used as the parameter.
 */
declare function wl_execute_object_event_receiver(
  sandboxObject: WildLife.SandboxObject,
  receiverID: string,
  eventValue: boolean | string | number
): void;

/**
 * Returns the last argument/parameter that was used to execute this code as a bool (Execute event parameter or Test Code Button Parameter). This function will try to convert the parameter into a bool, if it fails, it will return false.
 */
declare function wl_get_call_argument_as_bool(): boolean;

/**
 * Returns the last argument/parameter that was used to execute this code as a color (Execute event parameter or Test Code Button Parameter). This function will try to convert the parameter into a color, if it fails, it will return black with full opacity.
 */
declare function wl_get_call_argument_as_color(): WildLife.Color;

/**
 * Returns the last argument/parameter that was used to execute this code as a float (Execute event parameter or Test Code Button Parameter). This function will try to convert the parameter into a float, if it fails, it will return 0.
 */
declare function wl_get_call_argument_as_float(): number;

/**
 * Returns the last argument/parameter that was used to execute this code as an integer (Execute event parameter or Test Code Button Parameter). This function will try to convert the parameter into an integer, if it fails, it will return 0.
 */
declare function wl_get_call_argument_as_integer(): number;

/**
 * Returns the last argument/parameter that was used to execute this code as a string (Execute event parameter or Test Code Button Parameter). Since event parameters are always passed around as strings, this is the most 'accurate' value.
 */
declare function wl_get_call_argument_as_string(): string;

/**
 * Returns the last argument/parameter that was used to execute this code as a vector (Execute event parameter or Test Code Button Parameter). This function will try to convert the parameter into a vector, if it fails, it will return a zero vector.
 */
declare function wl_get_call_argument_as_vector(): WildLife.Vector;

/**
 * This function will return the object that triggered the "Execute" event receiver on the Lua prop (the "caller"). If called by "execute every frame", the function will return the Lua prop itself. This function can also be used inside a delayed call (for example, wl_execute_delayed) an will return whatever the caller was when the delayed call was made.
 */
declare function wl_get_caller_object(): WildLife.SandboxObject;

/**
 * This function returns a table with all events that are currently in the specified dispatcher of the 'sandboxObject'. Each entry in the table will have an "event_name" and "event_value" field.
 */
declare function wl_get_events_in_dispatcher(
  sandboxObject: WildLife.SandboxObject,
  dispatcherID: string
): WildLife.Table;

/**
 * This function returns a table with all events that are currently in the specified receiver of the 'sandboxObject'. Each entry in the table will have an "event_name" and "event_value" field.
 */
declare function wl_get_events_in_receiver(
  sandboxObject: WildLife.SandboxObject,
  receiverID: string
): WildLife.Table;

/**
 * Returns whether the given 'sandboxObject' has it's event dispatchers enabled or not.
 */
declare function wl_get_object_dispatchers_enabled(
  sandboxObject: WildLife.SandboxObject
): boolean;

/**
 * This function will return a table of all dispatchers the specified 'sandboxObject' has. The resulting table will represent a string array with the IDs of all dispatchers.
 */
declare function wl_get_object_event_dispatchers(
  sandboxObject: WildLife.SandboxObject
): WildLife.Table;

/**
 * This function will return a table of all receivers the specified 'sandboxObject' has. The resulting table will represent a string array with the IDs of all receivers.
 */
declare function wl_get_object_event_receivers(
  sandboxObject: WildLife.SandboxObject
): WildLife.Table;

/**
 * Returns whether the given 'sandboxObject' has it's event receivers enabled or not.
 */
declare function wl_get_object_receivers_enabled(
  sandboxObject: WildLife.SandboxObject
): boolean;

/**
 * Removes an event from an event dispatcher on 'sandboxObject'. The 'dispatcherID' is the ID of the dispatcher you want to remove the event from. Tip: if you click on the label of a dispatcher, it will automatically copy the dispatcher ID to the clipboard for you to paste it into your code.
 */
declare function wl_remove_event_from_dispatcher(
  sandboxObject: WildLife.SandboxObject,
  dispatcherID: string,
  eventName: string
): void;

/**
 * Removes an event from an event receiver on 'sandboxObject'. The 'receiverID' is the ID of the receiver you want to remove the event from. Tip: if you click on the label of a receiver, it will automatically copy the receiver ID to the clipboard for you to paste it into your code.
 */
declare function wl_remove_event_from_receiver(
  sandboxObject: WildLife.SandboxObject,
  receiverID: string,
  eventName: string
): void;

/**
 * This function can be used to enable or disable the event dispatchers of the
 * given 'sandboxObject'.
 */
declare function wl_set_object_dispatchers_enabled(
  sandboxObject: WildLife.SandboxObject,
  newEnabled: boolean
): void;

/**
 * This function can be used to enable or disable the event receivers of the
 * given 'sandboxObject'.
 */
declare function wl_set_object_receivers_enabled(
  sandboxObject: WildLife.SandboxObject,
  newEnabled: boolean
): void;
