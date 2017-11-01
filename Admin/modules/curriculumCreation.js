'use strict';
var logInToAdmin = require('../modules/login.js');
var indexPage = require('../modules/index.js');
var coreData = require('../test-data/test-data.json');
var trainingAdminPage = require('../pages/trainingadmin-page.js');
var trainadminElement = new trainingAdminPage();
var curriculumPage = require('../pages/curriculum-pages.js');
var curriculumElement = new curriculumPage();



describe("createorgination",function(){

	beforeAll(function () {
		indexPage.appInitialize(coreData.testData.environment.url);
		logInToAdmin.userLogin(coreData.testData.loginCredential.userName,coreData.testData.loginCredential.password);	

		
    });
	
	it('create curriculum',function(){
		
		browser.executeScript("document.getElementsByClassName('scroll-content')[0].scrollTop=800");
		
        trainadminElement.clickCurriculumMenu();
		browser.sleep(4000);
		curriculumElement.clickCreatNewCurriculum();
		curriculumElement.enterCurriculumTitle();
		curriculumElement.enterCurrilculumDuration();
		curriculumElement.clickAddNewSection();
		curriculumElement.enterSectionTitle();
	//	curriculumElement.clickSaveSection();
	//	curriculumElement.clickSaveCurriculum();
	});
	
	
	
});