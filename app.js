/**
 * Application is called Ang07
 */

var myApp = angular.module('ang07', ['ui.router', 'ui.bootstrap']);

myApp.config(['$stateProvider', function ($stateProvider) {
    var home = {
        name: 'home',
        url: '/',
        templateUrl: 'templates/home.html'
    };
    var productList = {
        name: 'productList',
        url: '/productList',
        templateUrl: 'templates/productList.html'
    };
    var productAdd = {
        name: 'productAdd',
        url: '/productAdd',
        templateUrl: 'templates/productAdd.html'
    };

    $stateProvider.state(home);
    $stateProvider.state(productList);
    $stateProvider.state(productAdd);
}]);