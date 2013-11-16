'use-strict';

angvent.controller('EventController', 
	function EventController($scope) {
		$scope.event = { 
			name: 'Angular Bootcamp',
			date: '1/1/2014',
			time: '10:30 am',
			location: {
				address: 'Tharnbox Inc',
				city: 'Odon',
				state: 'IN'
			},
			imageUrl: '/img/AngularJS-Shield-small.png'
		}
	}

);

