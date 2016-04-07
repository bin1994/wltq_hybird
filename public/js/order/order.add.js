/**
 * Created by bin on 2016/3/30.
 */
(function () {
  'use strict';

  angular
    .module('order.add', [])
    .controller('OrderAddCtrl', OrderAddCtrl);

  OrderAddCtrl.$inject = ['$scope'];

  /* @ngInject */
  function OrderAddCtrl($scope) {
    //$scope.focusing = ''; //获得焦点时增加样式weui_search_focusing
    //$scope.isSearchShow = false; //是否显示搜索框的下拉列表
    $scope.searchInput = ''; //搜索内容清空
    //$scope.searchText = true; //是否显示默认状态下的搜索条样式
    //
    //
    //$scope.searchClickEvent = function () {
    //  $scope.searchText = false;
    //  document.getElementById('searchInput').focus();
    //}
    //
    //$scope.searchFocusEvent = function () {
    //  $scope.focusing = 'weui_search_focusing';
    //}
    //
    //$scope.searchBlurEvent = function () {
    //  $scope.searchText = true;
    //  $scope.isSearchShow = false;
    //  $scope.focusing = '';
    //  $scope.searchInput = '';
    //}
    //
    //$scope.searchKeyupEvent = function () {
    //  if ($scope.searchInput) {
    //    $scope.isSearchShow = true;
    //  } else {
    //    $scope.isSearchShow = false;
    //  }
    //}

  }
})();
