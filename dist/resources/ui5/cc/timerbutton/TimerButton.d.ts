declare module "ui5/cc/timerbutton/TimerButton" {
    /*!
     * ${copyright}
     */
    import Button from "sap/m/Button";
    /**
     * Constructor for a new <code>ui5.cc.timerbutton.TimerButton</code> control.
     *
     * This control works as folows.
     * - You set the enabled or visible property of your Button to false
     * - The control gets disabled or invisible, see property timeoutEventType
     * - if timeoutEventType === enabled
     * -- The control shows the "timeoutIcon" (property) instead of the original icon
     * -- after you set the enabled property of the button to true shows the "timeoutButtonText" (property), if defined
     * - after "timeout" (property) milliseconds the button gets enabled / visible and the original text and icon are shown at the button.
     * @extends Button
     *
     * @author Helmut Tammen
     * @version ${version}
     *
     * @constructor
     * @public
     * @name ui5.cc.timerbutton.TimerButton
     */
    export default class TimerButton extends Button {
        private counter;
        private timeoutHandle;
        private oldText;
        private oldIcon;
        constructor(id?: string | $TimerButtonSettings);
        constructor(id?: string, settings?: $TimerButtonSettings);
        static readonly metadata: object;
        static renderer: any;
        private _timeoutHandler;
        setText(sText: string): any;
        setEnabled(bEnabled?: boolean): this;
        setVisible(bVisible?: boolean): this;
    }
}
//# sourceMappingURL=TimerButton.d.ts.map