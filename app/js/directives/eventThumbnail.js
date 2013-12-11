'use strict';

angvent.directive('eventThumbnail', function() {
	return {
		restrict: 'E', // E = elements
		replace: true,
		templateUrl: '/templates/directives/eventThumbnail.html'
	}
});