angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {url: 'http://'};
  $scope.addLink = function (link) {
    Links.addOne(link);
    $scope.link = {url: 'http://'};
  };

  $scope.signout = function () {
    Auth.signout();
  };
});
