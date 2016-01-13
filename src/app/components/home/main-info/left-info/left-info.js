import { leftInfoDirective } from './left-info.component';
import menus from './menus/menus';

export default angular.module('left-info', [ menus.name])
	.directive('leftInfo', leftInfoDirective);