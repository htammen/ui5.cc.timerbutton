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
        getTimeout(): number;
        setTimeout(timeout: number): this;

        // property: timeoutButtonText
        getTimeoutButtonText(): string;
        setTimeoutButtonText(timeoutButtonText: string): this;

        // property: timeoutIcon
        getTimeoutIcon(): string;
        setTimeoutIcon(timeoutIcon: string): this;

        // property: timeoutEventType
        getTimeoutEventType(): EventType;
        setTimeoutEventType(timeoutEventType: EventType): this;

        // event: press

        /**
         * Event is fired when the user clicks the control.
         */
        attachPress(fn: (event: TimerButton$PressEvent) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        attachPress<CustomDataType extends object>(data: CustomDataType, fn: (event: TimerButton$PressEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        detachPress(fn: (event: TimerButton$PressEvent) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
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
