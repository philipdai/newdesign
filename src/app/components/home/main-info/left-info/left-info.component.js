import { LeftInfoComponent as controller } from './left-info.component';

export const leftInfoDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/left-info/left-info.html',
		controller: controller,
		controllerAs: 'vm'
	};
}; 

class LeftInfoComponent {
	constructor() {}
}

export { LeftInfoComponent };