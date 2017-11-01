'use strict';

var curriculumPages = function(){
	var creatNewCurriculum = element(by.linkText("Create New"));
	var title = element(by.id("curriculumForm:titleId"));
	var duration = element(by.id("curriculumForm:durationId"));
	var addNewSection = element(by.id("curriculumForm:addNewSection"));
	var sectionTitle = element(by.id("curriculumForm:sectionTitleId"));
	var saveSection = element(by.id("curriculumForm:j_idt496"));
	var saveCurriculum = element(by.id("curriculumForm:saveCurriculumBtn"));
	
	//
	this.clickCreatNewCurriculum = function(){
		creatNewCurriculum.click();
	};
	
	this.enterCurriculumTitle = function(){
		title.sendKeys("testsd");
	};
	this.enterCurrilculumDuration = function(){
		duration.sendKeys("12");
	};
	this.clickAddNewSection = function(){
		
		addNewSection.click();
	};
	this.enterSectionTitle = function(){
		sectionTitle.sendKeys("testdata");
	};
	this.clickSaveSection=function(){
		saveSection.click();
	};
	this.clickSaveCurriculum=function() {
		saveCurriculum.click();
	
	};
	
};
module.exports=curriculumPages;