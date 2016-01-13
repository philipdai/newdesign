import { OrgDemoComponent as controller } from './org-demo.component';

export const orgDemoDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/main-content/org-demo/org-demo.html',
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
    scope: {
    	orgDemo: '=',
    	addresses: '=',
    	id: "@"
    }
	};
};

export const orgDemo = {
	addresses: []
};

class OrgDemoComponent {
	constructor() {

		this.addresses = [];

	}
}

export { OrgDemoComponent };