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

    // GitHub access token, DO NOT COMMIT YOUR ACCESS TOKEN!
    //var accessToken = '<<YOUR_GIT_ACCESS_TOKEN>>';
    var accessToken = $routeParams.accessToken;

    // Create a ng model object to hold our gists
    $scope.gists = {};

    var Gist = $resource('https://api.github.com/gists/:id', {id: '@id', access_token: accessToken});

    // Query list of users gist
    $scope.gists.myGists = Gist.query();

    // Create a new gist
    $scope.new = function () {
        var g = new Gist({
            "description": "A new gist created by AnGistular",
            "public": false,
            "files": {
                "file1.txt": {
                    "content": "file contents"
                }
            }
        });

        g.$save();
        $scope.gists.myGists.push(g);
    };

    // Remove a gist
    $scope.remove = function(gist) {
        gist.$remove();
        var index = $scope.gists.myGists.indexOf(gist);
        $scope.gists.myGists.splice(index, 1);
    }
});