'use strict';

var angvent = angular.module('Angvent', ['ngResource'])
    .config(function ($routeProvider, $locationProvider) { // , $locationProvider
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });

        $routeProvider.when('/event/:eventId',
            {
                // using route service
                // foo:'bar',
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            });        

        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    });
