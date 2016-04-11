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
    $scope.selectCat=selectCat;
    $scope.category=1;


    init();

    function init() {
    }

    function selectCat(cat){
      $scope.category=cat;
    }

  }
})();
