/**
 * Created by bin on 2016/4/5.
 */
(function () {
  'use strict';

  angular
    .module('account.list', [])
    .controller('AccountListCtrl', AccountListCtrl);

  AccountListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function AccountListCtrl($scope) {
    $scope.init = init;
    //默认弹窗状态不显示（状态为0时不显示，为1显示）
    $scope.dialogStatus = 0;
    $scope.showDialog = showDialog;
    $scope.hideDialog = hideDialog;

    init();

    function init() {
    }

    //显示弹窗
    function showDialog() {
      $scope.dialogStatus = 1;
    }

    //隐藏弹窗
    function hideDialog() {
      $scope.dialogStatus = 0;
    }

  }
})();
