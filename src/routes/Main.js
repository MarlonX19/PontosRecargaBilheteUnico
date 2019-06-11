import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './Home';
import MapScreen from './Map';
import About from './About';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,   
    },

    Map: {
      screen: MapScreen,
    },

    About: {
      screen: About,
    },


  });
  
const Main = createAppContainer(MyDrawerNavigator);

export default Main;
