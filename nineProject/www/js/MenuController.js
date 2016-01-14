myApp.controller("MenuController", function ($scope) {

    $scope.data = {
        menu_items: []
    };
    $scope.menu_items_url = ["app.home", "app.applications", "app.report", "app.settings", "login"];
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
        label: "REPORT BUGS"
    })
    $scope.data.menu_items.push({
        id: 3,
        label: "SETTINGS"
    })
    $scope.data.menu_items.push({
        id: 4,
        label: "LOG OUT"
    })

})