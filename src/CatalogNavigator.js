import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './page/Category'
import Categories from './page/Categories'

const Stack = createStackNavigator();

export default function CatalogNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Каталог" component={Category} />
      <Stack.Screen name="Категории" component={Categories} />
    </Stack.Navigator>
  );
}
