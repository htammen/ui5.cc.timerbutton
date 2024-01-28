import EventProvider from "sap/ui/base/EventProvider";
import Event from "sap/ui/base/Event";
import EventType from "ui5/cc/timerbutton/EventType";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ButtonSettings } from "sap/m/Button";

declare module "./TimerButton" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $TimerButtonSettings extends $ButtonSettings {
        timeout?: number | PropertyBindingInfo | `{${string}}`;
        timeoutButtonText?: string | PropertyBindingInfo;
        timeoutIcon?: string | PropertyBindingInfo;
        timeoutEventType?: EventType | PropertyBindingInfo | `{${string}}`;

        /**
         * Event is fired when the user clicks the control.
         */
        press?: (event: TimerButton$PressEvent) => void;
    }

    export default interface TimerButton {

        // property: timeout

        /**
         * Gets current value of property "timeout".
         *
         * Default value is: 5000
         * @returns Value of property "timeout"
         */
        getTimeout(): number;

        /**
         * Sets a new value for property "timeout".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: 5000
         * @param [timeout=5000] New value for property "timeout"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTimeout(timeout: number): this;

        // property: timeoutButtonText

        /**
         * Gets current value of property "timeoutButtonText".
         *
         * @returns Value of property "timeoutButtonText"
         */
        getTimeoutButtonText(): string;

        /**
         * Sets a new value for property "timeoutButtonText".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param timeoutButtonText New value for property "timeoutButtonText"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTimeoutButtonText(timeoutButtonText: string): this;

        // property: timeoutIcon

        /**
         * Gets current value of property "timeoutIcon".
         *
         * Default value is: "sap-icon://pending"
         * @returns Value of property "timeoutIcon"
         */
        getTimeoutIcon(): string;

        /**
         * Sets a new value for property "timeoutIcon".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: "sap-icon://pending"
         * @param [timeoutIcon="sap-icon://pending"] New value for property "timeoutIcon"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTimeoutIcon(timeoutIcon: string): this;

        // property: timeoutEventType

        /**
         * Gets current value of property "timeoutEventType".
         *
         * Default value is: "TimeoutEventType.enabled"
         * @returns Value of property "timeoutEventType"
         */
        getTimeoutEventType(): EventType;

        /**
         * Sets a new value for property "timeoutEventType".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: "TimeoutEventType.enabled"
         * @param [timeoutEventType="TimeoutEventType.enabled"] New value for property "timeoutEventType"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTimeoutEventType(timeoutEventType: EventType): this;

        // event: press

        /**
         * Attaches event handler "fn" to the "press" event of this "TimerButton".
         *
         * Event is fired when the user clicks the control.
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "TimerButton" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "TimerButton" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPress(fn: (event: TimerButton$PressEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "press" event of this "TimerButton".
         *
         * Event is fired when the user clicks the control.
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "TimerButton" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "TimerButton" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPress<CustomDataType extends object>(data: CustomDataType, fn: (event: TimerButton$PressEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "press" event of this "TimerButton".
         *
         * Event is fired when the user clicks the control.
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachPress(fn: (event: TimerButton$PressEvent) => void, listener?: object): this;

        /**
         * Fires event "press" to attached listeners.
         *
         * Event is fired when the user clicks the control.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        firePress(parameters?: TimerButton$PressEventParameters): this;
    }

    /**
     * Interface describing the parameters of TimerButton's 'press' event.
     * Event is fired when the user clicks the control.
     */
    // eslint-disable-next-line
    export interface TimerButton$PressEventParameters {
    }

    /**
     * Type describing the TimerButton's 'press' event.
     * Event is fired when the user clicks the control.
     */
    export type TimerButton$PressEvent = Event<TimerButton$PressEventParameters>;
}
// This module enhances sap.ui.base.Event with Generics, which is needed in UI5 type definition versions below 1.115
declare module "sap/ui/base/Event" {
    export default interface Event<ParamsType extends Record<string, any> = object> {
        constructor(id: string, oSource: EventProvider, parameters: ParamsType);
        getParameters(): ParamsType;
        getParameter<ParamName extends keyof ParamsType>(name: ParamName): ParamsType[ParamName];
    }
}
