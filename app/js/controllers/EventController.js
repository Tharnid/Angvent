'use-strict';

angvent.controller('EventController', 
	function EventController($scope) {
		
		$scope.snippet = '<span style="color:red">Hi there!!!</span>';

		// boolean value or ng hide/show
		$scope.boolValue = true;

		// ngStyle stuff
		$scope.mystyle = {color: 'red'};

		// ngClass directive
		$scope.myclass = "blue";

		// Disabling a button
		$scope.buttonDisabled = true;

		$scope.event = { 
			name: 'Angular Bootcamp',
			date: '1/1/2014',
			time: '10:30 am',
			location: {
				address: 'Tharnbox Inc',
				city: 'Odon',
				state: 'IN'
			},
			imageUrl: '/img/AngularJS-Shield-small.png',
			sessions: [
				{
					name: 'Intro. to Directives',
					creatorName: 'Han Solo',
					duration: '1 hr',
					level: 'Beginning',
					abstract: 'Dragée jelly-o gummies gummi bears sesame snaps gummies.',
					upVoteCount: 0
				},
				{
					name: 'Scope and Stuff',
					creatorName: 'Wedge Antilles',
					duration: '1 hr',
					level: 'Intermediate',
					abstract: 'Chocolate cake dessert cookie applicake oat cake dessert jelly beans.',
					upVoteCount: 0
				},
				{
					name: 'Data Binding',
					creatorName: 'Corran Horn',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'Pie applicake fruitcake biscuit apple pie sesame snaps oat cake.',
					upVoteCount: 0
				}
			]
		}

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

