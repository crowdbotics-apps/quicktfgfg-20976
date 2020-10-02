import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps121745Navigator from '../features/Maps121745/navigator';
import Settings121723Navigator from '../features/Settings121723/navigator';
import Settings121708Navigator from '../features/Settings121708/navigator';
import NotificationList121707Navigator from '../features/NotificationList121707/navigator';
import Maps121706Navigator from '../features/Maps121706/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps121745: { screen: Maps121745Navigator },
Settings121723: { screen: Settings121723Navigator },
Settings121708: { screen: Settings121708Navigator },
NotificationList121707: { screen: NotificationList121707Navigator },
Maps121706: { screen: Maps121706Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
