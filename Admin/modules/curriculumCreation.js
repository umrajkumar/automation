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
		curriculumElement.enterCurriculumTitle();
		curriculumElement.enterCurrilculumDuration();
		},
		createSection:function(){
		curriculumElement.clickAddNewSection();
		browser.sleep(2000);
		curriculumElement.enterSectionTitle(utils.getRandomSectionName());
		curriculumElement.clickSaveSection();
		browser.sleep(2000);
		},
		
		createModule:function(){
			browser.executeScript('window.scrollTo(0,200);');
			curriculumElement.clickAddModule();
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
		
		
		addModuleActivity:function(){
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,100);');
			curriculumElement.clickAddActivityinmodule();
			browser.sleep(2000);
		},
		addSectionActivity:function(){
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,100);');
			curriculumElement.clickAddActivity();
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
		createReferenceAsHidesDescription:function(){
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

		
		createCurriculumWithAllActivitieswithMajorAndHidedescriptionAndSchduled:function(){
			
			this.curriculumBasicDetails();
			this.createSection();
			this.createModule();
			this.addModuleActivity();
			this.createQuizAsMajorANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity();
			this.createReferenceAsMajoractivityANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity();
			this.createLectureAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity();
			browser.sleep(2000);
			this.createAssignementAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity();
			this.createGradingAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity();
			this.createVideoAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addModuleActivity();
			this.createProjectAsMajoraANDHidesDescriptionANDScheduledActivity();
			browser.sleep(2000);
			this.addSectionActivity();
			this.createQuizAsMajorANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity();
			this.createReferenceAsMajoractivityANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity();
			this.createLectureAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity();
			this.createAssignementAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity();
			this.createGradingAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity();
			this.createVideoAsMajoraANDHidesDescriptionANDScheduledActivity();
			this.addSectionActivity();
			this.createProjectAsMajoraANDHidesDescriptionANDScheduledActivity();
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,-100);');
			curriculumElement.clickSaveCurriculum();
		
		}
		


};