'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives', 'LocalStorageModule'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('tab.discover', {
        url: '/discover',
        views: {
            'tab-discover': {
                templateUrl: 'templates/tab-discover.html',
                controller: 'DiscoverCtrl'
            }
        }
    })

    .state('tab.plan', {
        url: '/home/plan',
        views: {
            'tab-home': {
                templateUrl: 'templates/plan.html',
                controller: 'PlanCtrl'
            }
        }
    })

    .state('tab.plan-logic', {
        url: '/home/plan-logic/:id/:name',
        views: {
            'tab-home': {
                templateUrl: 'templates/plan-logic.html',
                controller: 'PlanLogicCtrl'
            }
        }
    })

    .state('tab.act', {
        url: '/discover/act',
        views: {
            'tab-discover': {
                templateUrl: 'templates/act.html',
                controller: 'ActCtrl'
            }
        }
    })

    .state('tab.act-detail', {
        url: '/discover/act/:id',
        views: {
            'tab-discover': {
                templateUrl: 'templates/act-detail.html',
                controller: 'ActDetailCtrl'
            }
        }
    })

    .state('tab.game', {
        url: '/discover/game',
        views: {
            'tab-discover': {
                templateUrl: 'templates/game.html',
                controller: 'GameCtrl'
            }
        }
    })

    .state('tab.game-detail', {
        url: '/discover/game/:id',
        views: {
            'tab-discover': {
                templateUrl: 'templates/game-detail.html',
                controller: 'GameDetailCtrl'
            }
        }
    })

    .state('tab.hospital', {
        url: '/discover/hospital',
        views: {
            'tab-discover': {
                templateUrl: 'templates/hospital.html',
                controller: 'HospitalCtrl'
            }
        }
    })

    .state('tab.hospital-detail', {
        url: '/discover/hospital/:id',
        views: {
            'tab-discover': {
                templateUrl: 'templates/hospital-detail.html',
                controller: 'HospitalDetailCtrl'
            }
        }
    })

    .state('tab.knowledge', {
        url: '/discover/knowledge',
        views: {
            'tab-discover': {
                templateUrl: 'templates/knowledge.html',
                controller: 'KnowledgeCtrl'
            }
        }
    })

    .state('tab.knowledge-detail', {
        url: '/discover/knowledge/:id',
        views: {
            'tab-discover': {
                templateUrl: 'templates/knowledge-detail.html',
                controller: 'KnowledgeDetailCtrl'
            }
        }
    })

    .state('tab.medicine', {
        url: '/discover/medicine',
        views: {
            'tab-discover': {
                templateUrl: 'templates/medicine.html',
                controller: 'MedicineCtrl'
            }
        }
    })

    .state('tab.medicine-detail', {
        url: '/discover/medicine/:id',
        views: {
            'tab-discover': {
                templateUrl: 'templates/medicine-detail.html',
                controller: 'MedicineDetailCtrl'
            }
        }
    })

    .state('tab.story', {
        url: '/discover/story',
        views: {
            'tab-discover': {
                templateUrl: 'templates/story.html',
                controller: 'StoryCtrl'
            }
        }
    })

    .state('tab.story-detail', {
        url: '/discover/story/:id',
        views: {
            'tab-discover': {
                templateUrl: 'templates/story-detail.html',
                controller: 'StoryDetailCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

})


.config(function($httpProvider) {
    // 头部配置  
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript, */*; q=0.01';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // $httpProvider.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';


    /**  
     * 重写angular的param方法，使angular使用jquery一样的数据序列化方式  The workhorse; converts an object to x-www-form-urlencoded serialization.  
     * @param {Object} obj  
     * @return {String}  
     */
    var param = function(obj) {
        var query = '',
            name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest  
    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
})

.run(function($rootScope) {
    $rootScope.JAVA_URL = JAVA_URL;
})
