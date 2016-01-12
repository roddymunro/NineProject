// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
.controller("HomeController", function ($scope) {

})
.controller("HelpController", function ($scope) {
})
.controller("LoginController", function ($scope) {

})
.controller("ApplicationsController", function ($scope,appService) {
    $scope.setApp = function(val) {
        appService.selectedApp = val;
        console.log(val.id);
    }
      $scope.items = [
      { id: 1, name: "Test 1", version:"1.5.0", os:"Android", minVersion:"1.0.0", info:"Testing Info 1 asdkjsakd aksjdkjsad jsak jdkajs kjksajdlksajdkjslkdjskj sj kjk jskjd lkaj ks jkasj kjakjd kajs lkdjks jdlkjsd kjak jkdajkasjdk jakdjks jdksajd kjaksd jksaj kjsa kdjaks jdksjkd jlksjd kasjdk saj kjsak jdksajdk ajskd jskdj ksjdk jaks jdksa dkjsakd jsakd ksd jsakl jdksajd kajs kdjksal jdkljsa lkdjsak jdlksaj lk", img:"https://pbs.twimg.com/profile_images/439413087125262337/gbVypxfN_400x400.jpeg" },
      { id: 2, name: "Test 2", version: "1.2.3", os: "iOS", minVersion: "1.0.0", info: "Testing Info 2", img: "http://www.newton.ac.uk/files/covers/968361.jpg" },
      { id: 3, name: "Test 3", version: "4.5.3", os: "iOS", minVersion: "1.0.0", info: "Testing Info 3", img: "http://www.wills-eps.co.uk/wp-content/uploads/2010/09/random-phases.jpg" },
      { id: 4, name: "Test 4", version: "2.0.0", os: "Android", minVersion: "1.0.0", info: "Testing Info 4", img: "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg" },
      { id: 5, name: "Test 5", version: "1.0.0", os: "Android", minVersion: "1.0.0", info: "Testing Info 5", img: "http://randomrab.com/wp-content/uploads/2015/05/thumpimage.jpg" },
      { id: 6, name: "Test 6", version: "1.3.0", os: "iOS", minVersion: "1.0.0", info: "Testing Info 6", img: "https://pbs.twimg.com/profile_images/1584407225/RElogo.png" },
      { id: 7, name: "Test 7", version: "1.9.0", os: "Android", minVersion: "1.0.0", info: "Testing Info 7", img: "https://www.math.ubc.ca/~holroyd/sort/pen2.gif" },
      { id: 8, name: "Test 8", version: "4.7.2", os: "iOS", minVersion: "1.0.0", info: "Testing Info 8", img: "http://www.myteenagewerewolf.com/home/lauren/public_html/wp-content/uploads/2010/03/random-colors.jpg" },
      { id: 9, name: "Test 9", version: "1.5.0", os: "Android", minVersion: "1.0.0", info: "Testing Info 9", img: "http://3.bp.blogspot.com/-2FQqVxwZC80/Us3v9bCuyMI/AAAAAAAAjKU/MJVCOh_MuPY/s1600/picker.png" },
      { id: 10, name: "Test 10", version: "1.0.4", os: "iOS", minVersion: "1.0.0", info: "Testing Info 10", img: "http://cdn.instructables.com/F1L/P9CS/H5E9PXSS/F1LP9CSH5E9PXSS.SQUARE3.jpg" },
      { id: 11, name: "Test 11", version: "2.3.0", os: "iOS", minVersion: "1.0.0", info: "Testing Info 11", img: "https://pbs.twimg.com/profile_images/378800000138581024/9733bcb490d916fcd2feb5d0abef0cbc_400x400.jpeg" }
      ];
      

})
.service('appService',function(){
    this.selectedApp;
})
.controller("AppInfoController", function ($scope,appService) {
    $scope.appService = appService;

})
.controller("MenuController", function ($scope) {

    $scope.data = {
        menu_items: []
    };
    $scope.menu_items_url = ["app.home", "app.applications", "app.help", "contact", "login"];
    $scope.data.menu_items.push({
        id: 0,
        label: "HOME"
    })
    $scope.data.menu_items.push({
        id: 1,
        label: "MY APPLICATIONS"
    })
    $scope.data.menu_items.push({
        id: 2,
        label: "HELP"
    })
    $scope.data.menu_items.push({
        id: 3,
        label: "CONTACT"
    })
    $scope.data.menu_items.push({
        id: 4,
        label: "LOG OUT"
    })

})
