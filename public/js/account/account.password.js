/**
 * Created by bin on 2016/4/6.
 */
(function () {
  'use strict';

  angular
    .module('account.password', [])
    .controller('AccountPasswordCtrl', AccountPasswordCtrl);

  AccountPasswordCtrl.$inject = ['$scope'];

  /* @ngInject */
  function AccountPasswordCtrl($scope) {
    $scope.init = init;

    init();

    function init() {
    }

  }
})();
