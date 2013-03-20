angular.module('app').controller('GistController', function ($scope, $http, $log, $resource, $routeParams) {
    //    GET       /gists/public
    //    GET       /gists/starred
    //    GET       /gists/:id
    //    POST      /gists
    //    PATCH     /gists/:id
    //    PUT       /gists/:id/star
    //    GET       /gists/:id/star
    //    POST      /gists/:id/forks
    //    DELETE    /gists/:id

    // GitHub access token, DO NOT COMMIT
    var accessToken = '<<YOUR_GIT_ACCESS_TOKEN>>';

    // Create a ng model object to hold our gists
    $scope.gists = {};

});