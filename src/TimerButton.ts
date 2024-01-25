/*!
 * ${copyright}
 */
import Button from "sap/m/Button";
//@ts-ignore
import ButtonRenderer from "sap/m/ButtonRenderer";
import { TimeoutEventType } from "./library"

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
	private counter: number = 0;
	private timeoutHandle: any = null;
	private oldText: string = '';
	private oldIcon: any;
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(id?: string | $TimerButtonSettings);
	constructor(id?: string, settings?: $TimerButtonSettings);
	constructor(id?: string, settings?: $TimerButtonSettings) {
		super(id, settings);
	}

	static readonly metadata: object = {
		library: "ui5.cc.timerbutton",
		properties: {
			timeout: {
				type: 'int',
				group: 'Misc',
				defaultValue: 5000
			},
			timeoutButtonText: {
				type: 'string',
				group: 'Misc',
				defaultValue: null
			},
			timeoutIcon: {
				type: 'string',
				group: 'Misc',
				defaultValue: null
			},
			timeoutEventType: {
				type: "ui5.cc.timerbutton.EventType",
				group: "Misc",
				defaultValue: TimeoutEventType.enabled
			}
		},
		events: {
			/**
			 * Event is fired when the user clicks the control.
			 */
			press: {}
		}
	};

	// static renderer: typeof ButtonRenderer = ButtonRenderer;
	static renderer = ButtonRenderer

	private _timeoutHandler() {
		this.counter = 0
		this.setProperty('text', this.oldText)
		this.setProperty('icon', this.oldIcon || null)
		switch (this.getProperty('timeoutEventType')) {
			case TimeoutEventType.enabled:
				this.setProperty('enabled', true)
				break;

			case TimeoutEventType.visible:
				this.setProperty('visible', true)
				break

			default:
				break;
		}
	}

	setEnabled(bEnabled?: boolean): this {
		if (this.getProperty('timeoutEventType') === TimeoutEventType.enabled && bEnabled && this.getProperty('timeout') > 0) {
			this.oldText = this.getProperty('text')
			this.setProperty('text', this.getProperty('timeoutButtonText'))
			const self = this;
			this.timeoutHandle = setTimeout(function() {
				self._timeoutHandler();
			}, this.getProperty('timeout'));
			return this;
		} else {
			this.oldIcon = this.getProperty('icon')
			this.setProperty('icon', this.getProperty('timeoutIcon'))
			return super.setEnabled(bEnabled)
		}
	}

	setVisible(bVisible?: boolean): this {
		if (this.getProperty('timeoutEventType') === TimeoutEventType.visible && bVisible && this.getProperty('timeout') > 0) {
			this.oldText = this.getProperty('text')
			this.setProperty('text', this.getProperty('timeoutButtonText'))
			const self = this;
			this.timeoutHandle = setTimeout(function() {
				self._timeoutHandler();
			}, this.getProperty('timeout'));
			return this;
		} else {
			return super.setVisible(bVisible)
		}
	}
}
