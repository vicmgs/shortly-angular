angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  // Your code here

  $scope.data = {};

  $scope.logout = function () {
    Auth.signout();
    $location.path('/');
  };

  var initializeLinks = function () {
    Links.getAll()
      .then(function (links) {
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeLinks();
});
