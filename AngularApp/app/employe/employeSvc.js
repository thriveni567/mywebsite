(function (){
    
 function employeSvc(){
    this.getEmployes=function($scope)
    {
       $scope.employes=[{
            
            employeId:"12BJ1A501",
            employeName:"thri",
            employeSalary:20000,
        },
                      {
            
            employeId:"12BJ1A502",
            employeName:"sita",
            employeSalary:30000,
        },
                      {
            
            employeId:"12BJ1A504",
            employeName:"geetha",
            employeSalary:10000,
        },
                      {
            
            employeId:"12BJ1A505",
            employeName:"ram",
            employeSalary:70000,
        }
                      ];
        
         return employes;
        
      
        
        $scope.addRow = function(){		
	/*$scope.companies.push({ 'E.Id':$scope.employeId, 'E.Name': $scope.employeName, 'E.Salary':$scope.employeSalary });*/
	$scope.employeId='';
	$scope.employeName='';
	$scope.employeSalary='';
};
$scope.removeRow = function(employeId){				
		var index = -1;		
		var comArr = eval( $scope.employes );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].employeId === employeId ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.employes.splice( index, 1 );
};
     };    
            
        
    }
     
    
    
    angular.module("employe").service("employeSvc",[employeSvc]);



})();