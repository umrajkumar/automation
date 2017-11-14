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
		browser.sleep(2000);
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
			browser.sleep(1000);
			curriculumElement.clickAddModule(no);
			browser.sleep(2000);
			curriculumElement.enterModuleName(utils.getRandomModuleName());
			curriculumElement.clickModuleReuseableCheckBox();
			curriculumElement.clickModuleHideDescription();
			curriculumElement.clickModuleSchedule();
			curriculumElement.entermoduleDuration();
			//curriculumElement.clickModuleHidden();
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
		
		
		

	// quiz activity and methos 
		
		createQuizActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.quiztype);
		curriculumElement.enterActivityName(utils.getRandomQuizName());
		curriculumElement.clickSelectQuiz();
		browser.sleep(1000);
		curriculumElement.enterquizname();
		browser.executeScript('window.scrollTo(0,300);');
		browser.sleep(1000);
		//curriculumElement.enterMaximumpoint();
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
		
		//quiz as with only basic fields
		createBasicQuiz:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickSaveActivity();
		},
		
		//quiz as major
		createQuizAsMajoractivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickQuizMajor();
		curriculumElement.clickSaveActivity();
		},
		
		//quiz with hide description
		createQuizWithHidesDescription:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickQuizHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		//quiz with hidden
		createQuizAsHiddenActivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.clickQuizHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		//quiz with scheduled
		createQuizAsScheduledActivity:function(){
		this.createQuizActivityBasicFields();
		curriculumElement.enableQuizScheduling();
		curriculumElement.clickSaveActivity();
		},

		//reference activity and its methos
		createReferenceActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.referencetype);
		curriculumElement.enterActivityName(utils.getRandomReferenceName());
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
		
		//reference activity with basic fields
		createBasicReference:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickSaveActivity();
		},
		
		
		//reference activity as major
		createReferenceAsMajoractivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceMajor();
		curriculumElement.clickSaveActivity();
		},
		
		//reference activity as schduled
		createReferenceAsScheduledctivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.enableReferenceScheduling();
		curriculumElement.clickSaveActivity();
		},
		
		//reference activity as hidden
		createReferenceAsHiddenActivity:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		//reference activity as hideDescription
		createReferenceWithHidesDescription:function(){
		this.createReferenceActivityBasicFields();
		curriculumElement.clickReferenceHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		
		
		// lecture activity
		createLectureActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.lecturetype);
		curriculumElement.enterActivityName(utils.getRandomLectureName());
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
		//lecture with basic fields
		createBasicLecture:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickSaveActivity();
		},
		
		//lecture as major
		createLectureAsMajoraActivity:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickLectureMajor();
		curriculumElement.clickSaveActivity();
		},
		
		//lecture as scheduled
		createLectureAsScheduledActivity:function(){
		this.createLectureActivityBasicFields();;
		curriculumElement.enableLectureScheduling();
		curriculumElement.clickSaveActivity();
		},
		
		//lecture as hide description
		createLectureWithHidesDescription:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickLectureHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		//lecture as hidden 
		createLectureAsHiddenActivity:function(){
		this.createLectureActivityBasicFields();
		curriculumElement.clickLectureHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		

		//assignment activity 
		createAssignementActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.assignmenttype);
		curriculumElement.enterActivityName(utils.getRandomAssignmentName());
		browser.sleep(1000);
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
		//assignment with basic fields
		createBasicAssignement:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickSaveActivity();
		},
		
		
		//assignment as major
		createAssignementAsMajoraActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickLAssignmentMajor();
		curriculumElement.clickSaveActivity();
		},
		
		//assignment as hideDescription
		createAssignementHidesDescriptionActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickAssignmentHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		//assignment as schduled
		createAssignementAsScheduledActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.enableAssignmentScheduling();
		curriculumElement.clickSaveActivity();
		},
		
		//assignment as hidden acticity
		createAssignementAsHiddeneActivity:function(){
		this.createAssignementActivityBasicFields();
		curriculumElement.clickAssignmentHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		//grading activity
		createGradingActivityBasicFields:function(){
		curriculumElement.selectActivityType(coreData.testData.activitype.gradingtype);
		curriculumElement.enterActivityName(utils.getRandomGradingName());
		browser.sleep(1000);
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
		
		//grade with basic fields
		createBasicGrading:function(){
		this.createGradingActivityBasicFields();;
		curriculumElement.clickSaveActivity();
		},
		
		//grade as major
		createGradingAsMajorActivity:function(){
		this.createGradingActivityBasicFields();;
		curriculumElement.clickLGradeMajor();
		curriculumElement.clickSaveActivity();
		},
		
		//grade as schduled
		createGradingAsScheduledActivity:function(){
		this.createGradingActivityBasicFields();
		curriculumElement.enableGradingScheduling();
		curriculumElement.clickSaveActivity();
		},
		
		//grade as hideDescription
		createGradingWithHidesDescription:function(){
		this.createGradingActivityBasicFields();
		curriculumElement.clickGradingHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		//grade as hidden
		createGradingAsHiddenActivity:function(){
		this.createGradingActivityBasicFields();
		curriculumElement.clickGradeHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		
		
		
	
		//video activity 
		createvideoActivityBasicFields:function(){
		curriculumElement.enterActivityName(utils.getRandomVideoName());
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
		
		//video with basic fields
		createBasicVideo:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickSaveActivity();
		},
		
		//video as major
		createVideoAsMajorActivity:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickLvideoMajor();
		curriculumElement.clickSaveActivity();
		},
		
		//video as schduled
		createVideoAsScheduledActivity:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.enableVideoScheduling();
		curriculumElement.clickSaveActivity();
		},
		
		//video as hideDescription
		createVideoWithHidesDescription:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickVideoHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		//video as hidden
		createVideoAsHideActivity:function(){
		this.createvideoActivityBasicFields();
		curriculumElement.clickvideoHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		
		
		
		//project 
		createProjectActivityBasicFields:function(){
		curriculumElement.enterActivityName(utils.getRandomProjectName());
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
		
		//project with basic fields
		createBasicProject:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickSaveActivity();
		},
		
		//project as major
		createProjectAsMajorActivity:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickLProjectMajor();
		curriculumElement.clickSaveActivity();
		},
		
		//project as schduled
		createProjectAsScheduledActivity:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.enableProjectScheduling();
		curriculumElement.clickSaveActivity();
		},
		
		//project as hideDescription
		createProjectWithHidesDescription:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickProjectHideDescription();
		curriculumElement.clickSaveActivity();
		},
		
		//project as hidden
		createProjectAsHiddenActivity:function(){
		this.createProjectActivityBasicFields();
		curriculumElement.clickProjectHiddenButton();
		curriculumElement.clickSaveActivity();
		},
		
		//module with all activities without major/scheduled/hidden/description
		moduleWithBasicdetails:function(secno,modno){
			
			this.addModuleActivity(secno,modno);
			this.createBasicQuiz();
			this.addModuleActivity(secno,modno);
			this.createBasicReference();
			this.addModuleActivity(secno,modno);
			this.createBasicLecture();
			this.addModuleActivity(secno,modno);
			browser.sleep(3000);
			this.createBasicAssignement();
			this.addModuleActivity(secno,modno);
			this.createBasicGrading();
			this.addModuleActivity(secno,modno);
			this.createBasicVideo();
			this.addModuleActivity(secno,modno);
			this.createBasicProject();
			browser.sleep(2000);
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
			browser.sleep(3000);
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
		
		//module with all activities as HiddenActivities
			moduleWithAllActivitiesAsHidden:function(secno,modno){
			this.addModuleActivity(secno,modno);
			this.createQuizAsHiddenActivity();
			browser.sleep(2000);
			this.addModuleActivity(secno,modno);
			this.createReferenceAsHiddenActivity();
			this.addModuleActivity(secno,modno);
			this.createLectureAsHiddenActivity();
			this.addModuleActivity(secno,modno);
			browser.sleep(2000);
			this.createAssignementAsHiddeneActivity();
			this.addModuleActivity(secno,modno);
			this.createGradingAsHiddenActivity();
			this.addModuleActivity(secno,modno);
			this.createVideoAsHideActivity();
			this.addModuleActivity(secno,modno);
			this.createProjectAsHiddenActivity();
			browser.sleep(2000);
		},
		
		
			//section with all activities without major/scheduled/hidden/description
		sectionWithBasicdetails:function(no){
			
			this.addSectionActivity(no);
			this.createBasicQuiz();
			this.addSectionActivity(no);
			this.createBasicReference();
			this.addSectionActivity(no);
			this.createBasicLecture();
			this.addSectionActivity(no);
			browser.sleep(3000);
			this.createBasicAssignement();
			this.addSectionActivity(no);
			this.createBasicGrading();
			this.addSectionActivity(no);
			this.createBasicVideo();
			this.addSectionActivity(no);
			this.createBasicProject();
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
		
		//section with all activities as HiddenActivities
			SectionWithAllActivitiesAsHidden:function(no){
			this.addSectionActivity(no);
			this.createQuizAsHiddenActivity();
			browser.sleep(2000);
			this.addSectionActivity(no);
			this.createReferenceAsHiddenActivity();
			this.addSectionActivity(no);
			this.createLectureAsHiddenActivity();
			this.addSectionActivity(no);
			browser.sleep(2000);
			this.createAssignementAsHiddeneActivity();
			this.addSectionActivity(no);
			this.createGradingAsHiddenActivity();
			this.addSectionActivity(no);
			this.createVideoAsHideActivity();
			this.addSectionActivity(no);
			this.createProjectAsHiddenActivity();
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
			
              // section "0" add first section activity, qa environment"userName":"rktradmin@yopmail.com",
			 // create module "0" means create 1st section module ,  
            // module("1","1") means add activity in "1st" section and "1st" module 
			
			
			this.curriculumBasicDetails();
			
			//Section 1
			this.createSection();
			this.createModule("1");
			browser.sleep(1000);
			this.moduleWithBasicdetails("1","1");
			browser.sleep(2000);
			this.sectionWithBasicdetails("1");
			browser.sleep(2000);
	
			
			//Section 2
			browser.executeScript('window.scrollTo(0,-100);');
			this.createSection();
			browser.executeScript('window.scrollTo(0,1200);');
			this.createModule("2");
			browser.sleep(1000);
			this.moduleWithAllActivitiesAsMajorAndScheduledAndHidDescription("2","1");
			browser.sleep(3000);
			browser.executeScript('window.scrollTo(0,1200);');
			this.sectionWithAllActivitiesAsMajorAndScheduledAndHideDescription("2");
			browser.sleep(2000);
			
			// section 3
			browser.executeScript('window.scrollTo(0,-100);');
			this.createSection();
			browser.executeScript('window.scrollTo(0,2000);');
			this.createModule("3");
			browser.sleep(1000);
			this.moduleWithAllActivitiesAsMajor("3","1");
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,2000);');
			this.sectionWithAllActivitiesAsMajor("3");
			browser.sleep(2000);
			
			
			// section 4
			browser.executeScript('window.scrollTo(0,-100);');
			this.createSection();
			browser.sleep(1000);
			browser.executeScript('window.scrollTo(0,2800);');
			this.createModule("4");
			this.moduleWithAllActivitiesAsScheduled("4","1");
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,2800);');
			this.sectionWithAllActivitiesAsScheduled("4");
			browser.sleep(2000);
			
			
			// section 5
			browser.executeScript('window.scrollTo(0,-100);');
			this.createSection();
			browser.sleep(1000);
			browser.executeScript('window.scrollTo(0,3700);');
			this.createModule("5");
			this.moduleWithAllActivitiesAsHidDescription("5","1");
			browser.sleep(2000);
			browser.executeScript('window.scrollTo(0,3700);');
			this.sectionWithAllActivitiesAsHidDescription("5");	
			browser.sleep(1000);
			
			browser.executeScript('window.scrollTo(0,-100);');
			curriculumElement.clickSaveCurriculum();
		},
		
		
		createCulumWithAllActivitiesAndMajor:function(){
			
				this.curriculumBasicDetails();
			
			//Section 1
			this.createSection();
			this.createModule("1");
			browser.sleep(1000);
			this.moduleWithBasicdetails("1","1");
			this.createModule("1");
			browser.sleep(1000);
			this.moduleWithAllActivitiesAsMajor("1","2");
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsScheduled("1");
			browser.sleep(2000);
			
			
			 //Section 2
			this.createSection();
			this.createModule("2");
			browser.sleep(2000);
			this.moduleWithBasicdetails("2","1");
			browser.sleep(2000);
			this.createModule("2");
			browser.sleep(1000);
		/*	this.moduleWithAllActivitiesAsScheduled("2","2");
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsMajor("2");
			browser.sleep(2000);
	
			browser.executeScript('window.scrollTo(0,-100);');
			curriculumElement.clickSaveCurriculum() */
			
		},
		
		
		
         createCurriculumWithTwoSectionOnewithmajoractivitiesAndAnotherWithSchduled:function(){
			 
			 this.curriculumBasicDetails();
			 
			 //Section 1
			this.createSection();
			this.createModule("1");
			browser.sleep(1000);
			this.moduleWithAllActivitiesAsMajor("1","1");
			browser.sleep(2000);
			this.sectionWithAllActivitiesAsMajor("1");
			browser.sleep(2000);
	
			
			//Section 2
			browser.executeScript('window.scrollTo(0,-100);');
			this.createSection();
			browser.executeScript('window.scrollTo(0,1200);');
			this.createModule("2");
			browser.sleep(1000);
			this.moduleWithAllActivitiesAsScheduled("2","1");
			browser.sleep(3000);
			browser.executeScript('window.scrollTo(0,1200);');
			this.sectionWithAllActivitiesAsScheduled("2");
			browser.sleep(500);
			
			browser.executeScript('window.scrollTo(0,-100);');
			curriculumElement.clickSaveCurriculum()
		 },

};