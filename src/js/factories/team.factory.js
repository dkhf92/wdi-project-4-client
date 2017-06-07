angular
.module('PotatoApp')
.factory('Team', Team);

Team.$inject = ['API', '$resource'];
function Team(API, $resource){
  return $resource(`${API}/teams/:id`, { id: '@id'}, {
    'update': { method: 'PUT' },
    'request': {
      method: 'POST',
      params: { team_id: '@team_id' },
      url: `${API}/teams/:team_id/requests`
    },
    'accept': {
      method: 'GET',
      params: { team_id: '@team_id', id: '@id' },
      url: `${API}/teams/:team_id/requests/:id/accept`
    },
    'reject': {
      method: 'GET',
      params: { team_id: '@team_id', id: '@id' },
      url: `${API}/teams/:team_id/requests/:id/reject`
    },
    'cancel': {
      method: 'GET',
      params: { team_id: '@team_id', id: '@id' },
      url: `${API}/teams/:team_id/requests/:id/cancel`
    }
  });
}
