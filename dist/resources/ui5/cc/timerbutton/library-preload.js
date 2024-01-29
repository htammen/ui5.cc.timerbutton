//@ui5-bundle ui5/cc/timerbutton/library-preload.js
sap.ui.require.preload({
	"ui5/cc/timerbutton/TimerButton.js":function(){
/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/m/Button","sap/m/ButtonRenderer","./library"],function(t,e,i){"use strict";const o=i["TimeoutEventType"];const r=t.extend("ui5.cc.timerbutton.TimerButton",{renderer:e,metadata:{library:"ui5.cc.timerbutton",properties:{timeout:{type:"int",group:"Misc",defaultValue:5e3},timeoutButtonText:{type:"string",group:"Misc",defaultValue:null},timeoutIcon:{type:"string",group:"Misc",defaultValue:"sap-icon://pending"},timeoutEventType:{type:"ui5.cc.timerbutton.EventType",group:"Misc",defaultValue:o.enabled}},events:{press:{}}},constructor:function e(i,o){t.prototype.constructor.call(this,i,o);this.counter=0;this.timeoutHandle=null;this.oldText="";this.oldIcon=null},_timeoutHandler:function t(){this.counter=0;this.setProperty("text",this.oldText);this.setProperty("icon",this.oldIcon||null);this.oldIcon=null;switch(this.getProperty("timeoutEventType")){case o.enabled:this.setProperty("enabled",true);break;case o.visible:this.setProperty("visible",true);break;default:break}},setText:function e(i){this.oldText=i;return t.prototype.setText.call(this,i)},setEnabled:function e(i){if(this.getProperty("timeoutEventType")===o.enabled&&i&&this.getProperty("timeout")>0){this.oldText=this.getProperty("text");this.setProperty("text",this.getProperty("timeoutButtonText"));const t=this;this.timeoutHandle=setTimeout(function(){t._timeoutHandler()},this.getProperty("timeout"));return this}else{this.oldIcon=this.oldIcon||this.getProperty("icon")||this._sTypeIconURI;this.setProperty("icon",this.getProperty("timeoutIcon"));return t.prototype.setEnabled.call(this,i)}},setVisible:function e(i){if(this.getProperty("timeoutEventType")===o.visible&&i&&this.getProperty("timeout")>0){this.oldText=this.getProperty("text");this.setProperty("text",this.getProperty("timeoutButtonText"));const t=this;this.timeoutHandle=setTimeout(function(){t._timeoutHandler()},this.getProperty("timeout"));return this}else{return t.prototype.setVisible.call(this,i)}}});return r});
},
	"ui5/cc/timerbutton/library.js":function(){
/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/base/util/ObjectPath","sap/ui/core/library"],function(e,t){"use strict";t;sap.ui.getCore().initLibrary({name:"ui5.cc.timerbutton",version:"${version}",dependencies:["sap.ui.core","sap.m"],types:[],interfaces:[],controls:["ui5.cc.timerbutton.TimerButton"],elements:[],noLibraryCSS:false});var i=function(e){e["enabled"]="enabled";e["visible"]="visible";return e}(i||{});const n=e.get("ui5.cc.timerbutton");n.TimeoutEventType=i;return n});
},
	"ui5/cc/timerbutton/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"ui5.cc.timerbutton","type":"library","embeds":[],"applicationVersion":{"version":"0.5.0"},"title":"ui5-cc-timerbutton","description":"TimerButton UI5 Control","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":[]},"sap.ui5":{"dependencies":{"minUI5Version":"1.108","libs":{"sap.ui.core":{"minVersion":"1.108.19"}}},"library":{"i18n":false,"content":{"controls":["ui5.cc.timerbutton.TimerButton"],"elements":[],"types":[],"interfaces":[]}}}}'
});
//# sourceMappingURL=library-preload.js.map
