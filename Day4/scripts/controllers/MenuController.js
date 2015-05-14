hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    /*$scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];*/

    $scope.employeeActionList = employeeActionsService;
    $scope.currentDate = new Date();

}]);
