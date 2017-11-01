'use strict';
var login=function(){
var username = element(by.id('loginForm:userName-input-id'));
 var password = element(by.id("loginForm:input-psw"));
 var loginButton= element(by.id("loginForm:login-btn-id"));
 
    this.enterUserName = function(user){
	return username.sendKeys(user);
	};	
    this.enterPassword = function(pass){
	return password.sendKeys(pass);
	};
   this.clickLoginButton = function(){
	return loginButton.click();
};
};
module.exports=login;

 
 	

