(
function (){
    
 function employeCtrl($scope,employeSvc){
     $scope.employeList=employeSvc.getEmployes();
     
 }   
    
    angular.module("employe")
        .controller("employeCtrl",["$scope","employeSvc",employeCtrl]);



})();