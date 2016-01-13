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
    /*[
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
    ];*/
      

})
myApp.service('appService',function(){
    this.selectedApp;
})