angular.module('directivePractice')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function( $scope, lessonService ) {
      $scope.getSchedule = lessonService.getSchedule();

    },
    link: function( scope, element, attributes ) {

      scope.getSchedule.then(function( response ) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay) {
            if(scheduleDay.lesson === scope.lesson) {
              scope.check = true;
              scope.lessonDay = scheduleDay.weekday;
              return;
            }
        })
      });

    }
  }

});
