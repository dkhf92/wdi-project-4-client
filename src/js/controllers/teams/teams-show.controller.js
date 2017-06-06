angular
.module('PotatoApp')
.controller('TeamsShowCtrl', TeamsShowCtrl);

TeamsShowCtrl.$inject = ['Team', '$state', '$stateParams'];
function TeamsShowCtrl(Team, $state, $stateParams){
  const vm  = this;

  // vm.user = CurrentUserService.currentUser;
  // console.log(vm.user);
  // vm.team = Team.get($stateParams);

  Team.get({ id: $stateParams.id })
  .$promise
  .then(team => {
    console.log(team);
    vm.teams = team;
  });

  vm.delete = teamsDelete;
  function teamsDelete(team) {
    Team
    .remove({ id: team.id })
    .$promise
    .then(() => {
      $state.go('teams');
    });
  }
}
