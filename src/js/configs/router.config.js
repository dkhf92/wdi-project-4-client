angular
.module('PotatoApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  // .state('userIndex', {
  //   url: '/users',
  //   templateUrl: '/js/views/users.html',
  //   controller: 'UserCtrl',
  //   controllerAs: 'user'
  // })
  .state('teams', {
    url: '/teams',
    templateUrl: '/js/views/teams/index.html',
    controller: 'TeamsIndexCtrl',
    controllerAs: 'index'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  // })
  // .state('posts', {
  //   url: '/posts',
  //   templateUrl: '/js/views/posts/index.html',
  //   controller: 'postCtrl',
  //   controllerAs: 'post'
  // })
  // .state('newPost', {
  //   url: '/posts/new',
  //   templateUrl: '/js/views/posts/new-post.html',
  //   controller: 'NewCtrl',
  //   controllerAs: 'post'
  });
  $urlRouterProvider.otherwise('/');
}
