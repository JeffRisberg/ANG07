myApp.controller('ProductCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.discount = 0.0;

    $scope.products = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    // configure the ng grid
    $scope.productsGridOptions = {
        data: 'products',
        columnDefs: [
            {field: 'id', displayName: 'Id'},
            {field: 'name', displayName: 'Name'},
            {field: 'impressions', displayName: 'Impressions', cellClass: 'ngAlignRight'},
            {field: 'clicks', displayName: 'Clicks', cellClass: 'ngAlignRight'},
            {field: 'ctr', displayName: 'CTR', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">{{row.entity[col.field]}} %</div>'},
            {field: 'cpc', displayName: 'CPC', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">${{row.entity[col.field]}}</div>'},
            {field: 'cost', displayName: 'Cost', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">${{row.entity[col.field]}}</div>'},
            {field: 'revenue', displayName: 'Revenue', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">${{row.entity[col.field]}}</div>'}
        ]
    };

    $scope.remove = function (index) {
        $scope.products.splice(index, 1);
    };

    $scope.addItem = function () {
        $scope.products.push({title: $scope.addName, quantity: 1, price: $scope.addPrice});
        $scope.addName = "";
        $scope.addPrice = "";

        $state.go("product.add");
    };

    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0, len = $scope.products.length; i < len; i++) {
            total = total + $scope.products[i].price * $scope.products[i].quantity;
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
