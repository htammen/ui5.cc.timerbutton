import { ExampleColor } from "vwlaekh/portal/mitglieder/controls/library";
import Example from "vwlaekh/portal/mitglieder/controls/Example";

// create a new instance of the Example control and
// place it into the DOM element with the id "content"
new Example({
	text: "Example",
	color: ExampleColor.Highlight,
	press: (event) => {
		alert(event.getSource());
	}
}).placeAt("content");
