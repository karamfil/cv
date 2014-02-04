# $ !->

Base_Controller = !($scope)->
	$scope.range = (n)-> [i for i from 1 to n]

Details_Controller		= !($scope)-> $scope.data = DATA.details
Education_Controller	= !($scope)-> $scope.data = DATA.education
Events_Controller		= !($scope)-> $scope.data = DATA.events
Skills_Controller		= !($scope)-> $scope.data = DATA.skills
Experience_Controller	= !($scope)-> $scope.data = DATA.experience
