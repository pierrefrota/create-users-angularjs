app.controller("userDetailsController", function ($scope, $routeParams, $http) {
  var userId = $routeParams.id;

  var loadUserById = () => {
    $http
      .get(`http://localhost:3007/users/${userId}`)
      .then((res) => ($scope.user = res.data));
  };

  loadUserById();
});
