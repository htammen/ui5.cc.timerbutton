import EventType from "ui5/cc/timerbutton/EventType";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ButtonSettings } from "sap/m/Button";

declare module "./TimerButton" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $TimerButtonSettings extends $ButtonSettings {

        /**
         * time in milliseconds that the control stays in disabled/invisible state after the enabled/visible property
        has been set to true
         */
        timeout?: number | PropertyBindingInfo | `{${string}}`;

        /**
         * text that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original text of the button is displayed.
         */
        timeoutButtonText?: string | PropertyBindingInfo;

        /**
         * Icon that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original icon of the button is displayed.
         */
        timeoutIcon?: string | PropertyBindingInfo;

        /**
         * Event that the functionality is working with. Currently enabled and visible events are supported.
         */
        timeoutEventType?: EventType | PropertyBindingInfo | `{${string}}`;
    }

    export default interface TimerButton {

        // property: timeout

        /**
         * time in milliseconds that the control stays in disabled/invisible state after the enabled/visible property
        has been set to true
         */
        getTimeout(): number;

        /**
         * time in milliseconds that the control stays in disabled/invisible state after the enabled/visible property
        has been set to true
         */
        setTimeout(timeout: number): this;

        // property: timeoutButtonText

        /**
         * text that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original text of the button is displayed.
         */
        getTimeoutButtonText(): string;

        /**
         * text that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original text of the button is displayed.
         */
        setTimeoutButtonText(timeoutButtonText: string): this;

        // property: timeoutIcon

        /**
         * Icon that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original icon of the button is displayed.
         */
        getTimeoutIcon(): string;

        /**
         * Icon that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original icon of the button is displayed.
         */
        setTimeoutIcon(timeoutIcon: string): this;

        // property: timeoutEventType

        /**
         * Event that the functionality is working with. Currently enabled and visible events are supported.
         */
        getTimeoutEventType(): EventType;

        /**
         * Event that the functionality is working with. Currently enabled and visible events are supported.
         */
        setTimeoutEventType(timeoutEventType: EventType): this;
    }
}
