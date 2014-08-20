var myApp = angular.module('myApp',[]);

myApp.filter('reverse', function(Data) {
  return function (text) {
    return text.split("").reverse().join("") + " " + Data.message;
  }
});


myApp.factory('Data', function(){
  return {message: "I'm data from a service!"}
});


function FirstController($scope, Data) {
  $scope.data = Data;
}

function SecondController($scope, Data) {
  $scope.data = Data;
}