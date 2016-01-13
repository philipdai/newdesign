import home from './components/home/home';

let myApp = angular.module('myApp', [home.name, 'ngRoute'])

export default myApp;