import { StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './ShopChop/src/pages/detail/Detail';
import Products from './ShopChop/src/pages/products/Products';
import Login from './ShopChop/src/pages/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {

  const userSession = useSelector(s => s.user)
  const isLoading = useSelector(s => s.isAuthLoading)
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      { isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) :
        !userSession ? 
        <Stack.Navigator>
        <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{
        headerShown:false}}
        />
        </Stack.Navigator>
        :
        <>
        <Stack.Navigator>
        <Stack.Screen name='Products'
       component={Products} 
       options={{title:'Product', 
       headerTintColor:'#2D4263', 
       headerRight:() => 
       <Icon  name='logout' size={30} 
       color="#2D4263" 
       onPress={() => dispatch({type: 'REMOVE_USER'})} />,
       headerStyle:{backgroundColor:'#CEE5D0'}}}
       />

       <Stack.Screen 
       name='Details' 
       component={Detail} 
       options={{title:'Detail', 
       headerTintColor:'#2D4263', 
       headerStyle:{backgroundColor:'#CEE5D0'}}} />
        </Stack.Navigator>
        </>
      }
        </NavigationContainer> 

  )
}


export default App
