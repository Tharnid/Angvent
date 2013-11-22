'use strict';

var angvent = angular.module('Angvent', ['ngResource', 'ngCookies'])
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3});
    })
