"use strict";
app.controller("ProjectsCtrl", function($scope, $location, $rootScope){

  $scope.title = "coding projects";

  $scope.projects = [

    {
      "projectName": "Healthy Start",
      "repoLink": "https://github.com/complikatyed/HealthyStart",
      "url": "https://healthystart.firebaseapp.com/#/",
      "describe": "Angular-based resource app for Alignment Nashville. Provides information about stages of pregnancy & community resources available for pregnant teens.",
      "techs": [ "HTML", "CSS", "Sass", "Gulp", "AngularJS", "JSON", "Firebase", "Bootstrap" ],
      "solo": "./img/solo.png",
      "team": [],
      "img1": "https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HSHomePageWebSize.png",
      "img2": "https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HSHomePagePhoneSize.png",
      "img3": "https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HealthyStartResourcesList.png"
    },
    {
      "projectName": "Quizlytics",
      "repoLink": "https://github.com/complikatyed/quizlytics",
      "describe": "Ruby on Rails tracker for Hume-Fogg HS Quizbowl scoring",
      "techs": [ "HTML", "CSS", "Sass", "Ruby", "Rails", "Bourbon.io" ],
      "solo": "./img/solo.png",
      "team": "",
      "img1": "https://raw.github.com/complikatyed/quizlytics/master/app/assets/images/QZLWelcomeScreen.png?raw=true",
      "img2": "https://raw.githubusercontent.com/complikatyed/quizlytics/master/app/assets/images/QZLOptionsScreen.png",
      "img3": ""
    },
    {
      "projectName": "Agape Ladies Class",
      "repoLink": "https://github.com/complikatyed/AgapeLadies",
      "describe": "Site for Agape Ladies' Sunday School class at Brentwood Baptist church.",
      "techs": [ "HTML", "CSS", "Sass", "Ruby", "Rails", "Bourbon.io", "Neat", "Bitters" ],
      "solo": "./img/solo.png",
      "team": "",
      "img1": "https://github.com/complikatyed/AgapeLadies/blob/master/app/assets/images/AgapeHome.png?raw=true",
      "img2": "https://github.com/complikatyed/AgapeLadies/blob/master/app/assets/images/AgapeShowPrayers1.png?raw=true",
      "img3": ""
    },
    {
      "projectName": "Movie History",
      "repoLink": "https://github.com/complikatyed/Movie-History",
      "describe": "Group project for NSS E3 class using OMDB API and Firebase",
      "techs": [ "HTML", "CSS", "Sass", "Angular", "JSON", "Firebase", "Materialize" ],
      "solo": "./img/group.png",
      "team": [ "Tim Maddux", "Chris Barrett" ],
      "img1": "https://raw.githubusercontent.com/complikatyed/Movie-History/master/img/AlreadyWatchedMovies.png",
      "img2": "https://github.com/complikatyed/Movie-History/blob/master/img/SearchResults.png?raw=true",
      "img3": "https://github.com/complikatyed/Movie-History/blob/master/img/UnwatchedMovies.png"
    },
    {
      "projectName": "Tic Taco",
      "repoLink": "https://github.com/complikatyed/complikatyed.github.io",
      "describe": "Group project for NSS C8 - two player Tic-Tac-Toe game",
      "techs": [ "HTML", "CSS", "Sass", "Gulp", "Angular", "JSON", "Firebase", "Materialize" ],
      "solo": "./img/group.png",
      "team": [ "Andy Meagher", "Margaret Clinard"],
      "img1": "https://raw.githubusercontent.com/complikatyed/TicTacToe/master/app/img/TicTaco1.png",
      "img2": "https://github.com/complikatyed/TicTacToe/raw/master/app/img/TicTaco2.png",
      "img3": "https://github.com/complikatyed/TicTacToe/blob/master/app/img/TicTaco3.png"
    },
    {
      "projectName": "ACME Explosives",
      "repoLink": "https://github.com/complikatyed/modern-js-development/tree/master/acme-explosives",
      "describe": "Uses promises to call data from three json files and outputs product data based on customer's request from dropdown menu",
      "techs": [ "HTML", "CSS", "JavaScript", "JSON", "Bootstrap" ],
      "solo": "./img/solo.png",
      "team": "",
      "img1": "https://raw.githubusercontent.com/complikatyed/modern-js-development/master/images/AcmeExplosives.png",
      "img2": "https://github.com/complikatyed/modern-js-development/blob/master/images/ACME2.png?raw=true",
      "img3": ""
    },
    {
      "projectName": "Simple Calculator",
      "repoLink": "https://github.com/complikatyed/simple-calculator-milestone-1-quiz-complikatyed",
      "describe": "Simple calculator written in C# using Visual Studio",
      "techs": [ "C#", "Visual Studio" ],
      "solo": "./img/solo.png",
      "team": "",
      "img1": "https://github.com/complikatyed/simple-calculator-milestone-1-quiz-complikatyed/blob/master/SimpleCalc1.png?raw=true",
      "img2": "https://github.com/complikatyed/simple-calculator-milestone-1-quiz-complikatyed/blob/master/SimpleCalc2.png?raw=true",
      "img3": ""
    },
    {
      "projectName": "Chatty",
      "repoLink": "https://github.com/complikatyed/Chatty-group-project",
      "describe": "Messaging app using JSON and JavaScript Promises",
      "techs": [ "HTML", "CSS", "JavaScript", "JSON", "Bootstrap" ],
      "solo": "./img/group.png",
      "team": [ "Bradley Guthrie", "Scott Schaffer" ],
      "img1": "https://github.com/complikatyed/Chatty-group-project/blob/master/Chatty1.png?raw=true",
      "img2": "https://github.com/complikatyed/Chatty-group-project/blob/master/Chatty4.png?raw=true",
      "img3": ""
    },
    {
      "projectName": "Gauntlet",
      "repoLink": "https://github.com/complikatyed/gauntlet",
      "describe": "Group-created battle game using jQuery",
      "techs": [ "HTML", "CSS", "jQuery" ],
      "solo": "./img/group.png",
      "team": ["David Cramb", "Sandy Jones"],
      "img1": "https://github.com/complikatyed/gauntlet/blob/master/Gauntlet5.png?raw=true",
      "img2": "https://github.com/complikatyed/gauntlet/blob/master/GauntletTrello3.png?raw=true",
      "img3": ""
    },
    {
      "projectName": "WYSIWYG JS Quiz",
      "repoLink": "https://github.com/complikatyed/single-page-applications/tree/master/wysiwyg",
      "describe": "JavaScript quiz using dynamic event listeners to control changes to both HTML and CSS",
      "techs": [ "HTML", "CSS", "JavaScript" ],
      "solo": "./img/solo.png",
      "team": "",
      "img1": "https://raw.githubusercontent.com/complikatyed/single-page-applications/master/images/WYSIWYG.png",
      "img2": "",
      "img3": ""
    },
    {
      "projectName": "Portfolio 2016",
      "repoLink": "https://github.com/complikatyed/complikatyed.github.io",
      "describe": "Updated portfolio site using AngularJS and hosted via GitHub Pages",
      "techs": [ "HTML", "CSS", "Sass", "Gulp", "Materialize" ],
      "solo": "./img/solo.png",
      "team": "",
      "img1": "https://github.com/complikatyed/complikatyed.github.io/blob/master/img/Screenshot%202016-09-23%2012.59.57.png?raw=true",
      "img2": "",
      "img3": ""
    },
    {
      "projectName": "Music History",
      "repoLink": "https://github.com/complikatyed/musicHistory",
      "describe": "Base front-end project for NSS with many iterations/refactors",
      "techs": [ "HTML", "CSS", "JavaScript", "jQuery", "Gulp", "Sass" ],
      "solo": "./img/solo.png",
      "team": "",
      "img1": "https://github.com/complikatyed/musicHistory/blob/master/Screenshot%202016-09-23%2013.14.31.png?raw=true",
      "img2": "https://github.com/complikatyed/musicHistory/blob/master/Screenshot%202016-09-23%2013.15.44.png?raw=true",
      "img3": "https://github.com/complikatyed/musicHistory/blob/master/Screenshot%202016-09-23%2013.15.55.png?raw=true"
    }

  ];

  $scope.icons = [
    {
      "techName": "Gulp",
      "techIcon": "https://github.com/complikatyed/nss-cohort-8.github.io/blob/master/images/logos/gulp_logo_words.png?raw=true"
    },
    {
      "techName": "JavaScript",
      "techIcon": "https://github.com/complikatyed/nss-cohort-8.github.io/blob/master/images/logos/javascript_logo.png?raw=true"
    },
    {
      "techName": "Firebase",
      "techIcon": "https://github.com/complikatyed/nss-cohort-8.github.io/blob/master/images/logos/firebase_logo.png?raw=true"
    },
    {
      "techName": "Ruby",
      "techIcon": "https://github.com/complikatyed/nss-cohort-8.github.io/blob/master/images/logos/ruby_logo_words.png?raw=true"
    }

  ];

});
