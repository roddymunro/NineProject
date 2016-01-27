myApp.controller("LoginController", function ($scope, $state) {
    $scope.USER = {
        username: "app",
        password: "user"
    };
    $(document).ready(function(){
        localStorage.clear();
    })
    $scope.login = function() {
        console.log("func");
        if (localStorage.getItem("token") == null) {
            console.log("In here");
            var creds = {
                "username": $scope.USER.username,
                "passwd": $scope.USER.password
            };
            $.post("http://3s.alexogden.com:8080/api/authenticate", creds, function (result) {
                console.log(result);
                if (result.error == 0) {
                    localStorage.setItem("token", result.token);
                    console.log(localStorage.getItem("token"));
                    $state.go("app.home");
                }
            });
        }
        else {
            console.log("Else");
            console.log(localStorage.getItem("token"));
            //check token still valid
            $state.go("app.home");
        }
    }
})
