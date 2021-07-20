app.controller(
  "userDetailsController",
  function ($scope, $routeParams, $http, $location) {
    var userId = $routeParams.id;

    var loadUserById = () => {
      $http
        .get(`http://localhost:3007/users/${userId}`)
        .then((res) => ($scope.user = res.data));
    };
    loadUserById();

    $scope.deleteUserById = (id) => {
      $http
        .delete(`http://localhost:3007/users/${id}`)
        .then((response) => {
          $location.path("/");
        })
        .catch((err) => {
          console.log("Ocorreu um erro ao deletar o usuário.: ");
        });
    };
  }
);
