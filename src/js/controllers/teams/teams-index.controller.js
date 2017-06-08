angular
.module('PotatoApp')
.controller('TeamsIndexCtrl', TeamsIndexCtrl);

TeamsIndexCtrl.$inject = ['Team', 'CurrentUserService', '$state', 'filterFilter', '$rootScope'];
function TeamsIndexCtrl(Team, CurrentUserService, $state, filterFilter, $rootScope){
  const vm  = this;
  // vm.test   = 'hello';
  // vm.delete = teamsDelete;
  // vm.teams = Team.query();

  vm.button = 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib no-underline';

  Team
  .query()
  .$promise
  .then(teams => {
    vm.teams = teams;
    console.log(teams);
  });

  // function teamsDelete(activity) {
  //   Team
  //   .remove({ id: activity._id })
  //   .$promise
  //   .then(() => {
  //     $state.go('teamsIndex');
  //   });
  // }
  //
  // if(!vm.user) {
  //   $rootScope.$on('loggedIn', () => {
  //     vm.user = CurrentUserService.currentUser;
  //     filterTeams();
  //   });
  // } else {
  //   filterTeams();
  // }
  //
  //
  // function filterTeams() {
  //   createdTeams();
  //   availableTeams();
  //   requestedTeams();
  //   assignedTeams();
  // }
  // $rootScope.$on('teamCreated', () => {
  //   filterTeams();
  // });
  //
  // function availableTeams() {
  //   const params = { createdBy: '!' + vm.user._id };
  //   Team
  //   .query()
  //   .$promise
  //   .then(teams => {
  //     const all = filterFilter(teams, params);
  //     const available = [];
  //     all.forEach(team => {
  //       if (team.requestedBy.length === 0) {
  //         available.push(team);
  //       } else {
  //         if (team.requestedBy.find(x => x.user._id === vm.user._id)) {
  //           console.log('Team already requested by user ', team);
  //         } else available.push(team);
  //       }
  //     });
  //     vm.available = available;
  //   });
  // }
  //
  // function createdTeams() {
  //   const params = { createdBy: vm.user._id };
  //   Team
  //   .query()
  //   .$promise
  //   .then(teams => {
  //     vm.created = filterFilter(teams, params);
  //   });
  // }
  //
  // function requestedTeams() {
  //   Team
  //   .query()
  //   .$promise
  //   .then(teams => {
  //     const requested = [];
  //     teams.forEach(team => {
  //       if(team.requestedBy.find(x => x.user._id === vm.user._id)) {
  //         requested.push(team);
  //       }
  //     });
  //     vm.requested = requested;
  //   });
  // }
  //
  // function assignedTeams() {
  //   Team
  //   .query()
  //   .$promise
  //   .then(teams => {
  //     const assigned = [];
  //     teams.forEach(team => {
  //       if(team.assignedTo.find(x => x === vm.user._id)) {
  //         assigned.push(team);
  //       }
  //     });
  //     vm.assigned = assigned;
  //   });
  // }

}
