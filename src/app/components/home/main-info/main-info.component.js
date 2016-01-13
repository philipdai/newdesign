import { MainInfoComponent as controller } from './main-info.component';

export const mainInfoDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/main-info.html',
		controller: controller,
		controllerAs: 'vm'
	};
}; 

class MainInfoComponent {
	constructor() {
		
	}
}

export { MainInfoComponent };