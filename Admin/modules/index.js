'use strict';
module.exports = {
	appInitialize: function(url) {
		browser.ignoreSynchronization=true;
        browser.get(url);
        browser.manage().window().maximize();
	    browser.sleep(2000);

    }
};
    
    