app.controller("listUsersController", function ($scope, $http) {
  var loadUsers = () => {
    $scope.loading = true;
    $http.get("http://localhost:3007/users").then((res) => {
      $scope.users = res.data;
      $scope.loading = false;
    });
  };
  loadUsers();

  $scope.deleteUserById = (user) => {
    $http
      .delete(`http://localhost:3007/users/${user.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Ocorreu um erro ao deletar o usuário.: ");
      });
  };
});
