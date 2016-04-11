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
    $scope.queryNotice1=queryNotice1;
    $scope.queryNotice2=queryNotice2;
    init();
    function init() {
      queryNotice1();
      queryNotice2();
    }

    function selectCat(cat){
      $scope.category=cat;
    }

    function queryNotice1(){
    var query = new AV.Query('notice');
    query.equalTo('attribute', '1');
    query.find().then(function(items) {
        $scope.items=items;
        $scope.$digest();
      console.log(items);
    }, function(error) {
      console.log('Error: ' + error.code + ' ' + error.message);
    });
    }

    function queryNotice2(){
      var query = new AV.Query('notice');
      query.equalTo('attribute', '2');
      query.find().then(function(data) {
        $scope.data=data;
        $scope.$digest();
        console.log(data);
      }, function(error) {
        console.log('Error: ' + error.code + ' ' + error.message);
      });
    }

  }
})();
