myApp.controller('HomeCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

    $scope.charts = [
        {name: 'Total', impressions: 8654, clicks: 834},
        {name: 'Last 30 Days', impressions: 456, clicks: 109},
        {name: 'Last 60 Days', impressions: 2798, clicks: 467}
    ];

    $scope.stateIncludes = function (name) {
        return $state.includes(name);
    }
}]);
