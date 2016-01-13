import { OrgDemoAddrComponent as controller } from './org-demo-addr.component';
import { orgDemo } from '../org-demo.component';

export const orgDemoAddrDirective = () => {
	return {
		templateUrl: '/app/components/home/main-info/main-content/org-demo/org-demo-addr/org-demo-addr.html',
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
    scope: {
      addresses: '=',
      address: '=',
      id: '@'
    }
	};
};

class OrgDemoAddrComponent {
	constructor(addrService) {
		this.addrService = addrService;
		this.address = {
			'id': this.id,
			'addrType': '',
			'attention': ''
		};

		this.addrTypes = ['Address typ 1', 'Address typ 2', 'Address typ 3'];

		orgDemo.addresses = orgDemo.addresses.filter(item => item.id != this.id);
		orgDemo.addresses.push(this.address);
	}

	deleteAddr(address) {

		this.addresses = this.addrService.deleteAddr(this.addresses, address);
		orgDemo.addresses = this.addrService.deleteAddr(orgDemo.addresses, address);

	}
}

OrgDemoAddrComponent.$inject = ['addrService'];

export { OrgDemoAddrComponent };