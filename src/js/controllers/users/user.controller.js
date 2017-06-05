angular
.module('PotatoApp')
.controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$http', 'CurrentUserService', '$state'];
function UserCtrl($http, CurrentUserService, $state){
  const vm = this;

  $http
  .get('http://localhost:3000/api/users')
  .then(response => {
    vm.users = response.data;

    console.log(vm.users);

    vm.logout = () => {
      CurrentUserService.removeUser();
      $state.go('login');
    };
  });
}
