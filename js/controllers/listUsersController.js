app.controller("listUsersController", function ($scope, $http) {
  var loadUsers = () => {
    $http
      .get("http://localhost:3007/users")
      .then((res) => ($scope.users = res.data));
  };

  loadUsers();
});
