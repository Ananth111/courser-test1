// (function () {
//   'use strict';
//
// angular.module('DIApp', [])
// .controller('DIController', DIController);
//
// DIController.$inject = ['$scope', '$filter'];
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
!function(){"use strict";function n(n,e){n.name="Ananth",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter"]}();
