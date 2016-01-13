import { orgDemo } from '../org-demo/org-demo.component';
import { SaveContinueComponent as controller } from './save-continue.component';

export const saveContinueDirective = () => {
	return {
		templateUrl: '/app/components/main-info/main-content/save-continue/save-continue.html',
		controller: controller,
		controllerAs: 'vm'
	};
};

class SaveContinueComponent {
	constructor() {}

	save() {
		console.log('Save button clicked!');
		console.log(orgDemo);
	}

	saveAndContinue() {}
}

export { SaveContinueComponent };