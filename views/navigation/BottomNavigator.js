import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CreateAppointment from '../screens/CreateAppointment';
import ManageOrders from '../screens/ManageOrders';
import Products from '../screens/Products';
import Signup from '../screens/Signup';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{style: {height: 55,borderTopWidth: 0,elevation: 0,},
        showLabel: false,activeTintColor: '#90caf9',
      }}>
      
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Manage Orders"
        component={ManageOrders}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="info" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Products}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.light,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color='orange' size={28} />
            </View>
          ),
        }}
      />
            <Tab.Screen
        name="Create Appointment"
        component={CreateAppointment}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="dashboard" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Add products"
        component={Products}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;