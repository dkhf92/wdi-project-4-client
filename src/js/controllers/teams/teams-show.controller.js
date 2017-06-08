angular
.module('PotatoApp')
.controller('TeamsShowCtrl', TeamsShowCtrl);

TeamsShowCtrl.$inject = ['Team', '$state', '$stateParams'];
function TeamsShowCtrl(Team, $state, $stateParams){
  const vm  = this;

  getTeam();

  function getTeam() {
    Team.get({ id: $stateParams.id })
    .$promise
    .then(team => {
      console.log(team);
      vm.teams = team;
    });
  }

  vm.request = function(id) {
    Team.request({ team_id: id })
    .$promise
    .then(data => {
      console.log(data);
    });
  };

  vm.accept = function(request) {
    Team.accept({ team_id: request.team_id, id: request.id })
    .$promise
    .then(data => {
      console.log(data);
      getTeam();
    });
  };

  vm.reject = function(request) {
    Team.reject({ team_id: request.team_id, id: request.id })
    .$promise
    .then(data => {
      console.log(data);
      getTeam();
    });
  };

  vm.delete = teamsDelete;
  function teamsDelete(team) {
    Team
    .remove({ id: team.id })
    .$promise
    .then(() => {
      $state.go('teams');
    });
  }

  // *****************************
//   requestedTeams();
//   function requestedTeams() {
//     Team
//     .query()
//     .$promise
//     .then(tasks => {
//       const requested = [];
//       tasks.forEach(team => {
//         if(team.requestedBy.find(creator => creator.user._id === vm.user._id)) {
//           requested.push(team);
//         }
//       });
//       vm.requested = requested;
//     });
//   }
//   assignedTeams();
//   function assignedTeams() {
//     Team
//     .query()
//     .$promise
//     .then(teams => {
//       const assigned = [];
//       teams.forEach(team => {
//         if(team.assignedTo.find(creator => creator === vm.user._id)) {
//           assigned.push(team);
//         }
//       });
//       vm.assigned = assigned;
//     });
//   }
}
