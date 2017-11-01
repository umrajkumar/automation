'use strict'

var superadminpage = function(){

var organisationMenu = element(by.xpath("//*[@id='organizationLnkId']/a"));

var manageOrganisationMenu = element(by.xpath("//*[@id='organization-setting']/a"));

var settingMenu = element(by.id("settings"));

var logoutButton = element(by.id("mainFormMenu:log-out-BTN"));


this.clickorganisationMenu = function(){
	organisationMenu.click();
};
this.clickManageOrganisationMenu = function(){
	manageOrganisationMenu.click();
};
this.clickSettingMenu=function(){
	settingMenu.click();
};
this.clickLogoutButton = function(){
logoutButton.click();	
};


};

module.exports=superadminpage;