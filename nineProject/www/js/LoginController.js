myApp.controller("LoginController", function ($scope, $state) {
    $scope.USER = {
        username: "TestUser",
        password: "testing"
    };
    $(document).ready(function(){
        console.log("xx");
        /*http://mc8.org/fraz/apicall.php?type=GetHeroes */
        $.getJSON('http://3s.alexogden.com:8080/api', function (data) {
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
    /* --------------FRASER DO ME!!!_---------------
    $scope.login = function() {
        console.log("func");
        if (localStorage.getItem("token") == null) {
            console.log("In here");
            var creds = {
                "username": document.getElementById("inputUsername").value,
                "passwd": document.getElementById("inputPassword").value
            };
            $.post("http://3s.alexogden.com:8080/api/authenticate", creds, function (result) {
                console.log(result);
                if (result.error == 0) {
                    localStorage.setItem("token", result.token);
                    console.log(localStorage.getItem("token"));
                }
            });
        }
        else {
            console.log("Else");
            console.log(localStorage.getItem("token"));
            //check token still valid
            window.location.replace("app.home");
        }
    }*/
