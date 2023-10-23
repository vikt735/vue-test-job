import NavBar from './Layout/NavBar.vue';
import SideBar from './Layout/SideBar.vue';
import UIInput from './UI/UIInput.vue';
import UILoading from './UI/UILoading.vue';
import UITab from './UI/UITab.vue';
import UserContent from './modules/UserContent.vue';

const components = [
  {name: 'UIInput', component: UIInput}, 
  {name: 'UITab', component: UITab}, 
  {name: 'NavBar', component: NavBar},
  {name: 'SideBar', component: SideBar},
  {name: 'UserContent', component: UserContent},
  {name: 'UILoading', component: UILoading},
]

export default {
  install(app) {
    components.forEach(({name, component}) => {
      app.component(name, component);
    })
  }
}