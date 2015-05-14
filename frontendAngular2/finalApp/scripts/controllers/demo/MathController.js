hrApp.controller('MathController',['$scope','MathService', function($scope, MathService){

    $scope.firstVariable;
    $scope.secondVariable;

    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        //$scope.op1 = $scope.firstVariable + $scope.secondVariable;
        //$scope.op2 = $scope.firstVariable - $scope.secondVariable;
        //$scope.op3 = $scope.firstVariable * $scope.secondVariable;
        //$scope.op4 = $scope.firstVariable / $scope.secondVariable;
//        TODO #13 refactor your calculations using MathService

        $scope.op1 = MathService.add($scope.firstVariable, $scope.secondVariable);
        $scope.op2 = MathService.substract($scope.firstVariable, $scope.secondVariable);
        $scope.op3 = MathService.multiply($scope.firstVariable, $scope.secondVariable);
        $scope.op4 = MathService.divide($scope.firstVariable, $scope.secondVariable);
    }
}]);
