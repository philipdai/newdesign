import { MenusComponent as controller } from './menus.component';

export const menusDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/left-info/menus/menus.html',
		controller: controller,
		controllerAs: 'vm'
	};
}; 

class MenusComponent {
	constructor() {}
}

export { MenusComponent };