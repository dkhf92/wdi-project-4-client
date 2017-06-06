angular
.module('PotatoApp')
.controller('TeamsEditCtrl', TeamsEditCtrl);

TeamsEditCtrl.$inject = ['$stateParams', 'Team', '$state'];
function TeamsEditCtrl($stateParams, Team, $state) {
  const vm  = this;
  vm.team   = Team.get({ id: $stateParams.id });
  // vm.task = Task.get($stateParams);
  vm.update = teamsUpdate;

  // console.log(vm.team);
  function teamsUpdate() {
    // if (vm.editForm.$valid) {
    Team
    .update({id: $stateParams.id }, vm.team)
    .$promise
    .then(() => {
      $state.go('teams');
    })
    .catch(err => console.log(err));
  }
  // }
}
