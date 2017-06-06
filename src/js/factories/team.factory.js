angular
.module('PotatoApp')
.factory('Team', Team);

Team.$inject = ['API', '$resource'];
function Team(API, $resource){
  return $resource(`${API}/teams/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
