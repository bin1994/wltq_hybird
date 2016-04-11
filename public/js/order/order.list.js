/**
 * Created by bin on 2016/4/5.
 */
(function () {
  'use strict';

  angular
    .module('order.list', [])
    .controller('OrderListCtrl', OrderListCtrl);

  OrderListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function OrderListCtrl($scope) {
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
