//angular.module("currencyApp",[])
//  .controller('currencyCtrl',['$scope', function($scope){
//  $scope.amount = 1234.56
//}]);



var myApp = angular.module("currencyApp",[]);

myApp.controller('currencyCtrl',['$scope',function($scope){
  $scope.amount = 1234.56
}]);

myApp.filter('myCurrency', ['$filter', function ($filter) {
  return function(input) {
    input = parseFloat(input);
    if(input % 1 === 0) {
      input = input.toFixed(0);
    }
    return '$' + input;
  };
}]);

//parseFloat information
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

//toFixed information
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed