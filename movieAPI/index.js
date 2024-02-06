var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http) {
  $http({
    crossDomain: true,
    url: "https://movies-api14.p.rapidapi.com/shows",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e068b929a8mshc2b3812f3c3ac8ap156825jsn3b1f0a0928e4",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  }).then(
    function successCallback(response) {
      $scope.name = response.data.Title;
      response = JSON.stringify(response.data.movies);
      response = JSON.parse(response);
      console.log(response);
      $scope.movies = response;
    },
    function errorCallback(error) {
      console.log("Not able to fetch the movie data");
    }
  );

  $scope.getM = function () {
    $scope.releaseDateFilter = function (movie) {
      var releaseDate = new Date($scope.releaseDate);
      var toReleaseDate = new Date($scope.toreleaseDate);
      var movieReleaseDate = new Date(movie.first_aired);
      return (
        releaseDate <= movieReleaseDate && movieReleaseDate <= toReleaseDate
      );
    };
  };
});
