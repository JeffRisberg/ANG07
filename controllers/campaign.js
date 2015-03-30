myApp.controller("CampaignCtrl", function ($scope) {

    $scope.campaigns = [
        {id: 1, name: 'Holiday promotion', bidPolicy: 'fixed', impressions: 3465, clicks: 667, cost: 56.67, revenue: 153.2},
        {id: 2, name: 'Travel Seasonal', bidPolicy: 'fixed', impressions: 31265, clicks: 923, cost: 56.67, revenue: 153.2},
        {id: 3, name: 'Travel Repeat', bidPolicy: 'fixed', impressions: 34465, clicks: 3456, cost: 56.67, revenue: 153.2},
        {id: 4, name: 'College Students', bidPolicy: 'fixed', impressions: 5678, clicks: 567, cost: 56.67, revenue: 153.2},
        {id: 5, name: 'Summer promotion', bidPolicy: 'fixed', impressions: 14595, clicks: 7543, cost: 56.67, revenue: 153.2},
        {id: 6, name: 'End of Year Discount', bidPolicy: 'fixed', impressions: 2765, clicks: 265, cost: 56.67, revenue: 153.2}
    ];

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
