angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });

  $scope.signout = function () {
    Auth.signout();
  };
});
