myApp.controller("SettingsController", function ($scope) {
    $scope.setting = {
        items: []
    };

    $scope.setting.items.push({
        id: 0,
        name: 'Email',
        type: 'email',
        disable_confirm: true
    })
    $scope.setting.items.push({
        id: 0,
        name: 'Password',
        type: 'password',
        disable_confirm: true
    })

    $scope.setting = {
        enableNote: true
    };
})
