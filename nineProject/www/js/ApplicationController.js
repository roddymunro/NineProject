//This file includes the appService
myApp.service('appService', function () {
    this.selectedApp;
})
myApp.controller("ApplicationsController", function ($scope, appService) {
    $scope.items;
    $scope.callcomplete;
    $scope.getApps = function () {
        $(function () {
            console.log("Before");
            myURL = "http://3s.alexogden.com:8080/api/apps";
            $.ajax({
                url: myURL,
                type: 'GET',
                dataType: 'json',
                success: function (data) { console.log(data); $scope.items = data.Apps; $scope.callcomplete = "success";},
                error: function () { $scope.callcomplete = "error"; },
                beforeSend: setHeader,
                complete: function () {
                    console.log("COMPLETE");
                    for (var i = 0; i < $scope.items.length; i++) {
                        switch ($scope.items[i].os) {
                            case 0: $scope.items[i].os = "Android"
                                break;
                            case 1: $scope.items[i].os = "iOS"
                                break;
                            case 2: $scope.items[i].os = "Universal"
                                break;
                        }
                        switch ($scope.items[i].beta) {
                            case 0: $scope.items[i].beta = ""
                                break;
                            case 1: $scope.items[i].beta = "B"
                                break;
                        }
                    }
                    $scope.$apply();
                }
            });
        });
    }
    $scope.setApp = function (item) {
        appService.selectedApp = item;
        console.log(item);
    }
    
    function setHeader(xhr){
        xhr.setRequestHeader('x-access-token',localStorage.getItem("token"));
    }
    $(document).ready(function(){
        console.log("ASDASDASDASDSAD");
        //if (localStorage.getItem("token") != null)
            $scope.getApps();
        /* else
             $state.go("app.home");*/
    })
})