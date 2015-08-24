'use strict';
angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {})

.controller('HomeCtrl', function($scope) {})

.controller('DiscoverCtrl', function($scope) {})

.controller('PlanCtrl', function($scope, PlanServ) {
    PlanServ.reload().then(function(resp) {
        $scope.table = resp;
    })
})

.controller('PlanLogicCtrl', function($scope, $stateParams, PlanServ) {
    $scope.tit = $stateParams.name;
    $scope.currDate = Date.now();
    $scope.setDate = new Date(Date.now() + 3600*24*7*2*1000);
    var _logicList = [];
    PlanServ.reloadLogic($stateParams.id).then(function(resp) {
        _logicList = JSON.parse(resp[0].optionData);
        $scope.logic = _findLogic('1');
        $scope.logic.choice = 0;
    })

    $scope.next = function() {
        var nextTitNum = $scope.logic.titNum + '.' + $scope.logic.choice
        $scope.logic = _findLogic(nextTitNum);
        $scope.logic.choice = 0;
    }

    $scope.prev = function() {
        var prevTitNum = $scope.logic.titNum.substr(0, $scope.logic.titNum.lastIndexOf('.'));
        $scope.logic = _findLogic(prevTitNum);
        $scope.logic.choice = 0;
    }

    $scope.submit = function() {
        document.getElementById('referralDate').focus()
    }
    
    function _findLogic(titNum) {
        for(var i in _logicList) {
            if (titNum === _logicList[i].titNum) {
                return _logicList[i];
            }
        }
    }
})

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
