(function () {
  'use strict';

angular.module('DIApp', [])
function DIController ($scope, $filter)
$scope.name = "Ananth";
$scope.upper = function () {
  var upcase = $filter('uppercase');
  $scope.name = upcase($scope.name);

};
})
