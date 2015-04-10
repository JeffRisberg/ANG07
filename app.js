/**
 * Application is called Ang07
 */

var myApp = angular.module('ang07', ['ui.router', 'ui.bootstrap', 'ngGrid', 'wj', 'kendo.directives']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    // for any unmatched url, redirect to home
    $urlRouterProvider.otherwise("/");

    var home = {
        name: 'home',
        url: '/',
        templateUrl: 'modules/home/template.html'
    };

    var account = {
        name: 'account',
        url: '/account',
        templateUrl: 'modules/account/templates/main.html'
    };
    var accountList = {
        name: 'account.list',
        url: '/list',
        templateUrl: 'modules/account/templates/list.html'
    };
    var accountEdit = {
        name: 'account.edit',
        url: '/edit/:id',
        templateUrl: 'modules/account/templates/edit.html'
    };
    var accountAdd = {
        name: 'account.add',
        url: '/add',
        templateUrl: 'modules/account/templates/add.html'
    };

    var campaign = {
        name: 'campaign',
        url: '/campaign',
        templateUrl: 'modules/campaign/templates/main.html'
    };
    var campaignList = {
        name: 'campaign.list',
        url: '/list',
        templateUrl: 'modules/campaign/templates/list.html'
    };
    var campaignEdit = {
        name: 'campaign.edit',
        url: '/edit/:id',
        templateUrl: 'modules/campaign/templates/edit.html'
    };
    var campaignAdd = {
        name: 'campaign.add',
        url: '/add',
        templateUrl: 'modules/campaign/templates/add.html'
    };

    var adGroup = {
        name: 'adGroup',
        url: '/adGroup',
        templateUrl: 'modules/adGroup/templates/main.html'
    };
    var adGroupList = {
        name: 'adGroup.list',
        url: '/list',
        templateUrl: 'modules/adGroup/templates/list.html'
    };
    var adGroupEdit = {
        name: 'adGroup.edit',
        url: '/edit/:id',
        templateUrl: 'modules/adGroup/templates/edit.html'
    };
    var adGroupAdd = {
        name: 'adGroup.add',
        url: '/add',
        templateUrl: 'modules/adGroup/templates/add.html'
    };

    $stateProvider.state(home);

    $stateProvider.state(account);
    $stateProvider.state(accountList);
    $stateProvider.state(accountEdit);
    $stateProvider.state(accountAdd);

    $stateProvider.state(campaign);
    $stateProvider.state(campaignList);
    $stateProvider.state(campaignEdit);
    $stateProvider.state(campaignAdd);

    $stateProvider.state(adGroup);
    $stateProvider.state(adGroupList);
    $stateProvider.state(adGroupEdit);
    $stateProvider.state(adGroupAdd);
});


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
