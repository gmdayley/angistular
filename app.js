'use strict';

angular.module('app', ['ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gists', {templateUrl: 'partials/gists.html', controller: 'GistController'});
        $routeProvider.otherwise({redirectTo: '/gists'});
    }]);

