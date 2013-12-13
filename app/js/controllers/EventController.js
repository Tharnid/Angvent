'use-strict';

angvent.controller('EventController', 
    function EventController($scope, eventData, $routeParams, $route) {
        // eventData, $routeParams, 

        // sort order for sessions
         $scope.sortorder = 'name';

         $scope.event = eventData.getEvent($routeParams.eventId);
         // $scope.event = $route.current.locals.event;

         // $scope.event.then(
         //         function(event) {console.log(event); },
         //         function(response) {console.log(response);}
         //     );

         // outputting foo property in the console
         // console.log($route.current.foo);

         $scope.reload = function() {
            $route.reload();
         };
            
         

        // $scope.snippet = '<span style="color:red">Hi there!!!</span>';

        // boolean value or ng hide/show
        // $scope.boolValue = true;

        // ngStyle stuff
        // $scope.mystyle = {color: 'red'};

        // ngClass directive
        // $scope.myclass = "blue";

        // Disabling a button
        // $scope.buttonDisabled = true;

        // eventData.getEvent(function(event) {
        //  $scope.event = event;
        // });



        // up votes
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        // down vote 
        $scope.downVoteSession = function(session) {
            session.downVoteCount--;
        };

        // $scope.scrollToSession = function () {
        //  $anchorScroll();
        // }
    }

);



