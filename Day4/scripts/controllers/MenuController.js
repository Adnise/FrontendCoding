hrApp.controller('MenuController', ['$scope', 'employeeActionsService', 'jobActionsService', function($scope, employeeActionsService, jobActionsService){

    $scope.employeeActionList = employeeActionsService;
    $scope.jobActionList = jobActionsService;
    $scope.currentDate = new Date();

}]);
