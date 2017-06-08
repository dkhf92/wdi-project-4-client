angular
.module('PotatoApp')
.controller('TeamsNewCtrl', TeamsNewCtrl);

TeamsNewCtrl.$inject = ['Team', '$state', 'CurrentUserService'];
function TeamsNewCtrl(Team, $state, CurrentUserService){
  const vm  = this;
  vm.create = teamsCreate;

  function teamsCreate(){
    Team
    .save(vm.team)
    .$promise
    .then(() => {
      $state.go('teams');
    })
    .catch(err => console.log(err));
  }
}
