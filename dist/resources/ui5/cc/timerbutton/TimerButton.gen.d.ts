declare module "ui5/cc/timerbutton/TimerButton" {
import EventType from "ui5/cc/timerbutton/EventType";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ButtonSettings } from "sap/m/Button";

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
         * Gets current value of property "timeout".
         *
         * time in milliseconds that the control stays in disabled/invisible state after the enabled/visible property
        has been set to true
         *
         * Default value is: 5000
         * @returns Value of property "timeout"
         */
        getTimeout(): number;

        /**
         * Sets a new value for property "timeout".
         *
         * time in milliseconds that the control stays in disabled/invisible state after the enabled/visible property
        has been set to true
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
         * text that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original text of the button is displayed.
         *
         * @returns Value of property "timeoutButtonText"
         */
        getTimeoutButtonText(): string;

        /**
         * Sets a new value for property "timeoutButtonText".
         *
         * text that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original text of the button is displayed.
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
         * Icon that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original icon of the button is displayed.
         *
         * Default value is: "sap-icon://pending"
         * @returns Value of property "timeoutIcon"
         */
        getTimeoutIcon(): string;

        /**
         * Sets a new value for property "timeoutIcon".
         *
         * Icon that is displayed at the button in the time the enabled property has been set to true until timeout
        is reached and the button is enabled again. After that time the original icon of the button is displayed.
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
         * Event that the functionality is working with. Currently enabled and visible events are supported.
         *
         * Default value is: "TimeoutEventType.enabled"
         * @returns Value of property "timeoutEventType"
         */
        getTimeoutEventType(): EventType;

        /**
         * Sets a new value for property "timeoutEventType".
         *
         * Event that the functionality is working with. Currently enabled and visible events are supported.
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: "TimeoutEventType.enabled"
         * @param [timeoutEventType="TimeoutEventType.enabled"] New value for property "timeoutEventType"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTimeoutEventType(timeoutEventType: EventType): this;
    }
}
