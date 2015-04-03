myApp.controller("CampaignCtrl", ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

    var accounts = ['Google', 'Google', 'Bing'];
    var names = "Travel:Cruises,Travel:Hotel,Travel:Other,Car:Ford,Car:Chevrolet,Car:Kia,Car:Honda,Fall Promotion,Winter Promotion".split(',');

    var dataList = [];

    for (var i = 0; i < 100; i++) {
        var account = accounts[Math.floor(Math.random() * accounts.length)];
        var publisher = account + "Test";
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
            name: name,
            startDate: new Date(2015, i % 12, 1 + (i % 28)),
            active: i % 4 == 0,
            impressions: impressions,
            clicks: clicks,
            ctr: ctr,
            cpc: 0.03,
            cost: cost,
            revenue: revenue
        })
    }

    $scope.campaigns = dataList;

    // configure the ng grid
    $scope.campaignGridOptions = {
        data: 'campaigns',
        enablePaging: true,
        columnDefs: [
            {field: 'id', displayName: 'Id'},
            {field: 'name', displayName: 'Name',
                cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight"><a ng-click="showCampaign(row.entity.id)">{{row.entity[col.field]}}</a></div>'},
            {field: 'publisher', displayName: 'Publisher'},
            {field: 'startDate', displayName: 'Start Date'},
            {field: 'active', displayName: 'Status'},
            {field: 'labels', displayName: 'Labels'},
            {field: 'bidPolicy', displayName: 'Bid Policy'},
            {field: 'impressions', displayName: 'Impressions', cellClass: 'ngAlignRight'},
            {field: 'clicks', displayName: 'Clicks', cellClass: 'ngAlignRight'},
            {field: 'ctr', displayName: 'CTR', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">{{row.entity[col.field]}} %</div>'},
            {field: 'cpc', displayName: 'CPC', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">$ {{row.entity[col.field]}}</div>'},
            {field: 'cost', displayName: 'Cost', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">$ {{row.entity[col.field]}}</div>'},
            {field: 'revenue', displayName: 'Revenue', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">$ {{row.entity[col.field]}}</div>'}
        ]
    };

    $scope.showCampaign = function (id) {
        console.log("show Campaign " + id);
        $rootScope.campaign = null;

        // Find the campaign in the collection
        for (var i = 0; i < $scope.campaigns.length; i++) {
            var campaign = $scope.campaigns[i];

            if (campaign.id == id) {
                $rootScope.campaign = campaign;
                break;
            }
        }

        if ($rootScope.campaign !== null) {
            $state.go("campaign.show");
        }
    };

    $scope.addCampaign = function () {
        $scope.campaigns.push({name: $scope.addName});
        $scope.addName = "";
        $scope.addPrice = "";

        $state.go("campaign.add");
    };
}]);
