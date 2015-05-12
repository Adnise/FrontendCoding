
hrApp.controller('MainController',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
   $scope.name = '';
    $timeout(
        function() {
            console.log($scope.name);
            console.log($rootScope.name);
        },100000
    );
}]);