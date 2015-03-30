myApp.controller('HomeController', ['$scope', function ($scope) {

    $scope.appState = "home";

    $scope.discount = 0.0;

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    };

    $scope.addItem = function () {
        $scope.items.push({title: $scope.addName, quantity: 1, price: $scope.addPrice});
        $scope.addName = "";
        $scope.addPrice = "";

        $scope.appState = "home";
    };

    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        return total;
    };

    $scope.subtotal = function () {
        return $scope.totalCart() - $scope.discount;
    };

    function calculateDiscount(newValue, oldValue, scope) {
        $scope.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);
}]);