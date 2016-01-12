myApp.controller("LoginController", function ($scope) {
    $(document).ready(function(){
        console.log("xx");
        /*http://mc8.org/fraz/apicall.php?type=GetHeroes */
        $.getJSON('http://www.craftiii4.co.uk/3squared/api.php', function (data) {
            console.log("HELLO?");
            console.log(data);
        });
    })
    $scope.openStuff = function () {
        console.log("?");
        
    }
})
