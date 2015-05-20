myApp.controller("CampaignCtrl", ['$scope', '$rootScope', '$state', 'flash', '$interpolate', '$compile',
    function ($scope, $rootScope, $state, flash, $interpolate, $compile) {

        $scope.flash = flash;

        console.log($scope.blarg);
        $scope.blarg = "AAAA";

        var accounts = ['Google', 'Google', 'Bing'];
        var names = "Travel:Cruises,Travel:Hotel,Travel:Other,Car:Ford,Car:Chevrolet,Car:Kia,Car:Honda,Fall Promotion,Winter Promotion".split(',');
        var statuses = "Active,Disabled,Ended,Active,Active".split(',');

        var dataList = [];

        for (var i = 0; i < 100; i++) {
            var account = accounts[Math.floor(Math.random() * accounts.length)];
            var publisher = account + "Test";
            var name = names[i % names.length];
            var status = statuses[Math.floor(Math.random() * statuses.length)];

            var impressions = Math.floor(Math.random() * 10000);
            var ctr = 0.05 + 0.05 * Math.random();
            var cpc = 0.95 + 1.4 * Math.random();
            var cpm = 0.15 + 0.90 * Math.random();
            var clicks = Math.floor(impressions * ctr);
            var cost = Math.random() * 45.0;
            var revenue = cost * 10.0 * Math.random();
            var margin = cost * 2.0 * Math.random();

            dataList.push({
                id: i + 1,
                account: account,
                publisher: publisher,
                name: name,
                startDate: new Date(2015, i % 12, 1 + (i % 28)),
                status: status,
                impressions: impressions,
                clicks: clicks,
                ctr: ctr,
                cpc: cpc,
                cpm: cpm,
                cost: cost,
                revenue: revenue,
                margin: margin
            })
        }

        $scope.campaigns = dataList;

        $scope.campaignCollection = new wijmo.collections.CollectionView(dataList);
        $scope.campaignCollection.pageSize = 10;

        // Get the column layout for this module if defined, or build it from all dimensions and metrics
        $scope.moduleKey = 'campaign';

        if ($rootScope.moduleConfigs[$scope.moduleKey] != null) {
            $scope.columnLayout = $rootScope.moduleConfigs[$scope.moduleKey];
        }
        else {
            $scope.columnLayout = [];
            $rootScope.dimensions.forEach(function (column) {
                delete column['$$hashKey'];
                $scope.columnLayout.push(column);
            });
            $rootScope.metrics.forEach(function (column) {
                delete column['$$hashKey'];
                $scope.columnLayout.push(column);
            });
        }

        $scope.campaignItemFormatter = function (panel, r, c, cell) {
            if (panel.cellType == wijmo.grid.CellType.Cell) {
                var flex = panel.grid;

                if (c == 1) {
                    $scope.$item = panel.rows[r].dataItem;

                    var template = '<a ng-click="editCampaign({{$item.id}})">{{$item.name}}</a>';
                    var innerHTML = $interpolate(template)($scope);

                    cell.innerHTML = innerHTML;

                    $compile(cell)($scope);
                }
            }
        };

        $scope.editCampaign = function (id) {
            $state.go("campaign.edit", {id: id});
        };

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
            if (toState.name === 'campaign.edit') {
                $scope.campaign = null;

                // Find the campaign in the collection
                for (var i = 0; i < $scope.campaigns.length; i++) {
                    var campaign = $scope.campaigns[i];

                    if (campaign.id == toParams.id) {
                        $scope.campaign = campaign;
                        break;
                    }
                }

                if ($scope.campaign == null) {
                    flash.setMessage("Invalid Campaign");
                    e.preventDefault();
                    $state.go("campaign.list");
                }
            }
        });

        $scope.addCampaign = function () {
            $scope.campaigns.push({name: $scope.addName});
            $scope.addName = "";
            $scope.addPrice = "";

            $state.go("campaign.add");
        };
    }

])
;
