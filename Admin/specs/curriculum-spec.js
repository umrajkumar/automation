'use strict';
var logInToAdmin = require('../modules/login.js');
var indexPage = require('../modules/index.js');
var coreData = require('../test-data/test-data.json');
var curriculum = require('../modules/curriculumCreation.js');



describe("createorgination",function(){

	beforeAll(function () {
		indexPage.appInitialize(coreData.testData.environment.url);
		logInToAdmin.userLogin(coreData.testData.loginCredential.userName,coreData.testData.loginCredential.password);	

		
    });
	
   /*  it("curriculum With All Activities with Major , Hidedescription And Schduled",function(){
		 curriculum.createCurriculumWithAllActivitieswithMajorAndHidedescriptionAndSchduled();
	 });
	*/
	it("create Curriculum With Two Section One with majoractivities And Another With Schduled",function(){
		 curriculum.createCulumWithAllActivitiesAndMajor();
	 });
	
	
	/*it("create Curriculum With Two Section One with majoractivities And Another With Schduled",function(){
		 curriculum.createCurriculumWithTwoSectionOnewithmajoractivitiesAndAnotherWithSchduled();
	 });*/
	
	});