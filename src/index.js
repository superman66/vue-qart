/**
 * Created by superman on 17/2/6.
 */
import VueQArt from './vue-qart';

const install = function (Vue) {
  Vue.directive('VueQArt', VueQArt);
};

if(window.Vue){
  window.VueQArt = VueQArt;
  Vue.use(install);
}

VueQArt.install = install;
export default VueQArt;