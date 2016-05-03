var app = angular.module('app', ['controllers']);

// app.controller("MainController", function ($scope) {
//   $scope.val = "test123"
//   $scope.func = function() {
//     return "hej"
//   }
// });

angular.module('controllers', []).controller('MainController', function($scope,$filter) {

  $scope.val = 1;
  $scope.even = false;
  $scope.myarr = [1,2,3,4,5,6,6];
  $scope.func = function () {
    return 'costam'
  }
  $scope.inc = function () {
    $scope.val += 1;
    $scope.even = $scope.val%2==0
  }

  $scope.num = 0;
  $scope.nums = [];
  $scope.increment = function() {
    $scope.num++;
  }
  $scope.breakit = $scope.$watch('num', function() {
    $scope.nums.push($scope.num)
  })

  //dummy data object
  $scope.mydata = {arr:[{name:'imie',age:'10'},{name:'gregor',age:'18'},{name:'greg',age:'30'},{name:'jack',age:'32'},{name:'jacky',age:'20'}]}
  $scope.osoby = {arr:[{name:'imie',age:'10'},{name:'gregor',age:'18'},{name:'greg',age:'30'},{name:'jack',age:'32'},{name:'jacky',age:'20'}]}

  // filter in a controller
  console.log($filter('uppercase')('Make this string uppercase'));

})
//string filter
app.filter('charlimited', function() {
  return function(input,length) {
    if (!length) {
      length = 10
    }
    if (!input) {
      return ''
    }
    if (input.length <= length) {
      return input;
    }
    else {
      return input.substring(0,length) + '...'
    }
  }
})
//data filter
app.filter('candrink', function(){
  return function(data, minage){
    var filtered = [];
    if (!minage) {
      minage = 21;
    }
    for (var i=0; i<data.length; i++) {
      var value = data[i];
      if (value.age >= minage) {
        filtered.push(value);
      }
    }
    return filtered;
  }
})
