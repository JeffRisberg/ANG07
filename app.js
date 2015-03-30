/**
 * Application is called Ang07
 */

var myApp = angular.module('ang07', ['ui.router', 'ui.bootstrap', 'ngGrid']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    // for any unmatched url, redirect to dashboard
    $urlRouterProvider.otherwise("/dashboard");

    var home = {
        name: 'home',
        url: '/',
        templateUrl: 'templates/home.html'
    };
    var product = {
        name: 'product',
        url: '/product/list',
        templateUrl: 'templates/product/list.html'
    };
    var productList = {
        name: 'product.list',
        url: '/product/list',
        templateUrl: 'templates/product/list.html'
    };
    var productAdd = {
        name: 'product.add',
        url: '/product/add',
        templateUrl: 'templates/product/add.html'
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

    $stateProvider.state(home);
    $stateProvider.state(product);
    $stateProvider.state(productList);
    $stateProvider.state(productAdd);
    $stateProvider.state(campaign);
    $stateProvider.state(campaignList);
    $stateProvider.state(campaignAdd);
});