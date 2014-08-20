var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
  return {message: "I'm data from a service"}
});


function FirstCtrl($scope, Data) {
  $scope.data = Data;
}
function SecondCtrl($scope, Data) {
  $scope.data = Data;
}


myApp.filter('reverse', function (Data) {
  return function (text) {
    return text.split("").reverse().join("") + " " + Data.message;
  }
});

myApp.filter('titleCase', function () {
  var titleCaseFilter = function(input) {
    var words = input.split(' ');
    for (var i=0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  };
  return titleCaseFilter;
});
