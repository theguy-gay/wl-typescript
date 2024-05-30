/** @noSelfInFile */

/// <reference path="types.d.ts" />

/**
 * Adds an event to an event dispatcher on 'sandboxObject'. The 'dispatcherID'
 * is the ID of the dispatcher you want to add the event to. Tip: if you click
 * on the label of a dispatcher, it will automatically copy the dispatcher ID to
 * the clipboard for you to paste it into your code.
 */
declare function wl_add_event_to_dispatcher(
  sandboxObject: WildLife.SandboxObject,
  dispatcherID: string,
  eventName: string,
  eventValue: string,
): void;

/**
 * Adds an event to an event receiver on 'sandboxObject'. The 'receiverID' is
 * the ID of the receiver you want to add the event to. Tip: if you click on the
 * label of a receiver, it will automatically copy the receiver ID to the
 * clipboard for you to paste it into your code.
 */
declare function wl_add_event_to_receiver(
  sandboxObject: WildLife.SandboxObject,
  receiverID: string,
  eventName: string,
  eventValue: string,
): void;

/**
 * Dispatches an event just like any other prop can using the event system. As
 * the parameters suggest, 'eventName' would be the name of the event to be
 * fired, and 'eventValue' would be the value (or parameter) of the event.
 */
declare function wl_dispatch_event(eventName: string, eventValue: string): void;

/**
 * Dispatches an event just like any other prop can using the event system,
 * except it will only send it to 'sandboxObject'. As the parameters suggest,
 * 'eventName' would be the name of the event to be fired, and 'eventValue'
 * would be the value (or parameter) of the event.
 */
declare function wl_dispatch_event_to_object(
  eventName: string,
  eventValue: string,
  sandboxObject: WildLife.SandboxObject,
): void;

/**
 * Returns whether the given 'sandboxObject' has it's event dispatchers enabled
 * or not.
 */
declare function wl_get_object_dispatchers_enabled(
  sandboxObject: WildLife.SandboxObject,
): boolean;

/**
 * Returns whether the given 'sandboxObject' has it's event receivers enabled or
 * not.
 */
declare function wl_get_object_receivers_enabled(
  sandboxObject: WildLife.SandboxObject,
): boolean;

/**
 * Removes an event from an event dispatcher on 'sandboxObject'. The
 * 'dispatcherID' is the ID of the dispatcher you want to remove the event from.
 * Tip: if you click on the label of a dispatcher, it will automatically copy
 * the dispatcher ID to the clipboard for you to paste it into your code.
 */
declare function wl_remove_event_from_dispatcher(
  sandboxObject: WildLife.SandboxObject,
  dispatcherID: string,
  eventName: string,
): void;

/**
 * Removes an event from an event receiver on 'sandboxObject'. The 'receiverID'
 * is the ID of the receiver you want to remove the event from. Tip: if you
 * click on the label of a receiver, it will automatically copy the receiver ID
 * to the clipboard for you to paste it into your code.
 */
declare function wl_remove_event_from_receiver(
  sandboxObject: WildLife.SandboxObject,
  receiverID: string,
  eventName: string,
): void;

/**
 * This function can be used to enable or disable the event dispatchers of the
 * given 'sandboxObject'.
 */
declare function wl_set_object_dispatchers_enabled(
  sandboxObject: WildLife.SandboxObject,
  newEnabled: boolean,
): void;

/**
 * This function can be used to enable or disable the event receivers of the
 * given 'sandboxObject'.
 */
declare function wl_set_object_receivers_enabled(
  sandboxObject: WildLife.SandboxObject,
  newEnabled: boolean,
): void;
