myApp.controller("MenuController", function ($scope) {

    $scope.data = {
        menu_items: []
    };
    $scope.menu_items_url = ["app.home", "app.applications", "app.help", "contact", "login", "app.settings"];
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
        label: "HELP"
    })
    $scope.data.menu_items.push({
        id: 3,
        label: "CONTACT"
    })
    $scope.data.menu_items.push({
        id: 4,
        label: "LOG OUT"
    })
    $scope.data.menu_items.push({
        id: 5,
        label: "SETTINGS"
    })

})