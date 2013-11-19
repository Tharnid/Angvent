angvent.factory('eventData', function() {
	return {

		event: 
 { 
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
					duration: 1,
					level: 'Beginning',
					abstract: 'Dragée jelly-o gummies gummi bears sesame snaps gummies.',
					upVoteCount: 0
				},
				{
					name: 'Scope and Stuff',
					creatorName: 'Wedge Antilles',
					duration: 2,
					level: 'Intermediate',
					abstract: 'Chocolate cake dessert cookie applicake oat cake dessert jelly beans.',
					upVoteCount: 0
				},
				{
					name: 'Data Binding',
					creatorName: 'Corran Horn',
					duration: 4,
					level: 'Advanced',
					abstract: 'Pie applicake fruitcake biscuit apple pie sesame snaps oat cake.',
					upVoteCount: 0
				},

				{
					name: 'Filtering Fun',
					creatorName: 'Nom Anor',
					duration: 3,
					level: 'Beginning',
					abstract: 'Cheesecake I love wafer I love I love',
					upVoteCount: 0
				},
				{
					name: 'Galatic Events with ngClick',
					creatorName: 'Yomin Carr',
					duration: 2,
					level: 'Advanced',
					abstract: 'Caramels tootsie roll pudding oat cake chocolate bar gummi bears candy cookie',
					upVoteCount: 0
				}
			]
		}
	};
});