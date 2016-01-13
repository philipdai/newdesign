/**
 * Created by phoenixyartoo on 1/12/16.
 */
import 'angular-ui-router';
import { HomeComponent as controller } from './home.component';
//var template = require('./home.html');

export const homeDirective = () => {
	return {
    templateUrl: '/app/components/home/home.html',
  	controller: controller,
  	controllerAs: 'vm'
	};
};

class HomeComponent {

	contructor() {

	}
}

export { HomeComponent };

