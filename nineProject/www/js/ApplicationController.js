//This file includes the appService
myApp.controller("ApplicationsController", function ($scope, appService) {
    $scope.setApp = function(data){
        $scope.app = data.Apps;
        console.log(localStorage.getItem("token"));
        console.log($scope.appNames);
        console.log($scope.app);
    }
    
    function setHeader(xhr){
        xhr.setRequestHeader('x-access-token',localStorage.getItem("token"));
    }
    $(document).ready(function(){
        console.log("ASDASDASDASDSAD");
        if (localStorage.getItem("token") != null)
            $scope.getApps();
       /* else
            $state.go("app.home");*/

        $scope.getApps = function () {
            $(function () {
                console.log("Before");
                myURL = "http://3s.alexogden.com:8080/api/apps";
                $.ajax({
                    url: myURL,
                    type: 'GET',
                    dataType: 'json',
                    success: function(data){ $scope.setApps(data);},
                    error:function(){alert("ERROR");} ,
                    beforeSend: setHeader,
                    complete: function () {
                        console.log("COMPLETE");
                        $scope.$apply();
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
                    }
                });
            });
        }
        $scope.items = [];
        $scope.getApps();

    })
    myApp.service('appService',function(){
        this.selectedApp;
    })
})