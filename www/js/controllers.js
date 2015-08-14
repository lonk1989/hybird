'use strict';
angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {})

.controller('HomeCtrl', function($scope) {})

.controller('DiscoverCtrl', function($scope) {})

.controller('ActCtrl', function($scope, DiscoverServ) {
    DiscoverServ.reload('00', 1, 10).then(function(resp) {
        $scope.table = resp;
    })
})

.controller('ActDetailCtrl', function($scope, $stateParams, DiscoverServ) {
  DiscoverServ.reloadDetail($stateParams.id).then(function(resp) {
        document.getElementById('remark').innerHTML = resp.remark;
    })
})

.controller('GameCtrl', function($scope, DiscoverServ) {
      DiscoverServ.reload('03', 1, 10).then(function(resp) {
        $scope.table = resp;
    })
})

.controller('GameDetailCtrl', function($scope, $stateParams, DiscoverServ) {
  DiscoverServ.reloadDetail($stateParams.id).then(function(resp) {
        document.getElementById('remark').innerHTML = resp.remark;
    })
})

.controller('HospitalCtrl', function($scope, DiscoverServ) {
      DiscoverServ.reload('06', 1, 10).then(function(resp) {
        $scope.table = resp;
    })
})

.controller('HospitalDetailCtrl', function($scope, $stateParams, DiscoverServ) {
    DiscoverServ.reloadDetail($stateParams.id).then(function(resp) {
        document.getElementById('remark').innerHTML = resp.remark;
    })
})

.controller('KnowledgeCtrl', function($scope, DiscoverServ) {
      DiscoverServ.reload('04', 1, 10).then(function(resp) {
        $scope.table = resp;
    })
})

.controller('KnowledgeDetailCtrl', function($scope, $stateParams, DiscoverServ) {
    DiscoverServ.reloadDetail($stateParams.id).then(function(resp) {
        document.getElementById('remark').innerHTML = resp.remark;
    })
})

.controller('MedicineCtrl', function($scope, DiscoverServ) {
      DiscoverServ.reload('02', 1, 10).then(function(resp) {
        $scope.table = resp;
    })
})

.controller('MedicineDetailCtrl', function($scope, $stateParams, DiscoverServ) {
    DiscoverServ.reloadDetail($stateParams.id).then(function(resp) {
        document.getElementById('remark').innerHTML = resp.remark;
    })
})

.controller('StoryCtrl', function($scope, DiscoverServ) {
      DiscoverServ.reload('05', 1, 10).then(function(resp) {
        $scope.table = resp;
    })
})

.controller('StoryDetailCtrl', function($scope, $stateParams, DiscoverServ) {
    DiscoverServ.reloadDetail($stateParams.id).then(function(resp) {
        document.getElementById('remark').innerHTML = resp.remark;
    })
})
