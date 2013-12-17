angvent.directive('repeatx', function() { // $compile
	return {

		    compile: function(element, attributes) {
            for (var i=0; i < Number(attributes.repeatx)-1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }

		// compile: function(scope, element, attributes, controller) {
		// 	for (var i=0; i < Number(attributes.repeatx)-1; i++) {
		// 		element.after($compile.element.clone().attr('repeat-x', 0)(scope));
		// 	}
			return function(scope, element, attributes, controller) {
				attributes.$observe('text', function(newValue) {
					if (newValue === 'Hello World') {
						element.css('color', 'red');
					}
				});
			}
		}

	};
});