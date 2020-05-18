import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './page/Home'
import Category from './page/Category'
import Cart from './page/Cart'
import ProfileScreen from './page/Profile'
import CatalogNavigator from './CatalogNavigator'

const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Главная') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Каталог') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Корзина') {
              iconName = focused ? 'ios-cart' : 'ios-cart';
            } else if (route.name === 'Профиль') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }
            return <Icon name={iconName} size={100} color="#F79A3D" />;
          },
        })}
      barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen name="Главная" component={Home} />
        <Tab.Screen name="Каталог" children={CatalogNavigator} />
        <Tab.Screen name="Корзина" component={Cart} />
        <Tab.Screen name="Профиль" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
