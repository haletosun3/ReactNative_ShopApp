import { StyleSheet, Alert, View , Image, Dimensions, ActivityIndicator} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import usePost from '../../hooks/usePost/usePost'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Config from 'react-native-config'


const Login = ({navigation}) => {
  const {data,post,loading,error} = usePost();
  const dispatch = useDispatch() 

  function handleLogin (values){
    post(Config.API_AUTH_URL,values);
    console.log(values);
  }

  if(error){
    Alert.alert('ShopChop', 'User Not Found');
    console.log(error);
  }

  if(data){
    if(data.status == 'Error'){
      Alert.alert('ShopChop', 'User Not Found');
    } else {
      dispatch({type: 'SET_USER', payload:{user}}) 

      user 
            ? AsyncStorage.setItem('@USER', JSON.stringify(user))//bellekte tuttukü
            : AsyncStorage.removeItem('@USER');   
            
    }
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.logo_container} >
       <Image style={styles.logo}
        source={require('../../assets/loginLogo.png')} />
      </View>
      <Formik 
      initialValues={{username:'', password:''}}
      onSubmit={handleLogin}
      >
      {({handleSubmit,handleChange,values}) => (<View style={styles.body_container}>
        <Input 
          placeholder="username" 
          value={values.username} 
          onChangeText={handleChange('username')} />

        <Input 
          placeholder="password" 
          value={values.password} 
          onChangeText={handleChange('password')}
          password={true}
          secureTextEntry={true} />
          
        <Button text="Login" onPress={handleSubmit} loading={loading}/>
      </View>)}
      </Formik>
    </View>
  )
}

export default Login

const user = {
    "address": {
       "geolocation": {
          "lat": "-37.3159",
          "long": "81.1496"
       },
       "city": "kilcoole",
       "street": "new road",
       "number": 7682,
       "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
       "firstname": "john",
       "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
 }


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logo_container:{
        alignItems:'center',
        margin:50,
        flex:1,
        justifyContent:'center'
    },
    body_container:{
        flex:1
    },
    logo:{
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height / 5,
        resizeMode:'contain',
        tintColor:'#2D4263'
    }
})