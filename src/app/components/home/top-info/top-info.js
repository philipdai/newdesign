import { topInfoDirective } from './top-info.component';
//console.log("topInfoDirective =====" + topInfoDirective);
export default angular.module('topInfo', [])
  .directive('topInfo', topInfoDirective);