'use strict';

angvent.directive('upvote', function() {
	return {
		restrict: 'E', // E = elements A = attribute C = class 
                // M = comment
		replace: true,
		templateUrl: '/templates/directives/upvote.html',
        // scope: {
        // 	event: "=event" // has to match attribute on your html page
        // }		
        scope: {
        	upvote: "&",
        	downvote: "@",
        	count: "="
        }

	}
});