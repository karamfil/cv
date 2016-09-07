$ !->
	# $ \#skills .on \click \h3 !->
	# 	$ @ .next!slideToggle!
	
	$ \.projects .on \click 'h6 i' !->
		q = $ @	.toggleClass 'fa-plus-square-o fa-minus-square-o'
			.parent! .siblings \.cnt .slideToggle! .end!
			.parent! .siblings!
				.find '.fa-minus-square-o' .toggleClass 'fa-plus-square-o fa-minus-square-o'
					.parent!.siblings \.cnt .slideToggle!
					
		console.log(q)
		
# 	.find \.skillset .hide!

Base_Controller = !($scope)->
	$scope.range = (n)-> [i for i from 1 to n]

Details_Controller		= !($scope)-> $scope.data = DATA.details
Education_Controller	= !($scope)-> $scope.data = DATA.education
Events_Controller		= !($scope)-> $scope.data = DATA.events
Awards_Controller		= !($scope)-> $scope.data = DATA.awards
Skills_Controller		= !($scope)-> $scope.data = DATA.skills
Experience_Controller	= !($scope)-> $scope.data = DATA.experience
