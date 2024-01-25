module.exports = function(config) {
	require("./karma-ci.conf")(config);
	config.set({
		reporters: ["progress", "coverage"],
		preprocessors: {
			"src/**/*.ts": ["ui5-transpile"],
			"test/**/*.ts": ["ui5-transpile"]
		},
		proxies: {
			'/resources/ui5/cc/timerbutton/': '/base/src/',
			'/test-resources/ui5/cc/timerbutton/': '/base/test/',
		},
		coverageReporter: {
			dir: "coverage",
			reporters: [
				{ type: "html", subdir: "report-html" },
				{ type: "cobertura", subdir: ".", file: "cobertura.txt" },
				{ type: "lcovonly", subdir: ".", file: "report-lcovonly.txt" },
				{ type: "text-summary" }
			]
		}
	});
};
