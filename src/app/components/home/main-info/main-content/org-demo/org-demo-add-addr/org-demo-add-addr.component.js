import { OrgDemoAddAddrComponent as controller } from './org-demo-add-addr.component';
import { orgDemo } from '../org-demo.component';
import { OrgDemoAddrService as addrService } from '../org-demo-addr/org-demo-addr.service';

export const orgDemoAddAddrDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/main-content/org-demo/org-demo-add-addr/org-demo-add-addr.html',
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
    scope: {
      addresses: '='
    }
	};
};

class OrgDemoAddAddrComponent {
	constructor(addrService) {
		this.addrService = addrService;

	}

	addAddress() {

		var newAddrNo = this.addresses.length + 1;

		this.newAddr = {
			'id': "orgDemoAddress" + newAddrNo,
			'addrType': '',
			'attention': ''
		};


		this.addresses = this.addrService.addAddr(this.addresses, this.newAddr);
		orgDemo.addresses = this.addrService.addAddr(orgDemo.addresses, this.newAddr);

	}

}

OrgDemoAddAddrComponent.$inject = ['addrService'];

export { OrgDemoAddAddrComponent };