myApp.controller('HomeCtrl', ['$scope', function ($scope) {

    $scope.discount = 0.0;

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
}]);
