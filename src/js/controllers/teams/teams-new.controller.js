angular
.module('PotatoApp')
.controller('TeamsNewCtrl', TeamsNewCtrl);

TeamsNewCtrl.$inject = ['Team', '$state', 'CurrentUserService', '$location'];
function TeamsNewCtrl(Team, $state, CurrentUserService, $location){
  const vm  = this;
  vm.create = teamsCreate;
  // vm.user   = CurrentUserService.currentUser;


  function teamsCreate(){
    // if (vm.taskForm.$valid) {
    //   vm.task.createdBy = vm.user._id;
    Team
    .create(vm.team)
    .$promise
    .then(team => {
      // $rootScope.$broadcast('teamCreated');
      $location.path(`/teams/all/${team.id}`);
      console.log(vm.team);
      // $state.go('teams');
    })
    .catch(err => console.log(err));
  }
}
// }
