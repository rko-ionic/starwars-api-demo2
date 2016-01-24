angular.module('app.controllers', [])
  
.controller('StarWarsFilmsCtrl', function($scope,FilmService) {
    $scope.films = [];
    
    FilmService.getFilms().then(function(res) {
        $scope.films = res;     
    });
    
})
 

.controller('FilmTitleCtrl', function($scope,$stateParams,FilmService) {
    $scope.film = {};
    
    FilmService.getFilm($stateParams.id).then(function(res) {
        $scope.film = res;  
    });
    
})

