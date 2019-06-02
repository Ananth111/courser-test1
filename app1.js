// (function () {
//   'use strict';
//
// angular.module('DIApp', [])
// .controller('DIController', ['$scope', '$filter',DIController]);
//
// function DIController($scope, $filter) {
//   $scope.name = "Ananth";
//
//   $scope.upper = function () {
//    var upCase = $filter('uppercase');
//    $scope.name = upCase($scope.name);
//   };
// }
//
// })();

!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(n,e){n.name="Ananth",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}])}();
