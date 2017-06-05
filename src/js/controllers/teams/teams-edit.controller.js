angular
.module('PotatoApp')
.controller('TeamsEditCtrl', TeamsEditCtrl);

TeamsEditCtrl.$inject = ['$stateParams', 'Team', '$state'];
function TeamsEditCtrl($stateParams, Team, $state) {
  const vm  = this;
  vm.team   = Team.get($stateParams);
  vm.update = teamsUpdate;

  console.log(vm.team);

  // vm.postcodeValidate = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;

  function teamsUpdate() {
    // if (vm.editForm.$valid) {
    Team
    .update({id: $stateParams.id }, vm.team)
    .$promise
    .then(() => {
      $state.go('teams');
    });
  }
  // }
}
