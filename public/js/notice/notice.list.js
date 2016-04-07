/**
 * Created by bin on 2016/4/7.
 */
(function () {
  'use strict';

  angular
    .module('notice.list', [])
    .controller('NoticeListCtrl', NoticeListCtrl);

  NoticeListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function NoticeListCtrl($scope) {
    $scope.init = init;

    init();

    function init() {
    }

  }
})();
