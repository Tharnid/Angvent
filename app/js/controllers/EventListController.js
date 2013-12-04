'use strict';

angvent.controller('EventListController',
    function EventListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
);