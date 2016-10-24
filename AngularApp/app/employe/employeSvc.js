(function (){
    
 function employeSvc(){
    this.getEmployes=function()
    {
        var employes=[{
            
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
            
        };
    }
     
    
    
    angular.module("employe").service("employeSvc",[employeSvc]);



})();