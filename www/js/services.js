'use strict';
angular.module('starter.services', [])

.factory('UserServ', function() {
    var userInfo = Device.getAuth();
    
})

.factory('PlanServ', function($http, $q, $ionicPopup, $ionicLoading) {
    return {
        reload: function() {
            var deferred = $q.defer();
            $http.post(JAVA_URL + 'product/app/productList.htm', {
                    sign: '6c362b62fedb0eaa864dc7082ce640fb'
                })
                .success(function(resp) {
                    if (resp.code === '0') {
                        deferred.resolve(resp.data);
                    } else {
                        deferred.reject(resp)
                        $ionicPopup.alert({
                            title: '提示',
                            template: resp.message
                        });
                    }
                })
                .error(function(resp) {
                    deferred.reject(resp)
                    $ionicPopup.alert({
                        title: '网络不给力',
                        template: '<a style="text-align:center;" href="javascript:location.reload()">点击这里刷新再试试</a>',
                        okText: '取消'
                    });
                })
            return deferred.promise;
        },
        reloadLogic: function(id) {
            var deferred = $q.defer();
            $ionicLoading.show();
            $http.post(JAVA_URL + 'product/app/findOptionData.htm', {
                    sign: '8c2f642acc3fe64b72a6fe1065d07d57',
                    productCode: id
                })
                .success(function(resp) {
                    if (resp.code === '0') {
                        deferred.resolve(resp.data);
                    } else {
                        deferred.reject(resp)
                        $ionicPopup.alert({
                            title: '提示',
                            template: resp.message
                        });
                    }
                    $ionicLoading.hide();
                })
                .error(function(resp) {
                    deferred.reject(resp)
                    $ionicPopup.alert({
                        title: '网络不给力',
                        template: '<a style="text-align:center;" href="javascript:location.reload()">点击这里刷新再试试</a>',
                        okText: '取消'
                    });
                    $ionicLoading.hide();
                })
            return deferred.promise;
        },
        joinPlan: function(visitTime, resultJson) {
            var deferred = $q.defer();
            $ionicLoading.show();
            $http.post(JAVA_URL + 'product/app/joinTreatmentPlanNew.htm', {
                    sign: 'be8f9704bd12f7f5444dc013f4faa15b',
                    auth: 'f182UggBVAAFBVRWBFVQAVAFVVZTCQcCBwdTVAIAVQNUPgdRCwBVAAYDV1YMPgQAB1QEWgAJAgZQUwcHXARVBlsABVReUlFVBgQAXgEO',
                    visitTime: visitTime,
                    resultJson: resultJson
                })
                .success(function(resp) {
                    if (resp.code === '0') {
                        deferred.resolve(resp.data);
                    } else {
                        deferred.reject(resp)
                        $ionicPopup.alert({
                            title: '提示',
                            template: resp.message
                        });
                    }
                    $ionicLoading.hide();
                })
                .error(function(resp) {
                    deferred.reject(resp)
                    $ionicPopup.alert({
                        title: '网络不给力',
                        template: '<a style="text-align:center;" href="javascript:location.reload()">点击这里刷新再试试</a>',
                        okText: '取消'
                    });
                    $ionicLoading.hide();
                })
            return deferred.promise;
        }
    }
})

.factory('DiscoverServ', function($http, $q, $ionicPopup, $ionicLoading) {
    return {
        reload: function(type, page, rows) {
            var deferred = $q.defer();
            $http.post(JAVA_URL + 'product/app/getDiscoveryList.htm', {
                    sign: '4e10e65631a48eca8708d2810436b0dd',
                    discoveryType: type,
                    page: page,
                    rows: rows
                })
                .success(function(resp) {
                    if (resp.code === '0') {
                        deferred.resolve(resp.data);
                    } else {
                        deferred.reject(resp)
                        $ionicPopup.alert({
                            title: '提示',
                            template: resp.message
                        });
                    }
                })
                .error(function(resp) {
                    deferred.reject(resp)
                    $ionicPopup.alert({
                        title: '网络不给力',
                        template: '<a style="text-align:center;" href="javascript:location.reload()">点击这里刷新再试试</a>',
                        okText: '取消'
                    });
                })
            return deferred.promise;
        },
        reloadDetail: function(id) {
            var deferred = $q.defer();
            $ionicLoading.show();
            $http.post(JAVA_URL + 'product/app/getSysSlideImageDetails.htm', {
                    sign: '272e1e032421156698cdcbb86227c049',
                    id: id
                })
                .success(function(resp) {
                    if (resp.code === '0') {
                        deferred.resolve(resp.data);
                    } else {
                        deferred.reject(resp)
                        $ionicPopup.alert({
                            title: '提示',
                            template: resp.message
                        });
                    }
                    $ionicLoading.hide();
                })
                .error(function(resp) {
                    deferred.reject(resp)
                    $ionicPopup.alert({
                        title: '网络不给力',
                        template: '<a style="text-align:center;" href="javascript:location.reload()">点击这里刷新再试试</a>',
                        okText: '取消'
                    });
                    $ionicLoading.hide();
                })
            return deferred.promise;
        }
    }
})
