hrApp.controller('RequestController', ['$scope', '$http', function($scope,$http){

    $scope.jobList = [];

//    TODO #10 - make AJAX call
    $http.get('http://demo.teamnet.ro:8282/hrapp/jobs')
        .success(function(data, status, headers, config){
         $scope.jobList = data;
    })
}]);
