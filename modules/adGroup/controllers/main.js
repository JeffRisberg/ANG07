myApp.controller('AdGroupCtrl', ['$scope', '$interpolate', '$compile', '$state', function ($scope, $interpolate, $compile, $state) {

    var accounts = ['Google', 'Google', 'Bing'];
    var campaigns = "Travel:Cruises,Travel:Hotel,Travel:Other,Car:Ford,Car:Chevrolet,Car:Kia,Car:Honda,Fall Promotion,Winter Promotion".split(',');
    var names = "Group1,Group2,Test Group,Basis,New Group,TestGroup2".split(',');
    var statuses = "Active,Disabled,Ended,Active,Active".split(',');

    var dataList = [];

    for (var i = 0; i < 100; i++) {
        var account = accounts[Math.floor(Math.random() * accounts.length)];
        var publisher = account + "Test";
        var campaign = campaigns[Math.floor(Math.random() * campaigns.length)];
        var name = names[i % names.length];
        var status = statuses[Math.floor(Math.random() * statuses.length)];

        var impressions = Math.floor(Math.random() * 10000);
        var ctr = 0.05 + 0.05 * Math.random();
        var cpc = 0.95 + 1.4 * Math.random();
        var clicks = Math.floor(impressions * ctr);
        var cost = Math.random() * 45.0;
        var revenue = cost * 10.0 * Math.random();

        dataList.push({
            id: i + 1,
            account: account,
            publisher: publisher,
            campaign: campaign,
            name: name,
            endDate: new Date(2015, i % 12, 1 + (i % 28)),
            status: status,
            searchBid: 35.0,
            impressions: impressions,
            clicks: clicks,
            ctr: ctr,
            cpc: cpc,
            cost: cost,
            revenue: revenue
        })
    }

    $scope.adGroupCollection = new wijmo.collections.CollectionView(dataList);
    $scope.adGroupCollection.pageSize = 10;

    $scope.adGroupColumnLayout = [
        {header: "Id", binding: "id"},
        {header: "Name", binding: "name"},
        {header: "Account", binding: "account" },
        {header: "Publisher", binding: "publisher"},
        {header: "Status", binding: "status"},
        {header: "End Date", binding: "endDate"},
        {header: "Search Bid", binding: "searchBid", format: "c"},
        {header: "Impressions", binding: "impressions", format: 'n0'},
        {header: "Clicks", binding: "clicks", format: 'n0'},
        {header: "CTR", binding: "ctr", format: 'p2'},
        {header: "CPC", binding: "cpc", format: "c"},
        {header: "Cost", binding: "cost", format: "c"},
        {header: "Revenue", binding: "revenue", format: "c"}
    ];

    $scope.adGroupItemFormatter = function (panel, r, c, cell) {
        if (panel.cellType == wijmo.grid.CellType.Cell) {
            var flex = panel.grid;

            if (c == 1) {
                $scope.$item = panel.rows[r].dataItem;

                var template = '<a ng-click="editAdGroup({{$item.id}})">{{$item.name}}</a>';
                var innerHTML = $interpolate(template)($scope);

                cell.innerHTML = innerHTML;

                $compile(cell)($scope);
            }
        }
    };

    $scope.editAdGroup = function (id) {
        $scope.adGroup = null;

        // Find the adGroup in the collection
        for (var i = 0; i < $scope.adGroupCollection.items.length; i++) {
            var adGroup = $scope.adGroupCollection.items[i];

            if (adGroup.id == id) {
                $scope.adGroup = adGroup;
                break;
            }
        }

        if ($scope.adGroup !== null) {
            $state.go("adGroup.edit");
        }
    };
}]);

