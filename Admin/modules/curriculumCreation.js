'use strict';
var logInToAdmin = require('../modules/login.js');
var indexPage = require('../modules/index.js');
var coreData = require('../test-data/test-data.json');
var trainingAdminPage = require('../pages/trainingadmin-page.js');
var trainadminElement = new trainingAdminPage();
var curriculumPages = require('../pages/curriculum-pages.js');
var curriculumElement = new curriculumPages();
var path = require('path');
var utils = require('../utils/utils.js');

module.exports={
		curriculumBasicDetails:function(){
		browser.executeScript("document.getElementsByClassName('scroll-content')[0].scrollTop=800");
        trainadminElement.clickCurriculumMenu();
		browser.sleep(3000);
		curriculumElement.clickCreatNewCurriculum();
		curriculumElement.enterCurriculumTitle(utils.getRandomCurriculumName());
		curriculumElement.enterCurrilculumDuration();
		},
		createSection:function(){
		curriculumElement.clickAddNewSection();
		browser.sleep(2000);
		curriculumElement.enterSectionTitle(utils.getRandomSectionName());
		curriculumElement.clickSaveSection();
		browser.sleep(2000);
		},
		
		createModule:function(no){
			browser.executeScript('window.scrollTo(0,200);');
			curriculumElement.clickAddModule(no);
			browser.sleep(2000);
			curriculumElement.enterModuleName(utils.getRandomModuleName());
			curriculumElement.clickModuleReuseableCheckBox();
			curriculumElement.clickModuleHideDescription();
			curriculumElement.clickModuleSchedule();
			curriculumElement.entermoduleDuration();
			curriculumElement.clickModuleHidden();
			browser.sleep(4000);
			curriculumElement.clickModuleSave();
			browser.sleep(5000);
			
		},
		
		
		addModuleActivity:function(secno,modno){
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,500);');
			curriculumElement.clickAddActivityinmodule(secno,modno);
			browser.sleep(2000);
		},
		addSectionActivity:function(no){
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,100);');
			curriculumElement.clickAddSectionActivity(no);
			browser.sleep(2000);
		},
		
		
		uploadAttachment: function () {
        var fileToUpload = '../test-data/file-uploads/' + coreData.testData.attachment.jpeg;
        var absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElement = element(by.css('input[type="file"]'));
		browser.sleep(4000);
        browser.executeScript("arguments[0].style.visibility = 'visible'; ", fileElement.getWebElement());
        fileElement.sendKeys(absolutePath);
        browser.sleep(2000);
    },
		
		
		

	// quiz activity
		createQuizActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.quiztype);
		curriculumElement.enterActivityName("quiz-activity");
		curriculumElement.clickSelectQuiz();
		browser.sleep(1000);
		curriculumElement.enterquizname();
		browser.executeScript('window.scrollTo(0,300);');
		curriculumElement.enterMaximumpoint();
		curriculumElement.enterActivityduration();
		},
		createQuizAsMajorANDHidesDescriptionANDScheduledActivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickQuizHideDescription();
		curriculumElement.enableQuizScheduling();
		curriculumElement.clickQuizMajor();
		curriculumElement.clickSaveActivity();
		},
		createQuizAsMajorANDWithHidesDescriptionANDAsScheduledAndAsHiddenActivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickQuizMajor();
		curriculumElement.clickQuizHideDescription();
		curriculumElement.enableQuizScheduling();
		curriculumElement.clickQuizHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		createQuizAsMajoractivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickQuizMajor();
		curriculumElement.clickSaveActivity();
		},
		createQuizWithHidesDescription:function(){
			this.createQuizActivityBasicFields();
			curriculumElement.clickQuizHideDescription();
			curriculumElement.clickSaveActivity();
		},
		createQuizAsHiddenActivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickQuizHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		createQuizAsScheduledActivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.enableQuizScheduling();
		curriculumElement.clickSaveActivity();
		},

		//reference activity
		createReferenceActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.referencetype);
		curriculumElement.enterActivityName("reference-activity");
		browser.executeScript('window.scrollTo(0,500);');
		curriculumElement.enterActivityduration();
		},
		addReferenceArtifactforReferenectActivit:function(){
		curriculumElement.clickAddReferenceArtifacts();
		browser.sleep(2000);
		curriculumElement.enterReferenceArtifactsName();
		this.uploadAttachment();
		curriculumElement.clickReferenceAddTolist();
		curriculumElement.clickReferenceAttachToActivity();
		browser.sleep(2000);
		},
		addReferenceUrlArtifactforReferenectActivit:function(){
		curriculumElement.clickAddReferenceUrlButton();
		browser.sleep(2000);
		curriculumElement.enterReferenceUrlName();
		curriculumElement.enterReferenceUrl();
		curriculumElement.clickReferenceUrlAddTolist();
		curriculumElement.clickReferenceUrlAttachToActivity();
		browser.sleep(3000);
		},
		
		
		createReferenceAsMajorANDScheduledActivitywithArtifactAndUrl:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.enableReferenceScheduling();
		//this.addReferenceArtifactforReferenectActivit();
		//this.addReferenceUrlArtifactforReferenectActivit();
		browser.sleep(5000);
		curriculumElement.clickReferenceMajor();
		curriculumElement.clickSaveActivity();
		},
		createReferenceAsMajoractivityANDHidesDescriptionANDScheduledActivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceHideDescription();
		curriculumElement.enableReferenceScheduling();
		curriculumElement.clickReferenceMajor();
		curriculumElement.clickSaveActivity();
		},
		createReferenceAsMajorANDHidesDescriptionANDScheduledANDHiddenActivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceHideDescription();
		curriculumElement.enableReferenceScheduling();
		curriculumElement.clickReferenceMajor();
		curriculumElement.clickReferenceHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		
		createReferenceAsMajoractivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceMajor();
		curriculumElement.clickSaveActivity();
		},
		createReferenceAsScheduledctivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.enableReferenceScheduling();
		curriculumElement.clickSaveActivity();
		},
		createReferenceAsHiddenActivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		createReferenceWithHidesDescription:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		
		
		// lecture activity
		createLectureActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.lecturetype);
		curriculumElement.enterActivityName("lecture-activity");
		browser.executeScript('window.scrollTo(0,500);');
		curriculumElement.enterActivityduration();
		},
		AddLectureActivityRefernceVideo:function(){
			curriculumElement.clickLectureReferenceVideo();
			browser.sleep(2000);
			curriculumElement.entersearchReferenceVideo();
			curriculumElement.clickSelectReferenceVideo();
			curriculumElement.clickSaveReferenceVideo();
			
		},
		createLectureAsMajoraANDHidesDescriptionANDScheduledActivity:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickLectureHideDescription();
		//this.AddLectureActivityRefernceVideo();
		browser.sleep(2000);
		curriculumElement.enableLectureScheduling();
		curriculumElement.clickLectureMajor();
		browser.sleep(4000);
		curriculumElement.clickSaveActivity();
		},
		createLectureAsMajoraANDHidesDescriptionANDScheduledAndHiddenActivity:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickLectureHideDescription();
		curriculumElement.enableLectureScheduling();
		curriculumElement.clickLectureMajor();
		curriculumElement.clickLectureHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		createLectureAsMajoraActivity:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickLectureMajor();
		curriculumElement.clickSaveActivity();
		},
		createLectureAsScheduledActivity:function(){
		this.createLectureActivityBasicFields();;
		curriculumElement.enableLectureScheduling();
		curriculumElement.clickSaveActivity();
		},
		
		createLectureWithHidesDescription:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickLectureHideDescription();
		curriculumElement.enableLectureScheduling();
		curriculumElement.clickLectureMajor();
		curriculumElement.clickLectureHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		

		//assignment activity 
		createAssignementActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.assignmenttype);
		curriculumElement.enterActivityName("assignment-activity");
		curriculumElement.enterMaximumpoint();
		curriculumElement.enterActivityduration();
		//curriculumElement.clickSubmissionRequired();
		curriculumElement.enterAllowedFileType();
		},
		
		createAssignementAsMajoraANDHidesDescriptionANDScheduledActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickAssignmentHideDescription();
		curriculumElement.enableAssignmentScheduling();
		curriculumElement.clickLAssignmentMajor();
		curriculumElement.clickSaveActivity();
		},
		createAssignementAsMajoraANDHidesDescriptionANDScheduledAndHideActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickAssignmentHideDescription();
		curriculumElement.enableAssignmentScheduling();
		curriculumElement.clickLAssignmentMajor();
		curriculumElement.clickAssignmentHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		createAssignementAsMajoraActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickLAssignmentMajor();
		curriculumElement.clickSaveActivity();
		},
		createAssignementHidesDescriptionActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickAssignmentHideDescription();
		curriculumElement.clickSaveActivity();
		},
		createAssignementAsScheduledActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.enableAssignmentScheduling();
		curriculumElement.clickSaveActivity();
		},
		createAssignementAsHiddeneActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickAssignmentHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		//grading activity
		createGradingActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.gradingtype);
		curriculumElement.enterActivityName("grading-activity");
		curriculumElement.enterMaximumpoint();
		curriculumElement.enterActivityduration();
		},
		
		createGradingAsMajoraANDHidesDescriptionANDScheduledAndHideActivity:function(){
		this.createGradingActivityBasicFields();
		curriculumElement.clickGradingHideDescription();
		curriculumElement.enableGradingScheduling();
		curriculumElement.clickLGradeMajor();
		curriculumElement.clickGradeHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		createGradingAsMajoraANDHidesDescriptionANDScheduledActivity:function(){
		this.createGradingActivityBasicFields();
		curriculumElement.clickGradingHideDescription();
		curriculumElement.enableGradingScheduling();
		curriculumElement.clickLGradeMajor();
		curriculumElement.clickSaveActivity();
		},
		createGradingAsMajorActivity:function(){
		this.createGradingActivityBasicFields();;
		curriculumElement.clickLGradeMajor();
		curriculumElement.clickSaveActivity();
		},
		createGradingAsScheduledActivity:function(){
		this.createGradingActivityBasicFields();
		curriculumElement.enableGradingScheduling();
		curriculumElement.clickSaveActivity();
		},
		createGradingWithHidesDescription:function(){
		this.createGradingActivityBasicFields();
		curriculumElement.clickGradingHideDescription();
		curriculumElement.enableGradingScheduling();
		curriculumElement.clickLGradeMajor();
		curriculumElement.clickSaveActivity();
		},
		
		
		
	
		//video activity 
		createvideoActivityBasicFields:function(){
		curriculumElement.enterActivityName("video-activity");
		curriculumElement.selectActivityType(coreData.testData.activitype.videotype);
		curriculumElement.ClickSelectVideo();
		curriculumElement.enterVideoName();
		curriculumElement.enterActivityduration();
		},
		
		createVideoAsMajoraANDHidesDescriptionANDScheduledAndHideActivity:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickVideoHideDescription();
		curriculumElement.enableVideoScheduling();
		curriculumElement.clickLvideoMajor();
		curriculumElement.clickvideoHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		createVideoAsMajoraANDHidesDescriptionANDScheduledActivity:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickVideoHideDescription();
		curriculumElement.enableVideoScheduling();
		curriculumElement.clickLvideoMajor();
		curriculumElement.clickSaveActivity();
		},
		createVideoAsMajorActivity:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickLvideoMajor();
		curriculumElement.clickSaveActivity();
		},
		createVideoAsScheduledActivity:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.enableVideoScheduling();
		curriculumElement.clickSaveActivity();
		},
		createVideoWithHidesDescription:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickVideoHideDescription();
		curriculumElement.enableVideoScheduling();
		curriculumElement.clickLvideoMajor();
		curriculumElement.clickSaveActivity();
		},
		
		
		
		
		//project 
		createProjectActivityBasicFields:function(){
		curriculumElement.enterActivityName("Project-activity");
		curriculumElement.selectActivityType(coreData.testData.activitype.projecttype);
		curriculumElement.enterActivityduration();
		},
		createProjectAsMajoraANDHidesDescriptionANDScheduledAndHideActivity:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickProjectHideDescription();
		curriculumElement.enableProjectScheduling();
		curriculumElement.clickLProjectMajor();
		curriculumElement.clickProjectHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		createProjectAsMajoraANDHidesDescriptionANDScheduledActivity:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickProjectHideDescription();
		curriculumElement.enableProjectScheduling();
		curriculumElement.clickLProjectMajor();
		curriculumElement.clickSaveActivity();
		},
		
		createProjectAsMajorActivity:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickLProjectMajor();
		curriculumElement.clickSaveActivity();
		},
		
		createProjectAsScheduledActivity:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.enableProjectScheduling();
		curriculumElement.clickSaveActivity();
		},
		createProjectWithHidesDescription:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickProjectHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		
		
		
		
		//module with all activities as major
		moduleWithAllActivitiesAsMajor:function(secno,modno){
			
			this.addModuleActivity(secno,modno);
			this.createQuizAsMajoractivity();
			this.addModuleActivity(secno,modno);
			this.createReferenceAsMajoractivity();
			this.addModuleActivity(secno,modno);
			this.createLectureAsMajoraActivity();
			this.addModuleActivity(secno,modno);
			browser.sleep(2000);
			this.createAssignementAsMajoraActivity();
			this.addModuleActivity(secno,modno);
			this.createGradingAsMajorActivity();
			this.addModuleActivity(secno,modno);
			this.createVideoAsMajorActivity();
			this.addModuleActivity(secno,modno);
			this.createProjectAsMajorActivity();
			browser.sleep(2000);
		},
		
		//module with all activities as scheduled
		moduleWithAllActivitiesAsScheduled:function(secno,modno){
			this.addModuleActivity(secno,modno);
			this.createQuizAsScheduledActivity();
			browser.sleep(2000);
			this.addModuleActivity(secno,modno);
			this.createReferenceAsScheduledctivity();
			this.addModuleActivity(secno,modno);
			this.createLectureAsScheduledActivity();
			this.addModuleActivity(secno,modno);
			browser.sleep(2000);
			this.createAssignementAsScheduledActivity();
			this.addModuleActivity(secno,modno);
			this.createGradingAsScheduledActivity();
			this.addModuleActivity(secno,modno);
			this.createVideoAsScheduledActivity();
			this.addModuleActivity(secno,modno);
			this.createProjectAsScheduledActivity();
			browser.sleep(2000);
		},
		
			//module with all activities as HidDescription
			moduleWithAllActivitiesAsHidDescription:function(secno,modno){
			this.addModuleActivity(secno,modno);
			this.createQuizWithHidesDescription();
			browser.sleep(2000);
			this.addModuleActivity(secno,modno);
			this.createReferenceWithHidesDescription();
			this.addModuleActivity(secno,modno);
			this.createLectureWithHidesDescription();
			this.addModuleActivity(secno,modno);
			browser.sleep(2000);
			this.createAssignementHidesDescriptionActivity();
			this.addModuleActivity(secno,modno);
			this.createGradingWithHidesDescription();
			this.addModuleActivity(secno,modno);
			this.createVideoWithHidesDescription();
			this.addModuleActivity(secno,modno);
			this.createProjectWithHidesDescription();
			browser.sleep(2000);
		},
		
		
		
		
		
		//section with all activities as major
		sectionWithAllActivitiesAsMajor:function(no){
			
			this.addSectionActivity(no);
			this.createQuizAsMajoractivity();
			this.addSectionActivity(no);
			this.createReferenceAsMajoractivity();
			this.addSectionActivity(no);
			this.createLectureAsMajoraActivity();
			this.addSectionActivity(no);
			browser.sleep(2000);
			this.createAssignementAsMajoraActivity();
			this.addSectionActivity(no);
			this.createGradingAsMajorActivity();
			this.addSectionActivity(no);
			this.createVideoAsMajorActivity();
			this.addSectionActivity(no);
			this.createProjectAsMajorActivity();
			browser.sleep(2000);
		},
		
			//Section with all activities as scheduled
			sectionWithAllActivitiesAsScheduled:function(no){
			this.addSectionActivity(no);
			this.createQuizAsScheduledActivity();
			browser.sleep(2000);
			this.addSectionActivity(no);
			this.createReferenceAsScheduledctivity();
			this.addSectionActivity(no);
			this.createLectureAsScheduledActivity();
			this.addSectionActivity(no);
			browser.sleep(2000);
			this.createAssignementAsScheduledActivity();
			this.addSectionActivity(no);
			this.createGradingAsScheduledActivity();
			this.addSectionActivity(no);
			this.createVideoAsScheduledActivity();
			this.addSectionActivity(no);
			this.createProjectAsScheduledActivity();
			browser.sleep(2000);
		},
		
		//Section with all activities as HidDescription
			sectionWithAllActivitiesAsHidDescription:function(no){
			this.addSectionActivity(no);
			this.createQuizWithHidesDescription();
			browser.sleep(2000);
			this.addSectionActivity(no);
			this.createReferenceWithHidesDescription();
			this.addSectionActivity(no);
			this.createLectureWithHidesDescription();
			this.addSectionActivity(no);
			browser.sleep(2000);
			this.createAssignementHidesDescriptionActivity();
			this.addSectionActivity(no);
			this.createGradingWithHidesDescription();
			this.addSectionActivity(no);
			this.createVideoWithHidesDescription();
			this.addSectionActivity(no);
			this.createProjectWithHidesDescription();
			browser.sleep(2000);
		},
		
		
		
		//module with all activities as major, hide descritpion and scheduled
		moduleWithAllActivitiesAsMajorAndScheduledAndHidDescription:function(secno,modno){
			this.addModuleActivity(secno,modno);
			this.createQuizAsMajorANDHidesDescriptionANDScheduledActivity();
			browser.sleep(2000);
			this.addModuleActivity(secno,modno);
			this.createReferenceAsMajoractivityANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity(secno,modno);
			this.createLectureAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity(secno,modno);
			browser.sleep(2000);
			this.createAssignementAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity(secno,modno);
			this.createGradingAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity(secno,modno);
			this.createVideoAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity(secno,modno);
			this.createProjectAsMajoraANDHidesDescriptionANDScheduledActivity();
			browser.sleep(2000);
		},
		
		//section with all activities as major, hide descritpion and scheduled
		sectionWithAllActivitiesAsMajorAndScheduledAndHideDescription:function(no){
			this.addSectionActivity(no);
			this.createQuizAsMajorANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity(no);
			this.createReferenceAsMajoractivityANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity(no);
			this.createLectureAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity(no);
			this.createAssignementAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity(no);
			this.createGradingAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity(no);
			this.createVideoAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity(no);
			this.createProjectAsMajoraANDHidesDescriptionANDScheduledActivity();
			browser.sleep(2000);
		},
			
		createCurriculumWithAllActivitieswithMajorAndHidedescriptionAndSchduled:function(){
			
              // section "0" add first section activity, 
			 // create module "0" means create 1st section module ,  
            // module("1","1") means add activity in "1st" section and "1st" module 
			
			this.curriculumBasicDetails();
			this.createSection();
			this.createModule("0");
			this.moduleWithAllActivitiesAsMajorAndScheduledAndHidDescription("1","1");
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsMajorAndScheduledAndHideDescription("0");
			browser.sleep(2000);
			
			browser.executeScript('window.scrollTo(0,1500);');
			this.createModule("0");
			this.moduleWithAllActivitiesAsMajor("1","2");
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsMajor("0");
			browser.sleep(2000);
			
			this.createModule("0");
			this.moduleWithAllActivitiesAsScheduled("1","3");
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsScheduled("0");
			browser.sleep(2000);
			
			this.createModule("0");
			this.moduleWithAllActivitiesAsHidDescription("1","4");
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsHidDescription("0");
			
			
			
			/*
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsMajor("0");
			browser.executeScript('window.scrollTo(0,-100);');
			this.createSection();
			browser.executeScript('window.scrollTo(0,1800);');
			this.createModule("1");
			this.moduleWithAllActivitiesAsMajorAndScheduledAndHidDescription("2","1");
			this.sectionWithAllActivitiesAsMajorAndScheduledAndHideDescription("1");
			browser.executeScript('window.scrollTo(0,-100);');
			curriculumElement.clickSaveCurriculum();
		*/
		},
		


};