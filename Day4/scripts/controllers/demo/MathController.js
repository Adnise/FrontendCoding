hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){
    
    $scope.calculate = function() {
        $scope.op1 = MathService.add(parseFloat($scope.firstNumber), parseFloat($scope.secondNumber));
        $scope.op2 = MathService.substract(parseFloat($scope.firstNumber), parseFloat($scope.secondNumber));
        $scope.op3 = MathService.multiply(parseFloat($scope.firstNumber), parseFloat($scope.secondNumber));
        $scope.op4 = MathService.divide(parseFloat($scope.firstNumber), parseFloat($scope.secondNumber));
    }
    
}]);
