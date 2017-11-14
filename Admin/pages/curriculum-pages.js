'use strict';

var curriculumPages = function(){
	var creatNewCurriculum = element(by.xpath(".//*[@id='curriculumForm']/div/div[1]/div/a"));
	var title = element(by.id("curriculumForm:titleId"));
	var duration = element(by.id("curriculumForm:durationId"));
	var addNewSection = element(by.id("curriculumForm:addNewSection"));
	var sectionTitle = element(by.name("curriculumForm:sectionTitleId"));
	var saveSection = element(by.xpath("//*[@id='curriculumForm:sectionAddPanId']/div[2]/input"));
	var saveCurriculum = element(by.xpath(".//*[@id='curriculumForm:saveCurriculumBtn']"));
	
		
	var activityName = element(by.id("curriculumForm:activityTitleId"));
	var selectActvityType = element(by.xpath(".//*[@id='curriculumForm:activityTypeId']"));
	
	var selectQuiz = element(by.xpath("//*[@id='s2id_curriculumForm:selectActivityAsmt']/a/span[1]"));
	var enterquiz = element(by.xpath(".//*[@class='select2-results']/li[4]"));
	
	var selectVideo = element(by.xpath(".//*[@id='s2id_curriculumForm:selectActivityVideo']/a"));
	var enderVideo = element(by.xpath(".//*[@class='select2-results']/li[4]"));


	var quizHideDescription = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[1]/div[5]/div/div/input"));
	var referenceHideDescription = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[1]/div[4]/div/div/input"));
	var lectureHideDescription = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[1]/div[4]/div/div/input"));
	var assignmentHideDescription = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[1]/div[4]/div/div/input"));
	var gradingHideDescription = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[1]/div[4]/div/div/input"));
	var videoHideDescription = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[1]/div[5]/div/div/input"));
	var projectHideDescription = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[1]/div[4]/div/div/input"));
	
	var schedulingQuizButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[2]/div[1]/div/div/input"));
	var schduleReferenceButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[2]/div[1]/div/div/input"));
	var schedulingLectureButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[2]/div[1]/div/div/input"));
	var schedulingAssignmentButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[1]/div/div/input"));
	var schedulingGradingButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[1]/div/div/input"));
	var schedulingVideoButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[2]/div[1]/div/div/input"));
	var schedulingProjectButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[2]/div[1]/div/div/input"));
	
	
	var maximumpoint = element(by.name("curriculumForm:actGradingId"));
	var activityduration = element(by.id("curriculumForm:actDurationId"));
	
	var quizHiddenButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[1]/div/div/input"));
	var referenceHiddenButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[1]/div/div/input"));
	var lectureHiddenButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[1]/div/div/input"));
	var assignmentHiddenButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[5]/div[1]/div/div/input"));
	var gradingHiddenButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[4]/div[1]/div/div/input"));
	var videoHiddenButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[1]/div/div/input"));
	var projectHiddenButton = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[1]/div/div/input"));
	
	
	var quizMajor = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[2]/div/div/input"));
	var ReferenceMajor = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[2]/div/div/input"));
	var LectureMajor = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[2]/div/div/input"));
	var AssignmentMajor = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[5]/div[2]/div/div/input"));
	var gradeMajor = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[4]/div[2]/div/div/input"));
	var videoMajor = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[2]/div/div/input"));
	var projectMajor = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[3]/div[2]/div/div/input"));
	
	var saveActivity = element(by.xpath(".//*[@id='curriculumForm:saveActivityBtn']"));
	var submissionRequired = element(by.xpath(".//*[@id='curriculumForm:activityPanId']/div[1]/div[2]/fieldset[4]/div[1]/div/div/input"));
	var allowedFileType = element(by.xpath(".//*[@id='s2id_curriculumForm:req-arti-type']/ul"));
	var selectFileType = element(by.xpath(".//*[@class='select2-results']/li[1]"));
	
	var referenceArtifacts = element(by.xpath(".//*[@id='curriculumForm:addArtifactsBtn']/i"));
	var referenceArtifactsName = element(by.xpath(".//*[@id='curriculumForm:refNameID']")); 	
	var referenceAddTolist = element(by.xpath(".//*[@id='curriculumForm:attToTmpListBtn']")); 	
	var referenceAttachToActivity = element(by.xpath(".//*[@id='curriculumForm:refArtPush']")); 	
	
	var referenceUrlButton = element(by.xpath(".//*[@id='curriculumForm:addRefUrl']/i")); 
	var referenceUrlName = element(by.xpath(".//*[@id='curriculumForm:refURLNameID']")); 
	var referenceUrl = element(by.xpath(".//*[@id='curriculumForm:refUrl']")); 
	var referenceUrlAddTolist = element(by.xpath(".//*[@id='curriculumForm:attToTmpListBtn-url']")); 	
	var referenceUrlAttachToActivity = element(by.xpath(".//*[@id='curriculumForm:refURLPushBTNId']")); 
	
	
	var lectureReferenceVideo = element(by.xpath(".//*[@id='curriculumForm:addVideoBtn']"));
	var searchReferenceVideo = element(by.xpath(".//*[@id='curriculumForm:videoAddTblId_filter']/label/input"));
	var selectReferenceVideo = element(by.xpath(".//*[@id='curriculumForm:videoAddTblId']/tbody//tr[1]/td[4]/div"));
	var saveReferenceVideo = element(by.xpath(".//*[@id='curriculumForm:j_idt744']"));
	
	
	
	var moduleName = element(by.id("curriculumForm:moduleTitleId"));
	var moduleReuseableCheckBox = element(by.xpath(".//*[@id='curriculumForm:asd']/div/fieldset[1]/div[2]/div/div/input"));
	var moduleHideDescription = element(by.xpath(".//*[@id='curriculumForm:asd']/div/fieldset[1]/div[5]/div/div/input"));
	var moduleSchedule	= element(by.xpath(".//*[@id='curriculumForm:asd']/div/fieldset[2]/div[1]/div/div/input"));
	var moduleDuration = element(by.id("curriculumForm:moduleDurationId"));
	var moduleHidden = element(by.xpath(".//*[@id='curriculumForm:asd']/div/fieldset[3]/div/div/div/input"));
	var moduleSave = element(by.xpath("//*[@id='curriculumForm:asd2']/div/input"));

	
	
	
	
	this.clickAddModule = function(no){
	element(by.xpath("//*[@class='dd dd-draghandle cur-tree-width']/ol/li["+no+"]/div[2]/div/a[1]")).click();
	};
	this.enterModuleName = function(moduleNames){
		moduleName.sendKeys(moduleNames);
	};
	
	this.clickModuleReuseableCheckBox = function(){
		moduleReuseableCheckBox.click();
	};
	this.clickModuleHideDescription= function(){
		moduleHideDescription.click();
	};
	this.clickModuleSchedule= function(){
		moduleSchedule.click();
	};
	this.entermoduleDuration = function(){
		moduleDuration.sendKeys("2");
	};
	this.clickModuleHidden= function(){
		moduleHidden.click();
	};
	this.clickModuleSave= function(){
		moduleSave.click();
	};
	this.clickAddActivityinmodule = function(secno,modno){
		
		element(by.xpath("//*[@class='dd dd-draghandle cur-tree-width']/ol/li["+secno+"]/ol/li["+modno+"]/div[2]/div/a[1]")).click();;
		//element(by.xpath("html/body/div[2]/div[2]/div/form/div/div[3]/div[1]/span/span/div/div/div[3]/div/ol/li/ol/li["+no+"]/div[2]/div/a[1]")).click();
	};
	
	
	
	this.clickLectureReferenceVideo = function(){
		lectureReferenceVideo.click();
	};
	this.entersearchReferenceVideo = function(){
		searchReferenceVideo.sendKeys("ADO.NET - Data Providers ");
	};
	this.clickSelectReferenceVideo = function(){
		selectReferenceVideo.click();
	};
	this.clickSaveReferenceVideo = function(){
		saveReferenceVideo.click();
	};
	
	
	this.clickCreatNewCurriculum = function(){
		creatNewCurriculum.click();
	};
	
	this.enterCurriculumTitle = function(curriculumtitle){
		title.sendKeys(curriculumtitle);
	};
	this.enterCurrilculumDuration = function(){
		duration.sendKeys("12");
	};
	this.clickAddNewSection = function(){
		
		addNewSection.click();
	};
	this.enterSectionTitle = function(sectionname){
		sectionTitle.sendKeys(sectionname);
	};
	this.clickSaveSection=function(){
		saveSection.click();
	};
	this.clickSaveCurriculum=function() {
		saveCurriculum.click();
	};
	this.clickAddSectionActivity = function(no){
		element(by.xpath("//*[@class='dd dd-draghandle cur-tree-width']/ol/li["+no+"]/div[2]/div/a[2]")).click();
	};
	this.enterActivityName=function(activityname){
		activityName.sendKeys(activityname);
	};
	this.selectActivityType = function(activitytype){
		selectActvityType.$('[value =\"'+activitytype+'\"]').click();
	};
	this.clickSelectQuiz = function(){
		selectQuiz.click();
	};
	this.enterquizname=function(no){
		//enterquiz.sendKeys("1707 - Information Security",protractor.Key.ENTER);
		enterquiz.click();
		//browser.element(by.xpath(".//*[@class='select2-results']/li["+no+"]"));
	};
	
	this.ClickSelectVideo=function(){
		selectVideo.click();
	};
	this.enterVideoName=function(no){
		//browser.element(by.xpath(".//*[@class='select2-results']/li["+no+"]"));
		enderVideo.click();
		//enderVideo.sendKeys("Angular 2 - Architecture",protractor.Key.ENTER);
	};
	
	this.enterMaximumpoint=function(){
		maximumpoint.sendKeys("8");
	};
	this.enterActivityduration=function(){
		activityduration.sendKeys("8");
	};
	
	this.clickSaveActivity=function(){
		saveActivity.click();
	};
	this.clickSubmissionRequired=function(){
		submissionRequired.click();
	};
	this.enterAllowedFileType=function(){
				allowedFileType.click();
				selectFileType.click();
				
		//allowedFileType.sendKeys("rar",protractor.Key.ENTER);
	};
	this.clickAddReferenceArtifacts = function(){
		referenceArtifacts.click();
	};
	this.enterReferenceArtifactsName=function(){
		referenceArtifactsName.sendKeys("reference artifact");
	};
	this.clickReferenceAddTolist = function(){
		referenceAddTolist.click();
	};
	this.clickReferenceAttachToActivity = function(){
		referenceAttachToActivity.click();
	};
	this.clickAddReferenceUrlButton = function(){
		referenceUrlButton.click();
	};
	this.enterReferenceUrlName=function(){
		referenceUrlName.sendKeys("reference Url");
	};
	this.enterReferenceUrl=function(){
		referenceUrl.sendKeys("https://google.com");
	};
	this.clickReferenceUrlAddTolist = function(){
		referenceUrlAddTolist.click();
	};
	this.clickReferenceUrlAttachToActivity = function(){
		referenceUrlAttachToActivity.click();
	};
	
	
	//hide description
	this.clickQuizHideDescription=function(){
		quizHideDescription.click();
	};
	this.clickReferenceHideDescription=function(){
		referenceHideDescription.click();
	};
	this.clickLectureHideDescription=function(){
		lectureHideDescription.click();
	};
	this.clickAssignmentHideDescription=function(){
		assignmentHideDescription.click();
	};
	this.clickGradingHideDescription=function(){
		gradingHideDescription.click();
	};
	this.clickVideoHideDescription=function(){
		videoHideDescription.click();
	};
		this.clickProjectHideDescription=function(){
		projectHideDescription.click();
	};
	
	
	//schdueling 
	this.enableQuizScheduling=function(){
		schedulingQuizButton.click();
	};
	this.enableReferenceScheduling=function(){
		schduleReferenceButton.click();
	};
	this.enableLectureScheduling=function(){
		schedulingLectureButton.click();
	};
	this.enableAssignmentScheduling=function(){
		schedulingAssignmentButton.click();
	};
	this.enableGradingScheduling=function(){
		schedulingGradingButton.click();
	};
	this.enableVideoScheduling=function(){
		schedulingVideoButton.click();
	};
	this.enableProjectScheduling=function(){
		schedulingProjectButton.click();
	};
	
	
	
	
	//activity hide 
	
	this.clickQuizHiddenButton=function(){
		quizHiddenButton.click();
	};
	this.clickReferenceHiddenButton=function(){
		referenceHiddenButton.click();
	};
	this.clickLectureHiddenButton=function(){
		lectureHiddenButton.click();
	};
	this.clickAssignmentHiddenButton=function(){
		assignmentHiddenButton.click();
	};
	this.clickGradeHiddenButton=function(){
		gradingHiddenButton.click();
	};
	this.clickvideoHiddenButton=function(){
		videoHiddenButton.click();
	};
	this.clickProjectHiddenButton=function(){
		projectHiddenButton.click();
	};
	
	
	//major
	this.clickQuizMajor=function(){
		quizMajor.click();
	};
	this.clickReferenceMajor=function(){
		ReferenceMajor.click();
	};
	this.clickLectureMajor=function(){
		LectureMajor.click();
	};
	this.clickLAssignmentMajor=function(){
		AssignmentMajor.click();
	};
	this.clickLGradeMajor=function(){
		gradeMajor.click();
	};
	this.clickLvideoMajor=function(){
		videoMajor.click();
	};
	this.clickLProjectMajor=function(){
		projectMajor.click();
	};
	
	
	
	
};
module.exports=curriculumPages;