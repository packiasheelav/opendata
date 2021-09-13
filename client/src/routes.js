import List from "./Scenes/List";
import HomeView from "./Scenes/View";
import Sensor1 from './Scenes/Sensor1';
const routes = [
  {
    path: "/",
    exact: true,
    component: HomeView,
  },
  {
    path: "/lists",
    exact: true,
    component: List,
  },
  {
      path:'/sensor1',
      exact:true,
      component:Sensor1
  }
];
export default routes;
