
var jasmineReporters = require('jasmine-reporters');
var fs = require('fs-extra');
var HTMLReport = require('protractor-html-reporter');

exports.config = {

    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: ["--test-type", "--no-sandbox"] //"--start-maximized"
        },
        loggingPrefs: {
            browser: "ALL"
        }
    },
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 600000
    },
    allScriptsTimeout: 120000,
    specs:
        [
         './specs/curriculum-spec.js',
		  
        ],

    /*suites:
    {
      one: './specs/signup-spec.js',
      ,
      three: './specs/portfolioTC.js'
    },*/

    onPrepare: function () {
        browser.manage().window().maximize();

        /**XML Generation**/

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xml-results'
        }));

        /**Screenshots Generation**/

        fs.emptyDir('screenshots/', function (err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },

    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');

            testConfig = {
                reportTitle: 'Test Report',
                outputPath: './',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('xml-results.xml', testConfig);
        });
    }


};