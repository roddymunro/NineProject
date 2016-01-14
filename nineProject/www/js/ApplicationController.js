//This file includes the appService
myApp.controller("ApplicationsController", function ($scope, appService) {
    $scope.setApp = function(val) {
        appService.selectedApp = val;
        console.log(val.id);
    }
    $scope.getApps = function () {
        $(function () {
            console.log("Before");
            $.getJSON('http://3s.alexogden.com:8080/api/apps', function (data) {
                $scope.items = data.Apps;
                for (var i = 0; i < $scope.items.length; i++) {
                    switch (data.Apps[i].os) {
                        case 0: $scope.items[i].os = "Android"
                            break;
                        case 1: $scope.items[i].os = "iOS"
                            break;
                        case 2: $scope.items[i].os = "Universal"
                            break;
                    }
                    switch (data.Apps[i].beta) {
                        case 0: $scope.items[i].beta = null
                            break;
                        case 1: $scope.items[i].beta = "BETA"
                            break;
                    }
                }
                console.log(data);
            });
        });
    }
    $scope.items = [];
    $scope.getApps();

})
myApp.service('appService',function(){
    this.selectedApp;
})