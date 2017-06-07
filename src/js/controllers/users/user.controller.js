angular
.module('PotatoApp')
.controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$http', 'CurrentUserService', '$state', '$rootScope'];
function UserCtrl($http, CurrentUserService, $state, $rootScope){
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
    $state.go('login');
  };
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });
}
