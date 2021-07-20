app.controller("registerUserController", function ($scope, $http) {
  $scope.addUser = (user) => {
    $http.post("http://localhost:3007/users", {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      ...user,
    });
  };
});
