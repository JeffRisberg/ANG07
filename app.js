/**
 * Application is called Ang07
 */

var myApp = angular.module('ang07', ['ui.router', 'ui.bootstrap', 'ngGrid', 'wj']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    // for any unmatched url, redirect to dashboard
    $urlRouterProvider.otherwise("/dashboard");

    var home = {
        name: 'home',
        url: '/',
        templateUrl: 'templates/home.html'
    };
    var account = {
        name: 'account',
        url: '/account',
        templateUrl: 'templates/account/list.html'
    };
    var accountList = {
        name: 'account.list',
        url: '/list',
        templateUrl: 'templates/account/list.html'
    };
    var accountShow = {
        name: 'account.show',
        url: '/show',
        templateUrl: 'templates/account/show.html'
    };
    var accountAdd = {
        name: 'account.add',
        url: '/add',
        templateUrl: 'templates/account/add.html'
    };
    var campaign = {
        name: 'campaign',
        url: '/campaign',
        templateUrl: 'templates/campaign/list.html'
    };
    var campaignList = {
        name: 'campaign.list',
        url: '/list',
        templateUrl: 'templates/campaign/list.html'
    };
    var campaignShow = {
        name: 'campaign.show',
        url: '/show',
        templateUrl: 'templates/campaign/show.html'
    };
    var campaignAdd = {
        name: 'campaign.add',
        url: '/add',
        templateUrl: 'templates/campaign/add.html'
    };
    var adGroup = {
        name: 'adGroup',
        url: '/adGroup',
        templateUrl: 'templates/adGroup/list.html'
    };
    var adGroupList = {
        name: 'adGroup.list',
        url: '/list',
        templateUrl: 'templates/adGroup/list.html'
    };
    var adGroupShow = {
        name: 'adGroup.show',
        url: '/show',
        templateUrl: 'templates/adGroup/show.html'
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
});