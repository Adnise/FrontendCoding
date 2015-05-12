
hrApp.controller('DescriptionController',['$scope',function($scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';

    $scope.resetFirstVariable = function() {
    $scope.firstVariable = undefined;
    };

    $scope.setFirstVariable = function(val) {
    $scope.firstVariable = val;
    };

    $scope.myVal = 'Description Controller';
    console.log('Description Controller has been blabla')

    function toggleDescriptionShow(){
        console.log("Am dat click!");
    }
    $scope.toggleDescriptionShow = toggleDescriptionShow;
}]);