angular
.module('PotatoApp')
.controller('TeamsIndexCtrl', TeamsIndexCtrl);

TeamsIndexCtrl.$inject = ['Team', 'CurrentUserService', '$state', 'filterFilter', '$rootScope'];
function TeamsIndexCtrl(Team, CurrentUserService, $state, filterFilter, $rootScope){
  const vm  = this;
  
  vm.button = 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib no-underline';

  Team
  .query()
  .$promise
  .then(teams => {
    vm.teams = teams;
    console.log(teams);
  });
}
