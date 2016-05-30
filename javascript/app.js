// defining the app module of the project
angular.module('moviesDBApp', ['ngRoute','movieDBControllers','movieDBDirectives','movieDBServices'])
.constant("myMovieConfig", {
        "moviesEndpoint" : "https://api.themoviedb.org/3/movie",
        "apiKey": "e5d104657d7867a0f04fa5180fd173dd"
    })
.config(function($routeProvider) {
		 
		$routeProvider
		  .when('/',{
		  		templateUrl:'templates/home.html',
		  		controller:'HomeController'
		  })
		  .when('/popular', {
		  	templateUrl: 'templates/movies.html',
		  	controller: 'MovieListController'
		  })
		  .when('/upcoming', {
		  	templateUrl: 'templates/movies.html',
			controller: 'MovieUpcomingController'
		  })
		  .when('/topRated', {
		  	templateUrl: 'templates/movies.html',
			controller: 'MovieTopRatedController'
		  })
		  .when("/nowPlaying", {
			templateUrl: "templates/movies.html",
			controller: "MovieNowPlayingController"
		})
		  .when('/movie/:movieId', {
                 templateUrl: 'templates/movieDetails.html',
                 controller: 'MovieDetailsController'
            })
		  .when("/error/:message/:status",{
		  	templateUrl:"templates/error.html",
		  	controller: "MovieErrorController"
		  })

		  .otherwise({redirectTo: '/'}); 
	});