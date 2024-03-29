var soundCloudQ = angular.module('ngSoundCloudViz.home', [
    'ui.router',
    'plusOne'
  ]);
soundCloudQ.factory('soundCloudService', [
  '$q',
  function ($q) {
    var deferred = $q.defer();
    var soundCloudAPI = {};
    soundCloudAPI.getDefault = function () {
      SC.initialize({ client_id: 'b861cf4f67c435a1183dc13112b0f56f' });
      SC.get('/tracks', { q: 'joydivision' }, function (tracks) {
        deferred.resolve(tracks);
      });
      return deferred.promise;
    };
    soundCloudAPI.getByQuery = function ($scope) {
      SC.initialize({ client_id: 'b861cf4f67c435a1183dc13112b0f56f' });
      SC.get('/tracks', { q: $scope.tracksearch }, function (tracks) {
        setTimeout(function () {
          $scope.$apply(function () {
            deferred.resolve(tracks);
            $scope.tracks = tracks;
            setTimeout(buildPlanes, 500);
          });
        }, 5);
      });
      return deferred.promise;
    };
    return soundCloudAPI;
  }
]);
soundCloudQ.config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'main': {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data: { pageTitle: 'glambox::soundcloud::visualizer::glam::threejs::' }
    });
  }
]).controller('HomeCtrl', [
  '$scope',
  'soundCloudService',
  'playIDService',
  function HomeController($scope, soundCloudService, playIDService) {
    try {
      jQuery(rendererCSS.domElement).show();
      soundAPI.destroy();
      window.camera = window.scene = window.rendererGL = window.postprocessor = window.sound = window.soundAPI = window.webaudio = window.data = window.processingMat = null;
      jQuery('canvas').remove();
    } catch (e) {
      jQuery('canvas').remove();
    }
    soundCloudService.getDefault().then(function (data) {
      if ($scope.$parent.tracksearch === undefined) {
        $scope.tracks = data;
        setTimeout(init, 500);
      } else {
        $scope.tracks = [];
        $scope.tracksearch = $scope.$parent.tracksearch;
        soundCloudService.getByQuery($scope);
        $scope.tracksearch = '';
      }
    });
    $scope.$on('grabSound', function ($value) {
      console.log($value.targetScope.tracksearch);
      $scope.tracks = [];
      if ($value.targetScope.tracksearch) {
        $scope.tracks = [];
        $scope.tracksearch = $value.targetScope.tracksearch;
        soundCloudService.getByQuery($scope);
        $scope.tracksearch = '';
      }
    });
    $scope.goVisualize = function (id) {
      $scope.go('/play');
      console.log(id);
      $scope.soundid = id;
      playIDService.setID(id);
    };
  }
]);