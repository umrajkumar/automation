'use strict';
var organizationCreationPage=function(){

	var addOrganisationButton = element(by.xpath(".//*[@id='organizationForm']/div/div[1]/div/a"));
	var organizationName = element(by.id("organizationForm:nameId"));
	var organizationAlisName = element(by.id("organizationForm:aliasNameId"));
	var  academicPartner = element(by.id("organizationForm:typeId"));
    var  salesForceCode = element(by.id("organizationForm:sfAccountsId"));
	var  enableSalesSync = element(by.id("organizationForm:salesforceSyncId"));
	var  subscribeContent  = element(by.id("organizationForm:subsCnt"));
	var  activationCodeTab  = element(by.linkText("Activation Codes"));
	var  addActivationCode  = element(by.id("organizationForm:createCouponBtnId"));
	var  activationCodeField  = element(by.id("organizationForm:couponCodeId"));
	var  validFromDate  = element(by.id("organizationForm:couponValidFromId"));
	var  fromDateInCalender =  element(by.xpath(".//td[@class='today day']"));
	var  fromateInCalender =  element(by.xpath(".//td[@class='today day']"));
	var  validToDate  = element(by.id("organizationForm:couponValidToId"));
	var  nextMonth =  element(by.xpath("//table[@class=' table-condensed']/thead/tr[1]/th[3]"));
	var  toDateInCalender =  element(by.xpath("//table[@class=' table-condensed']/tbody/tr[3]/td[3]"));
	var  saveActivationCodeButton  = element(by.id("organizationForm:saveCouponBtnId"));
	var  domainTab  = element(by.linkText("Domains"));
	var  domainName  = element(by.id("organizationForm:domainId"));
	var  saveDomainButton  = element(by.id("organizationForm:saveDomainBtnId"));
	var  saveOrgButton  = element(by.id("organizationForm:saveBtn"));
	var  allContentCheckBox  = element(by.id("organizationForm:allCnt"));
	var  allVideoCheckBox  = element(by.id("organizationForm:allVidId"));
	var  allQuestionCheckBox  = element(by.id("organizationForm:allQsnId"));
	var selectProjectButton = element(by.className("pq-select-text")); 
	var searchProject = element(by.xpath(".//*[@id='eIntern-admin-UI-body']/div[7]/div[1]/div[1]/div/input"));
	var courseName = element(by.xpath(".//*[@id='organizationForm:specificCntSubsPanId']/div[2]/div[1]/label"));
	var selectcourseButton = element(by.xpath(".//*[@id='organizationForm:specificCntSubsPanId']/div[2]/div[2]/div/div")); 
	var searchCourse = element(by.xpath(".//*[@id='eIntern-admin-UI-body']/div[8]/div[1]/div[1]/div/input"));
	var quizName = element(by.xpath(".//*[@id='organizationForm:specificCntSubsPanId']/div[3]/div[1]/label"));
	var selectQuizButton = element(by.xpath(".//*[@id='organizationForm:specificCntSubsPanId']/div[3]/div[2]/div/div")); 
	var searchQuiz = element(by.xpath(".//*[@id='eIntern-admin-UI-body']/div[9]/div[1]/div[1]/div/input"));
	var orgCreationsMessage = element(by.id("organizationForm:msgId"));
	var orgActivationcodeMessage = element (by.id("organizationForm:CouponMsgId"));

		
    this.clickAddOrganisationButton = function(){
	 addOrganisationButton.click();
	};	
    this.enterorganizationName = function(orgname){
		 organizationName.sendKeys(orgname);
	};
	 this.enterorganizationAlisName = function(alisname){
		 organizationAlisName.sendKeys(alisname);
	};
	
	this.selectAcademicPartner = function(){
		academicPartner.$('[value="Academic Partner"]').click();
	};
	this.enterSalesForceCode = function(salcode){
		salesForceCode.sendKeys(salcode);
	};
	
	this.clickenableSalesSync = function(){
	 enableSalesSync.click();
	};
	this.clickSubscribeContent = function(){
	 subscribeContent.click();
	};
	this.clickactivationCodeTab = function(){
	 activationCodeTab.click();
	};
	
	this.clickAddActivationCode = function(){
	 addActivationCode.click();
	};
	this.enterActivationCodeField = function(){
		activationCodeField.sendKeys('12345');
	};
	this.selectValidFromDate = function(){
	 validFromDate.click();
	 fromDateInCalender.click();
	 
	};
	this.selectValidToDate = function(){
	 validToDate.click();
	 nextMonth.click();
	 toDateInCalender.click();
	 };
	this.clickSaveActivationCodeButton = function(){
	 saveActivationCodeButton.click();
	};
	
	this.clickDomainTab = function(){
	 domainTab.click();
	};
	this.enterDomainName = function(domain){
		domainName.sendKeys(domain);
	};
	this.clicksaveDomainButton = function(){
	 saveDomainButton.click();
	};
	this.clickSaveOrgButton = function(){
	 saveOrgButton.click();
	};
	this.unCheckallContentCheckBox = function(){
	 allContentCheckBox.click();
	};
	this.unCheckallVideoCheckBox = function(){
	 allVideoCheckBox.click();
	};
	this.unCheckallQuestionCheckBox = function(){
	 allQuestionCheckBox.click();
	};
	this.clickSelectProjectButton = function(){
	 selectProjectButton.click();
	};
	this.enterSearchProject = function(projectname){
	 searchProject.sendKeys(projectname,protractor.Key.ENTER);
	};
	this.clickCourseName = function(){
		courseName.click();
	};
	this.clickSelectcourseButton = function(){
		selectcourseButton.click();
	};
	this.enterSearchCourse = function(coursenames){
	 searchCourse.sendKeys(coursenames,protractor.Key.ENTER);
	};
	this.clickQuizName = function(){
		quizName.click();
	};
	this.clickSelectQuizButton = function(){
		selectQuizButton.click();
	};
	this.enterSearchQuiz = function(quiznames){
	 searchQuiz.sendKeys(quiznames,protractor.Key.ENTER);
	};
	this.getOrgCreationsMessage = function(){
		return orgCreationsMessage.getText();
	};
	this.getOrgActivationcodeMessage = function(){
		return orgActivationcodeMessage.getText();
	};
	
	
	
};
module.exports=organizationCreationPage;

 
 	

