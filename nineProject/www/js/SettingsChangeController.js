myApp.controller('SettingsChangeController', function($scope, Settings) {
    $scope.settings = {
        enableNote: true,
        enablePizza: false
    };
    $scope.displaySett = Settings.all();
})

.controller('SettingsChangeCtrl', function($scope, $stateParams, Settings) {
    $scope.setting = Settings.get($stateParams.settingsId);
})