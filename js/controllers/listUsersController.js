app.controller("listUsersController", function ($scope, $http) {
  var loadUsers = () => {
    $scope.loading = true;
    $http.get("http://localhost:3007/users").then((res) => {
      $scope.users = res.data;
      $scope.loading = false;
    });
  };

  loadUsers();
});
