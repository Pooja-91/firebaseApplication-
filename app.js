
 var app = angular.module("adminApp", ['firebase','ngRoute']);

/*app.controller("TopController", [ '$scope', '$timeout', function($scope, $timeout) {
    $scope.loaded = false;    
    $scope.title = "This is an App";

    $timeout(function() { $scope.loaded = true; }, 5000);
}]);*/
 
        // click on the overlay to remove it
        //$('#overlay').click(function() {
        //    $(this).remove();
        //});

        
  
app.config(function($routeProvider){
	$routeProvider
	.when('/addSports', {
          templateUrl: 'view/addSports.html',
          controller: 'addSportsController'
        })
        .when('/addEvents', {
          templateUrl: 'view/addEvents.html',
          controller: 'addEventsController'
        })
	.when('/addCountry', {
          templateUrl: 'view/addCountry.html',
          controller: 'addCountryController'
        })
	.when('/editSports', {
          templateUrl: 'view/editSports.html',
          controller: 'editSportsController'
        })
    .when('/editEvents', {
          templateUrl: 'view/editEvents.html',
          controller: 'editEventsController'
        })
    .when('/editCountry', {
          templateUrl: 'view/editCountry.html',
          controller: 'editCountryController'
        })
    .when('/removeCountry', {
          templateUrl: 'view/removeCountry.html',
          controller: 'removeCountryControllers'
        })
    .when('/removeSports', {
          templateUrl: 'view/removeSports.html',
          controller: 'removeSportsController'
        })
    .when('/removeEvents', {
          templateUrl: 'view/removeEvents.html',
          controller: 'removeEventsController'
        })
     .when('/ticketSummary', {
          templateUrl: 'view/ticketSummary.html'
          //controller: 'ticketSummaryController'
        })
	    .otherwise({
          redirectTo: '/'
        });
    
});
	