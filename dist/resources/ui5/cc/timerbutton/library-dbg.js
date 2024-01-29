/*!
 * ${copyright}
 */
"use strict";

sap.ui.define(["sap/base/util/ObjectPath", "sap/ui/core/library"], function (ObjectPath, coreLib) {
  "use strict";

  coreLib; // prevent removal of unused import which is needed to load the core lib asynchronously

  /**
   * Initialization Code and shared classes of library ui5.cc.timerbutton.
   */

  // delegate further initialization of this library to the Core
  // Hint: sap.ui.getCore() must still be used here to support preload with sync bootstrap!
  sap.ui.getCore().initLibrary({
    name: "ui5.cc.timerbutton",
    version: "${version}",
    dependencies: [
    // keep in sync with the ui5.yaml and .library files
    "sap.ui.core", "sap.m"],
    types: [],
    interfaces: [],
    controls: ["ui5.cc.timerbutton.TimerButton"],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
  });

  /**
   * Eventtypes ths TimerButton can handle
   *
   * @enum {string}
   * @public
   */
  var TimeoutEventType = /*#__PURE__*/function (TimeoutEventType) {
    TimeoutEventType["enabled"] = "enabled";
    TimeoutEventType["visible"] = "visible";
    return TimeoutEventType;
  }(TimeoutEventType || {}); // get the library object from global object space because all enums must be attached to it to be usable as UI5 types
  // FIXME: this line is planned to become obsolete and may need to be removed later
  const thisLib = ObjectPath.get("ui5.cc.timerbutton");

  // export the library namespace
  thisLib.TimeoutEventType = TimeoutEventType;
  return thisLib;
});
//# sourceMappingURL=library-dbg.js.map
