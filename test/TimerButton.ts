import TimerButton from "ui5/cc/timerbutton/TimerButton";
import { TimeoutEventType } from "ui5/cc/timerbutton/library"
import MessageToast from "sap/m/MessageToast"
import Button from "sap/m/Button"
import HTML from "sap/ui/core"

new TimerButton({
	text: "Disable me for the time of the async call (2 seconds) and 5 seconds after the buttons setEnabled(true) function has been called",
	timeout: 5000,
	timeoutButtonText: 'Just wait a moment. We want you to think about the process',
	press: (event) => {
		(event.getSource() as Button).setEnabled(false)
		MessageToast.show('Holla die Waldfee, Button is disabled');
		const btn = event.getSource()
		setTimeout(function() {
			//@ts-ignore
			btn.setEnabled(true)
		}.bind(this), 2000);

	}
}).placeAt("content");

const html2 = new sap.ui.core.HTML({
}).placeAt("content")
html2.setContent('<div></div>')

new TimerButton({
	icon: 'sap-icon://add-photo',
	timeoutIcon: 'sap-icon://pending',
	tooltip: "Disable me for the time of the async call (2 seconds) and 5 seconds after the buttons setEnabled(true) function has been called",
	timeout: 5000,
	timeoutButtonText: 'Whats going on',
	press: (event) => {
		(event.getSource() as Button).setEnabled(false)
		MessageToast.show('Holla die Waldfee, Button is disabled');
		const btn = event.getSource()
		setTimeout(function() {
			//@ts-ignore
			btn.setEnabled(true)
		}.bind(this), 2000);

	}
}).placeAt("content");

const html1 = new sap.ui.core.HTML({
}).placeAt("content")
html1.setContent('<div></div>')

new TimerButton({
	text: "Disable me for the time of the async call (2 seconds) and 5 seconds after the buttons setEnabled(true) function has been called",
	icon: 'sap-icon://add-photo',
	timeoutIcon: 'sap-icon://pending',
	timeout: 5000,
	timeoutButtonText: 'Just wait a moment. We want you to think about the process',
	press: (event) => {
		(event.getSource() as Button).setEnabled(false)
		MessageToast.show('Holla die Waldfee, Button is disabled');
		const btn = event.getSource()
		setTimeout(function() {
			//@ts-ignore
			btn.setEnabled(true)
		}.bind(this), 2000);

	}
}).placeAt("content");

const html = new sap.ui.core.HTML({
}).placeAt("content")
html.setContent('<div></div>')

new TimerButton({
	text: "Hide me for the time of the async call (2 seconds) and 3 seconds after the buttons setVisible(true) function has been called",
	timeout: 3000,
	timeoutIcon: 'sap-icon://pending',
	timeoutEventType: TimeoutEventType.visible,
	press: (event) => {
		(event.getSource() as Button).setVisible(false)
		MessageToast.show('Holla die Waldfee. Button is wech');
		const btn = event.getSource()
		setTimeout(function() {
			//@ts-ignore
			btn.setVisible(true)
		}.bind(this), 2000);

	}
}).placeAt("content");
