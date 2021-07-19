angular
  .module("listaDeContatos")
  .config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix("");

    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
      })
      .when("/register-user", {
        templateUrl: "views/register-user.html",
        controller: "registerUserController",
      })
      .when("/list-users", {
        templateUrl: "views/list-users.html",
      })
      .when("/404.html", {
        templateUrl: "views/404.html",
      })
      .otherwise({
        redirectTo: "/404.html",
      });
  });
