'use strict';
var user = require('../pages/superadmin-page.js');

module.exports = {
	userLogout:function(){
	user.clickSettingMenu();
	user.clickLogoutButton();
	}
};