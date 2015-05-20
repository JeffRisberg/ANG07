/**
 * Application is called Ang07
 */

var myApp = angular.module('ang07', [
    'ngSanitize',
    'ui.utils',
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    'wj',
    'ct.ui.router.extras.sticky']);

myApp.config(['$stateProvider', '$stickyStateProvider', '$urlRouterProvider',
    function ($stateProvider, $stickyStateProvider, $urlRouterProvider) {

        // for any unmatched url, redirect to home
        $urlRouterProvider.otherwise("/");

        var states = [];

        states.push({
            name: 'home',
            url: '/',
            templateUrl: 'modules/home/template.html'
        });

        states.push({
            name: 'editColumns',
            url: "/editColumns/:moduleKey",
            templateUrl: "modules/common/editColumns.html",
            data: {pageTitle: 'Edit Columns'}
        });

        states.push({
            name: 'account',
            url: '/account',
            templateUrl: 'modules/account/templates/main.html'
        });
        states.push({
            name: 'account.list',
            url: '/list',
            templateUrl: 'modules/account/templates/list.html',
            sticky: true
        });
        states.push({
            name: 'account.edit',
            url: '/edit/:id',
            templateUrl: 'modules/account/templates/edit.html'
        });
        states.push({
            name: 'account.add',
            url: '/add',
            templateUrl: 'modules/account/templates/add.html'
        });

        states.push({
            name: 'campaign',
            url: '/campaign',
            templateUrl: 'modules/campaign/templates/main.html'
        });
        states.push({
            name: 'campaign.list',
            url: '/list',
            templateUrl: 'modules/campaign/templates/list.html'
        });
        states.push({
            name: 'campaign.edit',
            url: '/edit/:id',
            templateUrl: 'modules/campaign/templates/edit.html'
        });
        states.push({
            name: 'campaign.add',
            url: '/add',
            templateUrl: 'modules/campaign/templates/add.html'
        });

        states.push({
            name: 'adGroup',
            url: '/adGroup',
            templateUrl: 'modules/adGroup/templates/main.html'
        });
        states.push({
            name: 'adGroup.list',
            url: '/list',
            templateUrl: 'modules/adGroup/templates/list.html'
        });
        states.push({
            name: 'adGroup.edit',
            url: '/edit/:id',
            templateUrl: 'modules/adGroup/templates/edit.html'
        });
        states.push({
            name: 'adGroup.add',
            url: '/add',
            templateUrl: 'modules/adGroup/templates/add.html'
        });

        angular.forEach(states, function (state) {
            $stateProvider.state(state);
        });
    }]);

myApp.run(['$rootScope', function ($rootScope) {

    // This will hold the selected columns for each module, organized by moduleKey
    $rootScope.moduleConfigs = {};

    $rootScope.dimensions = [
        {binding: "name", header: "Name", align: "left"},
        {binding: 'account', header: 'Account', align: "left"},
        {binding: 'status', header: 'Status'}
    ];

    $rootScope.metrics = [
        {binding: 'impressions', header: 'Impressions', format: 'n0'},
        {binding: 'clicks', header: 'Clicks', format: 'n0'},
        {binding: 'ctr', header: 'CTR', format: 'p2'},
        {binding: 'cpc', header: 'CPC', format: "c"},
        {binding: 'cpm', header: 'CPM', format: "c"},
        {binding: 'cost', header: 'Cost', format: "c"},
        {binding: 'revenue', header: 'Revenue', format: "c"},
        {binding: 'margin', header: 'Margin', format: "c"}
    ];
}]);

myApp.directive('ang07Grid', [function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            itemsSource: '=',
            columnLayout: '=',
            itemFormatter: '=',
            selectionMode: '@',
            headersVisibility: '@'
        },
        template: '<div/>',

        link: function (scope, element, attrs) {

            // create flexgrid
            var flex = new wijmo.grid.FlexGrid(element[0]);

            // apply column layout
            if (scope.columnLayout) {
                var cols = scope.columnLayout;
                flex.autoGenerateColumns = false;
                for (var i = 0; i < cols.length; i++) {
                    flex.columns.push(new wijmo.grid.Column(cols[i]));
                }
            }

            // apply itemSource
            if (scope.itemsSource) {
                flex.itemsSource = scope.itemsSource;
            }

            if (scope.selectionMode) {
                flex.selectionMode = scope.selectionMode;
            }

            if (scope.headersVisibility) {
                flex.headersVisibility = scope.headersVisibility;
            }

            if (scope.itemFormatter) {
                flex.itemFormatter = scope.itemFormatter;
            }
        }
    }
}]);


myApp.factory("flash", ['$rootScope', function ($rootScope) {
    var queue = [];
    var currentMessage = "";

    $rootScope.$on("$stateChangeSuccess", function () {
        currentMessage = queue.shift() || "";
    });

    return {
        setMessage: function (message) {
            queue.push(message);
        },

        getMessage: function () {
            return currentMessage;
        }
    };
}]);
