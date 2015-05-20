myApp.controller('AccountCtrl', ['$scope', '$rootScope', '$state', 'flash', '$interpolate', '$compile',
    function ($scope, $rootScope, $state, flash, $interpolate, $compile) {

        $scope.flash = flash;

        var names = "Paychex,Endurance,LearCapital,Dafiti,Atlassian,ShoeDazzle,Glasses.com,ZonaJobs.com,Alpha,Beta,Gamma,Delta,Zeta".split(',');
        var publishers = ['Google', 'Google', 'Google', 'Bing'];
        var statuses = "Active,Disabled,Ended,Active,Active".split(',');

        var dataList = [];

        for (var i = 0; i < 100; i++) {
            var name = names[i % names.length];
            var publisher = publishers[i % publishers.length];
            var status = statuses[Math.floor(Math.random() * statuses.length)];

            var impressions = Math.floor(Math.random() * 10000);
            var ctr = 0.05 + 0.05 * Math.random();
            var clicks = Math.floor(impressions * ctr);
            var cpm = 0.15 + 0.90 * Math.random();
            var cpc = 0.05 + 0.67 * Math.random();
            var cost = Math.random() * 45.0;
            var revenue = cost * 10.0 * Math.random();
            var margin = cost * 2.0 * Math.random();

            dataList.push({
                id: i + 1,
                name: name,
                publisher: publisher,
                impressions: impressions,
                clicks: clicks,
                ctr: ctr,
                cpm: cpm,
                cpc: cpc,
                cost: cost,
                revenue: revenue,
                margin: margin
            })
        }

        $scope.accounts = dataList;

        $scope.accountCollection = new wijmo.collections.CollectionView(dataList);
        $scope.accountCollection.pageSize = 10;

        $scope.accountColumnLayout = [
            {header: "Id", binding: "id"},
            {header: "Name", binding: "name"},
            {header: "Publisher", binding: "publisher"},
            {header: "Impressions", binding: "impressions", format: 'n0'},
            {header: "Clicks", binding: "clicks", format: 'n0'},
            {header: "CTR", binding: "ctr", format: 'p2'},
            {header: "CPC", binding: "cpc", format: "c"},
            {header: "CPM", binding: "cpm", format: "c"},
            {header: "Cost", binding: "cost", format: "c"},
            {header: "Revenue", binding: "revenue", format: "c"},
            {header: "Margin", binding: "margin", format: "c"}
        ];

        $scope.accountItemFormatter = function (panel, r, c, cell) {
            if (panel.cellType == wijmo.grid.CellType.Cell) {
                var flex = panel.grid;

                if (c == 1) {
                    $scope.$item = panel.rows[r].dataItem;

                    var template = '<a ng-click="editAccount({{$item.id}})">{{$item.name}}</a>';
                    var innerHTML = $interpolate(template)($scope);

                    cell.innerHTML = innerHTML;

                    $compile(cell)($scope);
                }
            }
        };

        $scope.editAccount = function (id) {
            $state.go("account.edit", {id: id});
        };

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
            if (toState.name === 'account.edit') {
                $scope.account = null;

                // Find the account in the collection
                for (var i = 0; i < $scope.accounts.length; i++) {
                    var account = $scope.accounts[i];

                    if (account.id == toParams.id) {
                        $scope.account = account;
                        break;
                    }
                }

                if ($scope.account == null) {
                    flash.setMessage("Invalid Account");
                    e.preventDefault();
                    $state.go("account.list");
                }
            }
        });

        $scope.addAccount = function () {
            $scope.accounts.push({title: $scope.addName, quantity: 1, price: $scope.addPrice});
            $scope.addName = "";
            $scope.addPrice = "";

            $state.go("account.add");
        };
    }]);
