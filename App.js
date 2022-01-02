import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './consts/colors';
import OrderDirectlyScreen from './views/screens/OrderDirectlyScreen';
import BottomNavigator from './views/navigation/BottomNavigator';
import FrontScreenAfterLogin from './views/screens/FrontScreenAfterLogin';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={FrontScreenAfterLogin} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="OrderDirectlyScreen" component={OrderDirectlyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
