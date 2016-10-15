angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.addLink = function (link) {
    Links.addOne(link);
    $scope.link = {url: ''};
  };

  $scope.signout = function () {
    Auth.signout();
  };
});
