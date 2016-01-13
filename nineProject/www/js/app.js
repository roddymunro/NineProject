// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/app.html"
    })
    .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller:"LoginController"
    })

    .state('app.home', {
        url: "/home",
        views: {
            'appContent': {
                templateUrl: "templates/home.html",
                controller: "HomeController"
            }
        }
    })
    .state('app.help', {
        url: "/help",
        views: {
            'appContent': {
                templateUrl: "templates/help.html",
                controller: "HelpController"
            }
        }
    })
    .state('app.settings', {
        url: "/settings",
        views: {
            'appContent': {
                templateUrl: "templates/settings.html",
                controller: "SettingsController"
            }
        }
    })
    
    .state('app.settingsChange', {
        url: '/settings/:settingsId',
        views: {
            'tab-settings': {
                templateUrl: 'templates/settingsChange.html',
                controller: 'SettingsChangeController'
            }
        }
    })

    .state('app.applications', {
        url: "/applications",
        views: {
            'appContent': {
                templateUrl: "templates/applications.html",
                controller: "ApplicationsController"
            }
        }
    })
    .state('appInfo', {
        url: "/appinfo",
                templateUrl: "templates/appInfo.html",
           controller: "AppInfoController"
    })
    $urlRouterProvider.otherwise("/login");
})

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('AppController', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

