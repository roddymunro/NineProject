myApp.controller("SettingsController", function ($scope) {
  $scope.setting = {
    setting_item: []
  };
  $scope.settings = {
    enableNote: true
  };
  $scope.settings_url = ["app.email" , "app.password"];
  $scope.setting.setting_item.push({
    id:0,
    name: 'Email',
    type: 'email'
  })
  $scope.setting.setting_item.push({
    id:1,
    name: 'Password',
    type: 'password'
  })
})
