myApp.controller('HomeCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.charts = [
        {name: 'Total', impressions: 8654, clicks: 834},
        {name: 'North', impressions: 456, clicks: 109},
        {name: 'South', impressions: 2798, clicks: 467}
    ];
}]);
