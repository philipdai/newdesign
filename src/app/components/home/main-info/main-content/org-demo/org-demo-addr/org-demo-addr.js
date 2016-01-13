import OrgDemoAddrService from './org-demo-addr.service';
import { orgDemoAddrDirective } from './org-demo-addr.component';


export default angular.module('org-demo-addr', [])
	.service('addrService', OrgDemoAddrService)
	.directive('orgDemoAddr', orgDemoAddrDirective);