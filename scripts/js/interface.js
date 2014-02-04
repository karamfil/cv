var Base_Controller, Details_Controller, Education_Controller, Events_Controller, Skills_Controller, Experience_Controller;
Base_Controller = function($scope){
  $scope.range = function(n){
    var i$, i, results$ = [];
    for (i$ = 1; i$ <= n; ++i$) {
      i = i$;
      results$.push(i);
    }
    return results$;
  };
};
Details_Controller = function($scope){
  $scope.data = DATA.details;
};
Education_Controller = function($scope){
  $scope.data = DATA.education;
};
Events_Controller = function($scope){
  $scope.data = DATA.events;
};
Skills_Controller = function($scope){
  $scope.data = DATA.skills;
};
Experience_Controller = function($scope){
  $scope.data = DATA.experience;
};