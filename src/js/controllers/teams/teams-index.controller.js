angular
.module('PotatoApp')
.controller('TeamsIndexCtrl', TeamsIndexCtrl);

TeamsIndexCtrl.$inject = ['Team', 'CurrentUserService', '$state'];
function TeamsIndexCtrl(Team, CurrentUserService, $state){
  const vm  = this;
  // vm.test   = 'hello';
  // vm.delete = teamsDelete;
  // vm.teams = Team.query();

  Team
  .query()
  .$promise
  .then(teams => {
    vm.teams = teams;
    console.log(teams);
  });
}










// function teamsDelete(activity) {
//   Team
//   .remove({ id: activity._id})
//   .$promise
//   .then(() => {
//     $state.go('teams');
//   });
// }

  // if(!vm.user) {
  //   $rootScope.$on('loggedIn', () => {
  //     vm.user = CurrentUserService.currentUser;
  //     filterTasks();
  //   });
  // } else {
  //   filterTasks();
  // }
  //
  // function filterTasks() {
  //   createdTasks();
  //   availableTasks();
  //   requestedTasks();
  //   assignedTasks();
  // }
  // $rootScope.$on('taskCreated', () => {
  //   filterTasks();
  // });

  // function availableTasks() {
  //   const params = { createdBy: '!' + vm.user._id };
  //   Task
  //   .query()
  //   .$promise
  //   .then(tasks => {
  //     const all = filterFilter(tasks, params);
  //     const available = [];
  //     all.forEach(task => {
  //       if (task.requestedBy.length === 0) {
  //         available.push(task);
  //       } else {
  //         if (task.requestedBy.find(x => x.user._id === vm.user._id)) {
  //           console.log('Task already requested by user ', task);
  //         } else available.push(task);
  //       }
  //     });
  //     vm.available = available;
  //   });
  // }
  //
  // function createdTasks() {
  //   const params = { createdBy: vm.user._id };
  //   Task
  //   .query()
  //   .$promise
  //   .then(tasks => {
  //     vm.created = filterFilter(tasks, params);
  //   });
  // }
  //
  // function requestedTasks() {
  //   Task
  //   .query()
  //   .$promise
  //   .then(tasks => {
  //     const requested = [];
  //     tasks.forEach(task => {
  //       if(task.requestedBy.find(x => x.user._id === vm.user._id)) {
  //         requested.push(task);
  //       }
  //     });
  //     vm.requested = requested;
  //   });
  // }
  //
  // function assignedTasks() {
  //   Task
  //   .query()
  //   .$promise
  //   .then(tasks => {
  //     const assigned = [];
  //     tasks.forEach(task => {
  //       if(task.assignedTo.find(x => x === vm.user._id)) {
  //         assigned.push(task);
  //       }
  //     });
  //     vm.assigned = assigned;
  //   });
  // }
