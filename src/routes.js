import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Maps from '~/pages/Maps';

const Routes = createAppContainer(createSwitchNavigator({ Main, Maps }));

export default Routes;
