angular
.module('PotatoApp')
.factory('Team', Team);

Team.$inject = ['$resource'];
function Team($resource){

  return $resource('/teams/:id', { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
