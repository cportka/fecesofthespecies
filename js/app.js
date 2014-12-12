angular.module('feces-of-the-species', ['ngRoute', 'ngAnimate'])
    .config(breakroomRouter);

function breakroomRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/question1', {
            templateUrl: 'partials/question1.html'
        })
        .when('/question2', {
            templateUrl: 'partials/question2.html'
        })
        .when('/question3', {
            templateUrl: 'partials/question3.html'
        })
        .when('/question4', {
            templateUrl: 'partials/question4.html'
        })
        .when('/question5', {
            templateUrl: 'partials/question5.html'
        })
        .when('/results', {
            templateUrl: 'partials/results.html'
        })
}

function navController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}

var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var answer5 = "";

function answer1Input() {
    answer1 = document.getElementById("question1");
}

function answer2Input() {
    answer2 = document.getElementById("question2");
}

function answer3Input() {
    answer3 = document.getElementById("question3");
}

function answer4Input() {
    answer4 = document.getElementById("question4");
}

function answer5Input() {
    answer5 = document.getElementById("question5");
}