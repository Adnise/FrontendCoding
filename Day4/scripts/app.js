// TODO load ngRoute module
//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

// TODO add default route for main page
// TODO add route for Employees List page
// TODO add route for Employee View page


hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/numbers', {
                redirectTo: '/math'
            })
            .when('/math', {
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })
            .when('/employeeslist', {
                templateUrl: 'views/employeelist.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeview/:employeeid', {
                templateUrl: 'views/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .when('/user', {
                templateUrl: 'views/demo/user.html',
                controller: 'UserController'
            })
            . when('/colors',{
                templateUrl: 'views/demo/colors.html',
                    controller: 'Colors'
            })
            .when('/forms', {
                templateUrl: 'views/demo/form.html',
                controller: 'Form'
             })
            .when('/employeeadd', {
                templateUrl: 'views/employeeadd.html',
                controller: 'EmployeeAddController'
    })

    .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }])
    .run(['$rootScope',
        function ($rootScope) {

            // TODO

        }
    ]);