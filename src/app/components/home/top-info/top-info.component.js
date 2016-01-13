import { TopInfoComponent as controller } from './top-info.component';

export const topInfoDirective = () => {
  return {
    templateUrl: '/app/components/home/top-info/top-info.html',
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
    	user: '='
    }
  };
};

class TopInfoComponent {
  constructor() {
  	this.user = {
  		'userId': 'NWIE04973',
  		'date': '12/25/2015'
  	};

  }
}

export { TopInfoComponent };
