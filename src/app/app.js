import home from './components/home/home';
//
let myApp = angular.module('myApp', [home.name, 'ngRoute']);
//let myApp = angular.module('myApp', ['ngRoute']);

export default myApp;