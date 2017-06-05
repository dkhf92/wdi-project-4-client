angular
.module('PotatoApp')
.controller('TeamsNewCtrl', TeamsNewCtrl);

TeamsNewCtrl.$inject = ['Team', '$state', 'CurrentUserService'];
function TeamsNewCtrl(Team, $state, CurrentUserService){
  const vm  = this;
  vm.create = teamCreate;
  vm.user   = CurrentUserService.currentUser;
  //   vm.postcodeValidate = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;


  function teamCreate(){
    // if (vm.taskForm.$valid) {
    //   vm.task.createdBy = vm.user._id;
    Team
    .save(vm.team)
    .$promise
    .then(() => {
      // $rootScope.$broadcast('teamCreated');
      $state.go('teams');
    });
  }
}
// }
