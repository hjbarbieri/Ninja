'use strict';

angular.module('spBlogger',['ui.router','postModule','adminModule','ngResource']).run(['$state',function($state){
	$state.go('allPosts');
}]);

