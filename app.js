/**
 * Application is called Products
 */

var myApp = angular.module('products', ['ui.router', 'ui.bootstrap']);

myApp.config(['$stateProvider', function ($stateProvider) {
    var home = {
        name: 'home',
        url: '/',
        templateUrl: 'home.html'
    };
    var productList = {
        name: 'productList',
        url: '/productList',
        templateUrl: 'productList.html'
    };
    var productAdd = {
        name: 'productAdd',
        url: '/productAdd',
        templateUrl: 'productAdd.html'
    };

    $stateProvider.state(home);
    $stateProvider.state(productList);
    $stateProvider.state(productAdd);
}]);