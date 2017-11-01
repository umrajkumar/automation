'use strict';
var logInToAdmin = require('../modules/login.js');
var indexPage = require('../modules/index.js');
var superAdminPage = require('../pages/superadmin-page.js');
var superAdminPageElements = new superAdminPage();
var coreData = require('../test-data/test-data.json');
var admin = require('../modules/orgnisationCreation.js');
var logOutSuperAdmin = require('../modules/logout.js');
var creatOrganisationPage = require('../pages/orgcreation-page.js');
var validation = new creatOrganisationPage();

describe("createorgination",function(){

	beforeAll(function () {
		indexPage.appInitialize(coreData.testData.environment.url);
		logInToAdmin.userLogin(coreData.testData.loginCredential.userName,coreData.testData.loginCredential.password);	
		superAdminPageElements.clickorganisationMenu();
		superAdminPageElements.clickManageOrganisationMenu();
		
    });
	it('create orgination with all content',function(){
		admin.createAcademicOrganisationWithAllContentSubscribtion();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);
		
	});
	it('create Orginisation Without ALl Content But With AllVideo And Quiz',function(){
		admin.createAcademicOrginisationWithoutALlContentButWithAllVideoAndQuiz();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);
	});
	it('create Organisation Without AllContent And video',function(){
		admin.createAcademicOrganisationWithoutAllContentAndvideo();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);
	});
	it('create Organisation Without AllContent And quiz',function(){
		admin.createAcademicOrganisationWithoutAllContentAndquiz();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);
	});
	
	it('create Organisation With Selected Project And Course And Quiz',function(){
		admin.createAcademicOrganisationWithSelectedProjectAndCourseAndQuiz();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);
	});
	
	it('create Organisation With Selected Project And Course And Quiz And Without All videoAnd Question',function(){

		admin.createAcademicOrganisationWithSelectedProjectAndCourseAndQuizAndWithoutAllvideoAndQuestion();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);

	});

	it('create Organisation With Selected Project And Course And Quiz And Without All video',function(){

		admin.createAcademicOrganisationWithSelectedProjectAndCourseAndQuizAndWithoutAllvideo();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);

	});
	
	it('create Organisation With Selected Project And Course And Quiz And Without All Question',function(){

		admin.createAcademicOrganisationWithSelectedProjectAndCourseAndQuizAndWithoutAllQuestion();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);

	});

	it('create Organisation With Activation Code',function(){
		admin.createAcademicOrganisationWithActivationCode();
		expect(validation.getOrgCreationsMessage()).toEqual(coreData.testData.successmessage.orgcreationsucessmessage);
	});
	
});