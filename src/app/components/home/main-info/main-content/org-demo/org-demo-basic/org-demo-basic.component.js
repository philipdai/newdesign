import { OrgDemoBasicComponent as controller } from './org-demo-basic.component';
import { orgDemo } from '../org-demo.component';

export const orgDemoBasicDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/main-content/org-demo/org-demo-basic/org-demo-basic.html',
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
    scope: {
    	orgDemoBasic: '=',
    	disPtnTypes: '='
    }
	};
};

class OrgDemoBasicComponent {
	constructor() {
		this.orgDemoBasic = {
			'disPtnType': '',
			'orgType': '',
			'orgName': ''
		}

		this.disPtnTypes = ['Organization', 'Individual', 'Agent'];
		this.orgTypes = ['BGA', 'SB', 'LA', 'FM', '(RIA) Registered Investment Advisory Agency', '(ADV) Advisory Services Agency'];

		orgDemo.orgDemoBasic = this.orgDemoBasic;

	}
}

export { OrgDemoBasicComponent };