
myApp.controller("CampaignCtrl", function ($scope) {
    // configure the ng grid
    $scope.campaignGridOptions = {
        data: 'campaigns',
        columnDefs: [
            {field: 'id', displayName: 'Id'},
            {field: 'name', displayName: 'Name'},
            {field: 'publisherType', displayName: 'Publisher'},
            {field: 'startDate', displayName: 'Start Date'},
            {field: 'active', displayName: 'Status'},
            {field: 'labels', displayName: 'Labels'},
            {field: 'bidPolicy', displayName: 'Bid Policy'},
            {field: 'impressions', displayName: 'Impressions', cellClass: 'ngAlignRight'},
            {field: 'clicks', displayName: 'Clicks', cellClass: 'ngAlignRight'},
            {field: 'ctr', displayName: 'CTR', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">{{row.entity[col.field]}} %</div>'},
            {field: 'cpc', displayName: 'CPC', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">${{row.entity[col.field]}}</div>'},
            {field: 'cost', displayName: 'Cost', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">${{row.entity[col.field]}}</div>'},
            {field: 'revenue', displayName: 'Revenue', cellClass: 'ngAlignRight', cellTemplate: '<div class="ngCellText ng-scope col8 colt8 ngAlignRight">${{row.entity[col.field]}}</div>'}
        ]
    };
});
