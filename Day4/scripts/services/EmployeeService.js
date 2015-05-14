hrApp.service('employeeService', ['$http', 'commonResourcesFactory', function ($http, commonResourcesFactory) {
        return {
            findById: function (id) {
                $http.get(commonResourcesFactory.findOneEmployeeUrl + id)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        return {
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
                        };
                    })
            }
        }
    }]
);