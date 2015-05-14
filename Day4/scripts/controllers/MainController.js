hrApp.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'HR Application';
    $scope.description = "Application for managing employees";

    $scope.descriptionShow = false;

    $scope.toggleDescriptionShow = function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };

}]);
