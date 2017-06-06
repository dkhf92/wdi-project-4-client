angular
.module('PotatoApp')
.controller('TeamsEditCtrl', TeamsEditCtrl);

TeamsEditCtrl.$inject = ['$stateParams', 'Team', '$state', '$location'];
function TeamsEditCtrl($stateParams, Team, $state, $location) {
  const vm  = this;
  vm.team   = Team.get({ id: $stateParams.id });
  vm.update = teamsUpdate;

  // console.log(vm.team);

  function teamsUpdate() {
    // if (vm.editForm.$valid) {
    Team
    .update({id: $stateParams.id }, vm.team)
    .$promise
    .then(team => {
      $location.path(`/teams/all/${ team.id }`);
      // $state.go('teams');
    })
    .catch(err => console.log(err));
  }
  // }
}
