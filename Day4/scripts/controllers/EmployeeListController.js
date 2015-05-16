hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {

        $scope.employees = [];

                $scope.employees = [
         {
         "id": 100,
         "firstName": "Steven",
         "lastName": "King",
         "email": "SKING",
         "phoneNumber": "515.123.4567",
         "hireDate": "1987-06-17",
         "jobId": 1,
         "salary": 24000.00,
         "commissionPct": null,
         "managerId": null,
         "departmentId": 90
         },
         {
         "id": 101,
         "firstName": "Neena",
         "lastName": "Kochhar",
         "email": "NKOCHHAR",
         "phoneNumber": "515.123.4568",
         "hireDate": "1989-09-21",
         "jobId": 2,
         "salary": 17000.00,
         "commissionPct": null,
         "managerId": 100,
         "departmentId": 90
         },
         {
         "id": 102,
         "firstName": "Lex",
         "lastName": "De Haan",
         "email": "LDEHAAN",
         "phoneNumber": "515.123.4569",
         "hireDate": "1993-01-13",
         "jobId": 2,
         "salary": 17000.00,
         "commissionPct": null,
         "managerId": 100,
         "departmentId": 90
         }
         ];

        //TODO Load employee list from server
           $http({url: commonResourcesFactory.findAllEmployeesUrl, method: 'GET'}).
         success(function (data, status, headers, config) {
         $scope.employees = data;
         });


        // TODO add viewEmployee function using $location
             $scope.viewEmployee = function (employeeId) {
             $location.url('/employeeview/' + employeeId);
        };
             $scope.editEmployee = function(employeeId) {
             $location.url('/employeeedit/'+employeeId);
         };

        $scope.deleteEmployee = function (EmployeeId) {
            $http({url: commonResourcesFactory.deleteEmployeeUrl + EmployeeId, method: 'DELETE'});
            $location.url('/employeeslist/');
        }

    }]);