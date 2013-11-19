'use-strict';

angvent.controller('EventController', 
	function EventController($scope, eventData) {
		
		// sort order for sessions
		$scope.sortorder = 'name';

		// $scope.snippet = '<span style="color:red">Hi there!!!</span>';

		// boolean value or ng hide/show
		$scope.boolValue = true;

		// ngStyle stuff
		// $scope.mystyle = {color: 'red'};

		// ngClass directive
		// $scope.myclass = "blue";

		// Disabling a button
		// $scope.buttonDisabled = true;

		$scope.event = eventData.event;

		// up votes
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};

		// down vote 
		$scope.downVoteSession = function(session) {
			session.downVoteCount--;
		};
	}

);

