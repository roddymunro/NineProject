myApp.controller("AppInfoController", function ($scope,appService) {
    $scope.appService = appService;
    $(document).ready(function () {
        if ($scope.appService.beta === null)
            document.getElementById("beta").style.display = "hidden";
    })
})