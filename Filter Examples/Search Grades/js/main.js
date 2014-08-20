var myApp = angular.module("myApp",[]);

myApp.factory("Climbers", function(){
  var Climbers = {};
  Climbers.rating = [
    {
      YDS:"5.6",
      French:"4c",
      British:"4b",
      Poms:"moderately very"
    },
    {
      YDS:"5.7",
      French:"5a",
      British:"4c"
    },
    {
      YDS:"5.8",
      French:"5b",
      British:"4c"
    },
    {
      YDS:"5.9",
      French:"5c",
      British:"5a"
    },
    {
      YDS:"5.10a",
      French:"6a",
      British:"5a"
    },
    {
      YDS:"5.10b",
      French:"6a+",
      British:"5b"
    },
    {
      YDS:"5.10c",
      French:"6b",
      British:"5b"
    },
    {
      YDS:"5.10d",
      French:"6b+",
      British:"5c"
    },
    {
      YDS:"5.11a",
      French:"6b+",
      British:"5c"
    },
    {
      YDS:"5.11b",
      French:"6c",
      British:"5c"
    },
    {
      YDS:"5.11c",
      French:"6c+",
      British:"6a"
    },
    {
      YDS:"5.11d",
      French:"7a",
      British:"6a"
    },
    {
      YDS:"5.12a",
      French:"7a+",
      British:"6a"
    },
    {
      YDS:"5.12b",
      French:"7b",
      British:"6a"
    },
    {
      YDS:"5.12c",
      French:"7b+",
      British:"6b"
    },
    {
      YDS:"5.12d",
      French:"7c",
      British:"6b"
    },
    {
      YDS:"5.13a",
      French:"7c+",
      British:"6b"
    },
    {
      YDS:"5.13b",
      French:"8a",
      British:"6c"
    }
  ];
  return Climbers;
});

function ClimbersCtrl($scope, Climbers){
  $scope.climbers = Climbers;
}
