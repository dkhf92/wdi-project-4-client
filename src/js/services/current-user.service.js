angular
  .module('PotatoApp')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', 'User', '$rootScope' ];
function CurrentUserService(TokenService, User, $rootScope) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    if (decoded) {
      User
        .get({ id: decoded.id })
        .$promise
        .then(user => {
          self.currentUser = user;
          $rootScope.$broadcast('loggedIn');
        });
    }
  };

  self.removeUser = () => {
    self.currentUser = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
  };

  self.getUser();
}
