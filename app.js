(function () {
  'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
 $scope.name="";
 $scope.totalvalue=0;

 $scope.displayNumeric=function () {
   var totalNamevalue = calculatNumericForString($scope.name);
     $scope.totalvalue = totalNamevalue;
   };


function calculatNumericForString(string) {
  var totalStringvalue = 0;
  for (var i=0;i<string.length;i++) {
    totalStringvalue += string.charCodeAt(i);
  }

  return totalStringvalue;
}

});

}) ();
