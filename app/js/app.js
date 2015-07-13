'use strict';

angular.module('spBlogger',['ui.router','postModule','adminModule']).run(['$state',function($state){
	$state.go('allPosts');
}]);