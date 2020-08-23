import homeSreen from './screen/homeScreen.js';
import productScreen from './screen/productScreen.js'
import Error404Screen from './screen/Error404Screen.js'
import {urlparser} from './utils.js'

const routes = {
    '/':homeSreen,
    'product/:id':productScreen
}
const router = ()=>{
    const req = urlparser();
    console.log(req);

   var parsed = (req.resourse ? `/${req.resourse}`:'/')+
   (req.param?`/${req.param}`:'');
    
   const screen = routes[parsed]?routes[parsed]:Error404Screen;
    
    var area = document.getElementById('product');
    area.innerHTML = screen.render()

}
window.addEventListener('load',router);
window.addEventListener('hashchange',router);