(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.mycolor="";
    $scope.myborder="";
    $scope.inputbyuser ="";
    $scope.note ="Please note that the program does NOT consider an empty item, i.e., , , as an item towards to the count."
    
    $scope.displayMessage = function (){
        var NumberOfEntries = 0;
        NumberOfEntries = $scope.getNumberofEntries($scope.inputbyuser);
        if(NumberOfEntries ==0){
          $scope.mycolor="red";
		  $scope.myborder="red-border";
		  $scope.message="Please enter data first";
		 
        }
        else if ( NumberOfEntries >0 && NumberOfEntries<=3 ){
          $scope.mycolor="green";
		  $scope.myborder="green-border";
		  $scope.message="Enjoy!";
		  
        }
        else{
          $scope.mycolor="green";
		  $scope.myborder="green-border";
		  $scope.message="Too much!";
		  
        }
    };


    $scope.getNumberofEntries = function (string){
      var entriesArray = string.split(",");
      var length = entriesArray.length;
      for (var i=0; i<entriesArray.length ; i++){
        if (!entriesArray[i].trim()){
          length = length-1;
        }
      }
      console.log(length);
      return length;
    };

  }
})();
