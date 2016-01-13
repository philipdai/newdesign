import { MainContentComponent as controller } from './main-content.component';

export const mainContentDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/main-content/main-content.html',
		controller: controller,
		controllerAs: 'vm'
	};
};

class MainContentComponent {
	constructor() {

	}
}

export { MainContentComponent };