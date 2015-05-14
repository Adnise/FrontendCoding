hrApp.controller('EmployeeListController' ['$scope', '$http', '$location', 'commonResourcesFactory', function ($scope, $http, $location, commonResourcesFactory) {
// TODO #HR2 - inject commonResourcesFactory
        $scope.employees = []; // Employee list


        //TODO #HR3 Load employee list from server using commonResourcesFactory

    var url = commonResourcesFactory.findAllEmployeesUrl;

    $http.get(url)
        .success(function(data, status, headers, config) {
            $scope.employees = data;
        })
    ;
    $scope.viewEmployee = function (employeeId) {
        $location.url('/employeeview/' + employeeId);
    };
}]);