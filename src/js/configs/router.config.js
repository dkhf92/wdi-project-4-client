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
    controllerAs: 'teams'
  })
  .state('teamsNew', {
    url: '/teams/new',
    templateUrl: '/js/views/teams/new.html',
    controller: 'TeamsNewCtrl',
    controllerAs: 'teams'
  })
  .state('teamsShow', {
    url: '/teams/show/:id',
    templateUrl: '/js/views/teams/show.html',
    controller: 'TeamsShowCtrl',
    controllerAs: 'teams'
  })
  .state('teamsEdit', {
    url: '/teams/:id/edit',
    templateUrl: '/js/views/teams/edit.html',
    controller: 'TeamsEditCtrl',
    controllerAs: 'teams'
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
