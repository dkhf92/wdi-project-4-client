angular
.module('PotatoApp')
.controller('TeamsEditCtrl', TeamsEditCtrl);

TeamsEditCtrl.$inject = ['$stateParams', 'Team', '$state'];
function TeamsEditCtrl($stateParams, Team, $state) {
  const vm  = this;
  vm.team   = Team.get({ id: $stateParams.id });
  vm.update = teamsUpdate;

  function teamsUpdate() {
    Team
    .update({id: $stateParams.id }, vm.team)
    .$promise
    .then(() => {
      $state.go('teams');
    })
    .catch(err => console.log(err));
  }
}
