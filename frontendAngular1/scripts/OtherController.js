hrApp.controller('OtherController', ['$scope', function($scope) {
    $scope.title = undefined;
    $scope.setTitle = function() {
    $scope.title = 'New Title';
    };
}]);