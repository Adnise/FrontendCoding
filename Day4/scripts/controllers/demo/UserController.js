hrApp.controller('UserController', ['$scope', '$location',  'UserService', function($scope, $location, UserService){

    $scope.user = {};
    $scope.userList = [];
    $scope.showList = false;

    $scope.backBtn = function() {
        $location.url('/');
    };
    $scope.resetBtn = function() {
        $scope.user = {};
    };
    $scope.saveBtn = function() {
        if (!angular.equals({},$scope.user)) {
            UserService.addUser($scope.user);
            $scope.resetBtn();
        }
    };
    $scope.showListBtn = function() {
        $scope.showList = !$scope.showList;
        if ($scope.showList) {
            $scope.userList = UserService.getList();
        }
    };


}]);
