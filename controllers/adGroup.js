myApp.controller('AdGroupCtrl', ['$scope', function ($scope) {

    var countries = "US,Germany,UK,Japan,Italy,Greece".split(',');

    var dataList = [];

    for (var i = 0; i < 100; i++) {
        dataList.push({
            id: i,
            country: countries[i % countries.length],
            date: new Date(2015, i % 12, 1 + (i % 28)),
            amount: Math.random() * 10000,
            active: i % 4 == 0
        })
    }

    $scope.adGroupData = dataList;
}]);

