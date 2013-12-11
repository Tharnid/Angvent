'use strict';

angvent.directive('eventThumbnail', function() {
	return {
		restrict: 'E', // E = elements
		replace: true,
		templateUrl: '/templates/directives/eventThumbnail.html',
        scope: {
        	event: "=event" // has to match attribute on your html page
        }		
	}
});