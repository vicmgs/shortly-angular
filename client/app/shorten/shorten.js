angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here

  $scope.link = {};
  $scope.logout = function () {
    Auth.signout();
    $location.path('/');
  };
  $scope.addLink = function () {
    $scope.loading = true;
    Links.addOne($scope.link)
      .then(function () {
        $scope.loading = false;
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});
