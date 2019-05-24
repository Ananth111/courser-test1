(function () {
  'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
 $scope.name="";
 $scope.totalvalue=0;

 $scope.displayNumeric=function () {
   var totalNamevalue = CalculatNumericForString($scope.name);
     $scope.totalvalue = totalNamevalue;
   };
});
function CalculatNumericForString(string) {
  var totalStringvalue = 0;
  for(var i=0;i<string.length;i++) {
    totalStringvalue + = string.charAt(i);
  }
  return totalStringvalue;
}


})();
