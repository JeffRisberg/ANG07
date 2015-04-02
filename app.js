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
        url: '/account/list',
        templateUrl: 'templates/account/list.html'
    };
    var accountList = {
        name: 'account.list',
        url: '/account/list',
        templateUrl: 'templates/account/list.html'
    };
    var accountAdd = {
        name: 'account.add',
        url: '/account/add',
        templateUrl: 'templates/account/add.html'
    };
    var campaign = {
        name: 'campaign',
        url: '/campaign/list',
        templateUrl: 'templates/campaign/list.html'
    };
    var campaignList = {
        name: 'campaign.list',
        url: '/campaign/list',
        templateUrl: 'templates/campaign/list.html'
    };
    var campaignAdd = {
        name: 'campaign.add',
        url: '/campaign/add',
        templateUrl: 'templates/campaign/add.html'
    };
    var campaignShow = {
        name: 'campaign.show',
        url: '/campaign/show',
        templateUrl: 'templates/campaign/show.html'
    };
    var adGroupList = {
        name: 'adGroup',
        url: '/adGroup/list',
        templateUrl: 'templates/adGroup/list.html'
    };

    $stateProvider.state(home);
    $stateProvider.state(account);
    $stateProvider.state(accountList);
    $stateProvider.state(accountAdd);
    $stateProvider.state(campaign);
    $stateProvider.state(campaignList);
    $stateProvider.state(campaignAdd);
    $stateProvider.state(campaignShow);
    $stateProvider.state(adGroupList);
});