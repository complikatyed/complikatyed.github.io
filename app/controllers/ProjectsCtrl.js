"use strict";
app.controller("ProjectsCtrl", function($scope, $location, $rootScope){

  $scope.title = "coding projects";

  $scope.projects = [

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
    },
    {
      "projectName": "ng-Address",
      "repoLink": "https://github.com/complikatyed/ng-address-app",
      "describe": "Angular-based address book using Materialize for styling",
      "techs": [ "HTML", "CSS", "Sass", "Angular", "JSON", "Firebase", "Materialize" ],
      "solo": true,
      "team": "",
      "img1": "https://raw.githubusercontent.com/complikatyed/TicTacToe/master/app/img/TicTaco2.png",
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
      "projectName": "Movie History",
      "repoLink": "https://github.com/complikatyed/Movie-History",
      "describe": "Group project for NSS E3 class using OMDB API and Firebase",
      "techs": [ "HTML", "CSS", "Sass", "Ruby", "Rails", "Firebase", "Materialize" ],
      "solo": false,
      "team": [ "Tim Maddux", "Chris Barrett" ],
      "img1": "https://raw.githubusercontent.com/complikatyed/Movie-History/master/img/SearchResults.png",
      "img2": "https://github.com/complikatyed/Movie-History/blob/master/img/SearchResults.png",
      "img3": "https://github.com/complikatyed/Movie-History/blob/master/img/UnwatchedMovies.png"
    },
        {
      "projectName": "Movie History",
      "repoLink": "https://github.com/complikatyed/Movie-History",
      "describe": "Group project for NSS E3 class using OMDB API and Firebase",
      "techs": [ "HTML", "CSS", "Sass", "Ruby", "Firebase", "Bootstrap" ],
      "solo": false,
      "team": [ "Tim Maddux", "Chris Barrett" ],
      "img1": "https://raw.githubusercontent.com/complikatyed/Movie-History/master/img/UnwatchedMovies.png",
      "img2": "https://github.com/complikatyed/Movie-History/blob/master/img/SearchResults.png",
      "img3": "https://github.com/complikatyed/Movie-History/blob/master/img/UnwatchedMovies.png"
    }
  ];

});
