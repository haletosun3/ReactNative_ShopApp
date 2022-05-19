import { View, Text , SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './ShopChop/src/pages/detail/Detail';
import Products from './ShopChop/src/pages/products/Products';
import Config from 'react-native-config';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='Details' component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App