angular
.module('PotatoApp')
.controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$http', 'CurrentUserService', '$state', '$rootScope'];
function UserCtrl($http, CurrentUserService, $state, $rootScope){
  const vm = this;

  // CurrentUserService.getUser();
  // $rootScope.$on('LoggedIn', () => {
  //   vm.user = CurrentUserService.currentUser;
  //   vm.loggedIn = true;
  // });
  // vm.logout = () => {
  //   vm.loggedIn = false;
  //   CurrentUserService.removeUser();
  // };
  // $rootScope.$on('LoggedOut', () => {
  //   vm.user = null;
  //   $state.go('home');
  // });
  //
  // console.log('**********', vm.user);
}
