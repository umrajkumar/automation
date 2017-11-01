'use strict';
var logInToAdmin = require('./login.js');
var indexPage = require('./index.js');
var superAdminPage = require('../pages/superadmin-page.js');
var utils = require('../utils/utils.js');
var creatOrganisationPage = require('../pages/orgcreation-page.js');
var superAdminPageElements = new superAdminPage();
var creatOrganisationPageElements = new creatOrganisationPage();
var coreData = require('../test-data/test-data.json');
module.exports = {

    //common and group of fields categoriesed based upon their tabs
	
	addOrgainsationBasicDetails: function(){
		creatOrganisationPageElements.clickAddOrganisationButton();
		creatOrganisationPageElements.enterorganizationName(utils.getRandomOrgName());
		creatOrganisationPageElements.enterorganizationAlisName(utils.getRandomAliasName());
		creatOrganisationPageElements.selectAcademicPartner();
		creatOrganisationPageElements.enterSalesForceCode("001i000000LPJmv");
		creatOrganisationPageElements.clickenableSalesSync();		
	},
	addOrganisationdomain:function(){
		creatOrganisationPageElements.clickDomainTab();
		creatOrganisationPageElements.enterDomainName(utils.getRandomDomainName());
		creatOrganisationPageElements.clicksaveDomainButton()
		browser.executeScript('window.scrollTo(400,0);');;
		creatOrganisationPageElements.clickSaveOrgButton();
	},
	addOrganisationactivationcode:function(){
		creatOrganisationPageElements.clickactivationCodeTab();
		creatOrganisationPageElements.clickAddActivationCode();
		creatOrganisationPageElements.enterActivationCodeField(coreData.testData.couponcode.code);
		creatOrganisationPageElements.selectValidFromDate();
		creatOrganisationPageElements.selectValidToDate();
		creatOrganisationPageElements.clickSaveActivationCodeButton();
		expect(creatOrganisationPageElements.getOrgActivationcodeMessage()).toEqual(coreData.testData.successmessage.orgActivationcodesucessmessage);
	},
	addProject:function(){
		creatOrganisationPageElements.clickSelectProjectButton();
		creatOrganisationPageElements.enterSearchProject(coreData.testData.contentsubscribtion.project1);
	},
	addCourse:function(){
		creatOrganisationPageElements.clickCourseName();
		creatOrganisationPageElements.clickSelectcourseButton();
		creatOrganisationPageElements.enterSearchCourse(coreData.testData.contentsubscribtion.course1);
	},
	addQuiz:function(){
		creatOrganisationPageElements.clickQuizName();
		creatOrganisationPageElements.clickSelectQuizButton();
		creatOrganisationPageElements.enterSearchQuiz(coreData.testData.contentsubscribtion.quiz1);
	},
	
	//testcases starts
	
	createAcademicOrganisationWithAllContentSubscribtion:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		this.addOrganisationdomain();
	},
	
	createAcademicOrginisationWithoutALlContentButWithAllVideoAndQuiz:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		creatOrganisationPageElements.unCheckallContentCheckBox();
		this.addOrganisationdomain();
	},
	
	createAcademicOrganisationWithoutAllContentAndvideo:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		creatOrganisationPageElements.unCheckallContentCheckBox();
		creatOrganisationPageElements.unCheckallVideoCheckBox();
		this.addOrganisationdomain();
	},
	createAcademicOrganisationWithoutAllContentAndquiz:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		creatOrganisationPageElements.unCheckallContentCheckBox();
		creatOrganisationPageElements.unCheckallQuestionCheckBox();
		this.addOrganisationdomain();
	},
	
	
	createAcademicOrganisationWithSelectedProjectAndCourseAndQuiz:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		browser.executeScript('window.scrollTo(0,400);');
		creatOrganisationPageElements.unCheckallContentCheckBox();
		this.addProject();
		this.addCourse();
		this.addQuiz();
		this.addOrganisationdomain();
	},
	createAcademicOrganisationWithSelectedProjectAndCourseAndQuizAndWithoutAllvideoAndQuestion:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		browser.executeScript('window.scrollTo(0,400);');
		creatOrganisationPageElements.unCheckallContentCheckBox();
		this.addProject();
		this.addCourse();
		this.addQuiz();
		creatOrganisationPageElements.unCheckallVideoCheckBox();
		creatOrganisationPageElements.unCheckallQuestionCheckBox();
		browser.sleep(4000);
		this.addOrganisationdomain();	
	},
	createAcademicOrganisationWithSelectedProjectAndCourseAndQuizAndWithoutAllvideo:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		browser.executeScript('window.scrollTo(0,400);');
		creatOrganisationPageElements.unCheckallContentCheckBox();
		this.addProject();
		this.addCourse();
		this.addQuiz();
		creatOrganisationPageElements.unCheckallVideoCheckBox();
		browser.sleep(4000);
		this.addOrganisationdomain();		
	},
		createAcademicOrganisationWithSelectedProjectAndCourseAndQuizAndWithoutAllQuestion:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		browser.executeScript('window.scrollTo(0,400);');
		creatOrganisationPageElements.unCheckallContentCheckBox();
		this.addProject();
		this.addCourse();
		this.addQuiz();
		creatOrganisationPageElements.unCheckallQuestionCheckBox();
		browser.sleep(4000);
		this.addOrganisationdomain();		
	},	
	createAcademicOrganisationWithActivationCode:function(){
		this.addOrgainsationBasicDetails();
		creatOrganisationPageElements.clickSubscribeContent();
		this.addOrganisationactivationcode();
		this.addOrganisationdomain();
	}
	
};