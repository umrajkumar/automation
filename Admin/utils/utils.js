'use strict';
var fs = require('fs');
var obj = {
    interns: {
        inActiveInterns: [],
        activeInterns: []
    }
};
module.exports = {
	
	getRandomNumber : function(size) {
		return Math.floor((Math.random() * size));
	},
	
	getRandomNumberFromRange : function(start, end) {
		return Math.ceil(start - 1 + (Math.random() * (end - start + 1)));
	},
	
	getRandomString : function(length, chars) {
		var result = '';
		for (var i = length; i > 0; --i)
			result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	},
	
	getRandomMobileNumber: function(length){
	      return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
	    },
	    
	getTimeStamp : function() {
		var d = new Date();
		var timeStamp = d.getTime();
		return timeStamp;
	},
	
	getRandomProfileNamewithspecialcharcter : function() {
		var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_-");
		var uniqueValue = this.getTimeStamp().toString();
		var randomProfileNamewithspecialcharcter = (stringValue + uniqueValue);
		return randomProfileNamewithspecialcharcter;
	},
    getRandomProfileName : function() {
        var stringValue1 = this
            .getRandomString(5,
                "abcdefghijklmnopqrstuvwxyz1234567890");
        var stringValue2 = this
            .getRandomString(5,
                "abcdefghijklmnopqrstuvwxyz1234567890");
        var uniqueValue = this.getTimeStamp().toString();
        var randomProfileName = (stringValue1 + uniqueValue + stringValue2);
        return randomProfileName;
    },
	
    getRandomPortfolioName : function() {
        var stringValue = this
            .getRandomString(8,
                "abcdefghijklmnopqrstuvwxyz1234567890");
        var uniqueValue = this.getTimeStamp().toString();
        var randomPortfolioName = (stringValue + uniqueValue);
        return randomPortfolioName;
    },

    getRandomEmail: function () {
        var randomEmail = (this.getRandomProfileName() + "@yopmail.com");
        return randomEmail;
    },

    getRandomSecondaryEmail: function () {
        var randomEmail = (this.getRandomProfileName() + "@mailinator.com");
        return randomEmail;
    },

    setInactiveInternData: function (username, password, status) {
        fs.readFile('./test-data/intern-data.json', 'utf8',

            function (err, content) {
                if (err) {
                    obj.interns.inActiveInterns.push([{
                        "username": username,
                        "password": password,
                        "status": status
                    }]);
                    var json = JSON.stringify(obj);
                    fs.writeFile('./test-data/intern-data.json', json,'utf8');
                    console.log("the file has been created");
                    console.log(err);
                } else {
                    obj = JSON.parse(content)
                    obj.interns.inActiveInterns.push({
                        "username": username,
                        "password": password,
                        "status": status
                    });
                    var json = JSON.stringify(obj);
                    fs.writeFile('./test-data/intern-data.json', json,'utf8');
                    console.log("the file has been updated");
                }
            });

    },

    /*setActiveInternData : function(username, password, status) {

        fs.readFile('./test-data/intern-data.json', 'utf8',
                function(err, content) {
                    if (err) {
                        obj.interns.activeInterns.push([ {
                            "username" : username,
                            "password" : password,
                            "status" : status
                        } ]);
                        var json = JSON.stringify(obj);
                        fs.writeFile('./test-data/intern-data.json', json,'utf8');
                        console.log("the file has been created");
                        console.log(err);
                    } else {
                        obj = JSON.parse(content)
                        obj.interns.activeInterns.push({
                            "username" : username,
                            "password" : password,
                            "status" : status
                        });
                        var json = JSON.stringify(obj);
                        fs.writeFile('./test-data/intern-data.json', json,'utf8');
                        console.log("the file has been updated");
                    }
                });*/
    setActiveInternData: function (username, password, status) {
 fs.readFile('./test-data/intern-data.json', 'utf8',
            function (err, content) {
                if (err) {
                    obj.interns.activeInterns.push([{
                        "username": username,
                        "password": password,
                        "status": status
                    }]);
                    var json = JSON.stringify(obj);
                    fs.writeFile('./test-data/intern-data.json', json,'utf8');
                    console.log("the file has been created");
                    console.log(err);
                } else {
                    obj = JSON.parse(content)
                    obj.interns.activeInterns.push({
                        "username": username,
                        "password": password,
                        "status": status
                    });
                    var json = JSON.stringify(obj);
                    fs.writeFile('./test-data/interns.json', json,'utf8');
                    console.log("the file has been updated");
                }
            });
    },

getRandomAttachment: function (count) {
        var n = Math.floor(Math.random() * count);
        if (n == 2) n++;
        return n;
    },
getRandomOrgName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_-");
		var uniqueValue = "organisation";
		var randomorgnisationname = (stringValue + uniqueValue);
		return randomorgnisationname;
	
},
getRandomAliasName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_-");
		var uniqueValue = "Alias";
		var randomoAliasname = (stringValue + uniqueValue);
		return randomoAliasname;
	
},
getRandomDomainName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = ".com";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomSectionName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Section";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomModuleName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Module";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomCurriculumName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "curriculum";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomQuizName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "quiz";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomLectureName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Lecture";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomReferenceName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Reference";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomAssignmentName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Assignment";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomVideoName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Video";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomProjectName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Project";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},
getRandomGradingName : function(){
	var stringValue = this
				.getRandomString(7,
						"abcdefghijklmnopqrstuvwxyz1234567890");
		var uniqueValue = "Grading";
		var randomodomainname = (stringValue + uniqueValue);
		return randomodomainname;
	
},

}
