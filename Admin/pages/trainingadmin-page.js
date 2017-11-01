'use strict';

var trainingAdminPage = function(){
	
	var curriculumMenu = element(by.linkText("Curriculums"));
	
	this.clickCurriculumMenu = function(){
		curriculumMenu.click();
	};
	
	
};
module.exports = trainingAdminPage;