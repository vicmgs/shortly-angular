angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function (link) {
    Links.addOne(link);
    $scope.link = {url: ''};
  };
});
