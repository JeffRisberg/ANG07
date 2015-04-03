myApp.controller('AdGroupCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

    var accounts = ['Google', 'Google', 'Bing'];
    var campaigns = "Travel:Cruises,Travel:Hotel,Travel:Other,Car:Ford,Car:Chevrolet,Car:Kia,Car:Honda,Fall Promotion,Winter Promotion".split(',');
    var names = "Group1,Group2,Test Group,Basis,New Group,TestGroup2".split(',');

    var dataList = [];

    for (var i = 0; i < 100; i++) {
        var account = accounts[Math.floor(Math.random() * accounts.length)];
        var publisher = account + "Test";
        var campaign = campaigns[Math.floor(Math.random() * campaigns.length)];
        var name = names[i % names.length];

        var impressions = Math.floor(Math.random() * 10000);
        var ctr = 0.05 + 0.05 * Math.random();
        var clicks = Math.floor(impressions * ctr);
        var cost = Math.random() * 45.0;
        var revenue = cost * 10.0 * Math.random();

        dataList.push({
            id: i,
            account: account,
            publisher: publisher,
            campaign: campaign,
            name: name,
            date: new Date(2015, i % 12, 1 + (i % 28)),
            active: i % 4 == 0,
            searchBid: 35.0,
            impressions: impressions,
            clicks: clicks,
            ctr: ctr,
            cost: cost,
            revenue: revenue
        })
    }

    $scope.adGroupCollection = new wijmo.collections.CollectionView(dataList);
    $scope.adGroupCollection.pageSize = 10;

    $scope.showAdGroup = function (id) {
        $rootScope.adGroup = null;

        // Find the adGroup in the collection
        for (var i = 0; i < $scope.adGroupCollection.items.length; i++) {
            var adGroup = $scope.adGroupCollection.items[i];

            if (adGroup.id == id) {
                $rootScope.adGroup = adGroup;
                break;
            }
        }

        if ($rootScope.adGroup !== null) {
            $state.go("adGroup.show");
        }
    };
}]);

