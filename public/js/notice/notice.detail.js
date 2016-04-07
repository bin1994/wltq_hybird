/**
 * Created by bin on 2016/4/7.
 */
/**
 * Created by bin on 2016/4/7.
 */
(function () {
  'use strict';

  angular
    .module('notice.detail', [])
    .controller('NoticeDetailCtrl', NoticeDetailCtrl);

  NoticeDetailCtrl.$inject = ['$scope'];

  /* @ngInject */
  function NoticeDetailCtrl($scope) {
    $scope.init = init;

    init();

    function init() {
    }

  }
})();
