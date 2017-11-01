'use strict';
var logins = require('../pages/login-page.js');
var loginPageElement = new logins();
module.exports = {
	userLogin : function(username,password){
		loginPageElement.enterUserName(username);
		loginPageElement.enterPassword(password);
		loginPageElement.clickLoginButton();
		browser.sleep(4000);
	}
};