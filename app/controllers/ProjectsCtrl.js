"use strict";
app.controller("ProjectsCtrl", function($scope, $location, $rootScope){

  $scope.title = "coding projects";

  $scope.projects = [

    {
      "projectName": "Healthy Start",
      "repoLink": "https://github.com/complikatyed/HealthyStart",
      "url": "https://healthystart.firebaseapp.com/#/",
      "describe": "Angular-based resource app for non-profit Alignment Nashville. Provides information about stages of pregnancy & community resources available for pregnant teens.",
      "techs": [ "HTML/CSS", "Sass", "Gulp", "AngularJS", "JSON", "Firebase", "Bootstrap" ],
      "solo": true,
      "team": [],
      "img1": "https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HSHomePageWebSize.png",
      "img2": "https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HSHomePagePhoneSize.png",
      "img3": "https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HealthyStartResourcesList.png"
    },
    {
      "projectName": "Quizlytics",
      "repoLink": "https://github.com/complikatyed/quizlytics",
      "describe": "Ruby on Rails tracker for Hume-Fogg HS Quizbowl scoring",
      "techs": [ "HTML/CSS", "Sass", "Ruby", "Rails", "Bourbon.io" ],
      "solo": true,
      "team": "",
      "img1": "https://raw.github.com/complikatyed/quizlytics/master/app/assets/images/QZLWelcomeScreen.png?raw=true",
      "img2": "",
      "img3": ""
    },
    {
      "projectName": "Movie History",
      "repoLink": "https://github.com/complikatyed/Movie-History",
      "describe": "Group project for NSS E3 class using OMDB API and Firebase",
      "techs": [ "HTML", "CSS", "Sass", "Angular", "JSON", "Firebase", "Materialize" ],
      "solo": false,
      "team": [ "Tim Maddux", "Chris Barrett" ],
      "img1": "https://raw.githubusercontent.com/complikatyed/Movie-History/master/img/AlreadyWatchedMovies.png",
      "img2": "https://github.com/complikatyed/Movie-History/blob/master/img/SearchResults.png",
      "img3": "https://github.com/complikatyed/Movie-History/blob/master/img/UnwatchedMovies.png"
    },
  
    {
      "projectName": "Tic Taco",
      "repoLink": "https://github.com/complikatyed/complikatyed.github.io",
      "describe": "Group project for NSS C8 - two player Tic-Tac-Toe game",
      "techs": [ "HTML", "CSS", "Sass", "Gulp", "Angular", "JSON", "Firebase", "Materialize" ],
      "solo": false,
      "team": [ "Andy Meagher", "Margaret Clinard"],
      "img1": "https://raw.githubusercontent.com/complikatyed/TicTacToe/master/app/img/TicTaco1.png",
      "img2": "https://github.com/complikatyed/TicTacToe/blob/master/app/img/TicTaco2.png",
      "img3": "https://github.com/complikatyed/TicTacToe/blob/master/app/img/TicTaco3.png"
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
