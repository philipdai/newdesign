/**
 * Created by phoenixyartoo on 1/12/16.
 */
//import angular from 'angular';
//import topInfo from './top-info/top-info';
//import mainInfo from './main-info/main-info';
import { homeDirective } from './home.component';

export default angular.module('myapp-home', [])
	.directive('myappHome', homeDirective);