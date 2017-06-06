angular
.module('PotatoApp')
.controller('TeamsNewCtrl', TeamsNewCtrl);

TeamsNewCtrl.$inject = ['Team', '$state', 'CurrentUserService'];
function TeamsNewCtrl(Team, $state, CurrentUserService){
  const vm  = this;
  vm.create = teamsCreate;
  // vm.user   = CurrentUserService.currentUser;


  function teamsCreate(){
    // if (vm.taskForm.$valid) {
    //   vm.task.createdBy = vm.user._id;
    Team
    .save(vm.team)
    .$promise
    .then(() => {
      // $rootScope.$broadcast('teamCreated');
      $state.go('teams');
    })
    .catch(err => console.log(err));
  }
}
// }
