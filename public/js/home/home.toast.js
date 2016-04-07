/**
 * Created by bin on 2016/4/5.
 */
(function () {
  'use strict';

  angular
    .module('home.toast', [])
    .controller('HomeToastCtrl', HomeToastCtrl);

  HomeToastCtrl.$inject = ['$scope', '$interval'];

  /* @ngInject */
  function HomeToastCtrl($scope, $interval) {
    $scope.init = init;
    //默认toast状态不显示（状态为0时不显示，为1显示）
    $scope.toastStatus = 0;
    $scope.toast = toast;

    init();

    function init() {
    }

    //toast控制器
    function toast() {
      $scope.toastStatus = 1;

      $interval(function () {
        $scope.toastStatus = 0;
      }, 2000, 1);
    }

  }
})();
