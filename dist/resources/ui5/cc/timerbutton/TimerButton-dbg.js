/*!
 * ${copyright}
 */
"use strict";

sap.ui.define(["sap/m/Button", "sap/m/ButtonRenderer", "./library"], function (Button, ButtonRenderer, ___library) {
  "use strict";

  const TimeoutEventType = ___library["TimeoutEventType"];
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
  const TimerButton = Button.extend("ui5.cc.timerbutton.TimerButton", {
    // static renderer: typeof ButtonRenderer = ButtonRenderer;
    renderer: ButtonRenderer,
    metadata: {
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
          defaultValue: 'sap-icon://pending'
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
    },
    constructor: function _constructor(id, settings) {
      Button.prototype.constructor.call(this, id, settings);
      this.counter = 0;
      this.timeoutHandle = null;
      this.oldText = '';
      this.oldIcon = null;
    },
    _timeoutHandler: function _timeoutHandler() {
      this.counter = 0;
      this.setProperty('text', this.oldText);
      this.setProperty('icon', this.oldIcon || null);
      this.oldIcon = null;
      switch (this.getProperty('timeoutEventType')) {
        case TimeoutEventType.enabled:
          this.setProperty('enabled', true);
          break;
        case TimeoutEventType.visible:
          this.setProperty('visible', true);
          break;
        default:
          break;
      }
    },
    setText: function _setText(sText) {
      this.oldText = sText;
      return Button.prototype.setText.call(this, sText);
    },
    setEnabled: function _setEnabled(bEnabled) {
      if (this.getProperty('timeoutEventType') === TimeoutEventType.enabled && bEnabled && this.getProperty('timeout') > 0) {
        this.oldText = this.getProperty('text');
        this.setProperty('text', this.getProperty('timeoutButtonText'));
        const self = this;
        this.timeoutHandle = setTimeout(function () {
          self._timeoutHandler();
        }, this.getProperty('timeout'));
        return this;
      } else {
        // @ts-ignore
        this.oldIcon = this.oldIcon || this.getProperty('icon') || this._sTypeIconURI;
        this.setProperty('icon', this.getProperty('timeoutIcon'));
        return Button.prototype.setEnabled.call(this, bEnabled);
      }
    },
    setVisible: function _setVisible(bVisible) {
      if (this.getProperty('timeoutEventType') === TimeoutEventType.visible && bVisible && this.getProperty('timeout') > 0) {
        this.oldText = this.getProperty('text');
        this.setProperty('text', this.getProperty('timeoutButtonText'));
        const self = this;
        this.timeoutHandle = setTimeout(function () {
          self._timeoutHandler();
        }, this.getProperty('timeout'));
        return this;
      } else {
        return Button.prototype.setVisible.call(this, bVisible);
      }
    }
  });
  return TimerButton;
});
//# sourceMappingURL=TimerButton-dbg.js.map
