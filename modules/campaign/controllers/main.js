myApp.controller("CampaignCtrl", ['$scope', '$rootScope', '$state', 'flash', function ($scope, $rootScope, $state, flash) {

    $scope.flash = flash;

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
        var clicks = Math.floor(impressions * ctr);
        var cost = Math.random() * 45.0;
        var revenue = cost * 10.0 * Math.random();

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
            cpc: 0.03,
            cost: cost,
            revenue: revenue
        })
    }

    $scope.campaigns = dataList;

    $scope.campaignGridOptions = {
        dataSource: {
            data: dataList,
            schema: {
                model: {
                    id: "id",
                    fields: {
                        id: { type: "number" },
                        account: { type: "string" },
                        publisher: { type: "string" },
                        name: { type: "string" },
                        status: { type: "string" },
                        startDate: { type: "date" },
                        impressions: { type: "number" },
                        clicks: { type: "number" },
                        ctr: { type: "number" },
                        cpc: { type: "number" },
                        cost: { type: "number" },
                        revenue: { type: "number" }
                    }
                }
            },
            pageSize: 10
        },
        height: 400,
        scrollable: true,
        sortable: true,
        filterable: false,
        pageable: {
            input: true,
            numeric: false
        },

        columns: [
            {
                field: "id",
                title: "Id",
                filterable: false
            },
            {
                field: "account",
                title: "Account"
            },
            {
                field: "name",
                title: "Name",
                template: "<a ng-click=editCampaign(dataItem.id)>#: data.name#</a>" },
            {
                field: "publisher",
                title: "Publisher"
            },
            {
                field: "status",
                title: "Status"
            },
            {
                field: "startDate",
                title: "Start Date",
                type: "date",
                format: "{0:MM-dd-yyyy}"
            },
            {
                field: "impressions",
                title: "Impressions",
                attributes: { "class": "k-align-right"}
            },
            {
                field: "clicks",
                title: "Clicks",
                attributes: { "class": "k-align-right"}
            },
            {
                field: "ctr",
                title: "CTR",
                attributes: { "class": "k-align-right"}
            },
            {
                field: "cpc",
                title: "CPC",
                format: "{0:c}",
                attributes: { "class": "k-align-right"}
            },
            {
                field: "cost",
                title: "Cost",
                format: "{0:c}",
                attributes: { "class": "k-align-right"}
            },
            {
                field: "revenue",
                title: "Revenue",
                format: "{0:c}",
                attributes: { "class": "k-align-right"}
            }
        ]
    };

    $scope.editCampaign = function (id) {
        $state.go("campaign.edit", {id: id});
    };

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams) {
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
}]);
