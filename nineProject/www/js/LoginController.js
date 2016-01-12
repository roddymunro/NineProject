myApp.controller("LoginController", function ($scope, $state) {
    $scope.USER = {
        username: "",
        password: ""
    };
    $(document).ready(function(){
        console.log("xx");
        /*http://mc8.org/fraz/apicall.php?type=GetHeroes */
        $.getJSON('http://www.craftiii4.co.uk/3squared/api.php', function (data) {
            console.log("HELLO?");
            console.log(data);
        });
    })
    $scope.login = function () {
        myurl = 'http://www.craftiii4.co.uk/3squared/validate.php?username=' + $scope.USER.username + '&password=' + $scope.USER.password;
        console.log(myurl);
        $.getJSON(myurl,function(data){
            console.log(data);
            if (data.error == 0) {
                console.log("Login");
                $scope.USER.password = "";
                $scope.$apply();
                $state.go("app.home");
            }
        })
        
    }
})
