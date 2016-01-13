import { HomeComponent as controller } from './home.component';

export const homeDirective = () => {
	return {
    templateUrl: '/app/components/home/home.html',
  	controller: controller,
  	controllerAs: 'vm'
	};
};

class HomeComponent {

	contructor() {
		console.log("=====");
	}
}

export { HomeComponent };

