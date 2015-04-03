/**
 * Application is called Ang07
 */

var myApp = angular.module('ang07', ['ui.router', 'ui.bootstrap', 'ngGrid', 'wj']);

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
    var accountShow = {
        name: 'account.show',
        url: '/show',
        templateUrl: 'modules/account/templates/show.html'
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
    var campaignShow = {
        name: 'campaign.show',
        url: '/show',
        templateUrl: 'modules/campaign/templates/show.html'
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
    var adGroupShow = {
        name: 'adGroup.show',
        url: '/show',
        templateUrl: 'modules/adGroup/templates/show.html'
    };
    var adGroupAdd = {
        name: 'adGroup.add',
        url: '/add',
        templateUrl: 'modules/adGroup/templates/add.html'
    };

    $stateProvider.state(home);

    $stateProvider.state(account);
    $stateProvider.state(accountList);
    $stateProvider.state(accountShow);
    $stateProvider.state(accountAdd);

    $stateProvider.state(campaign);
    $stateProvider.state(campaignList);
    $stateProvider.state(campaignShow);
    $stateProvider.state(campaignAdd);

    $stateProvider.state(adGroup);
    $stateProvider.state(adGroupList);
    $stateProvider.state(adGroupShow);
    $stateProvider.state(adGroupAdd);
});