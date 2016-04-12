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

  NoticeDetailCtrl.$inject = ['$scope','$state'];

  /* @ngInject */
  function NoticeDetailCtrl($scope,$state) {
    var id = $state.params.id;
    $scope.init = init;
    $scope.query=query;

    init();

    function init() {
      query();
    }

    function query(){
      var query = new AV.Query('notice');
      query.equalTo('objectId', id);
      query.first().then(function(data) {
        $scope.data=data;
        $scope.$digest();
      }, function(error) {
        console.log('Error: ' + error.code + ' ' + error.message);
      });
    }

  }
})();
