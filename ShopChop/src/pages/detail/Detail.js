import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import React from 'react'
import { DrawerItem } from '@react-navigation/drawer';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

const Detail = ({route}) => {

  const {width,height} = Dimensions.get('window');

  const {id} = route.params;
  
  const  {data} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: data.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
       <Text style={styles.desc}>{data.description}</Text>
       <Text style={styles.price}>{data.price} $</Text>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center'
  },
  img:{
    width:150,
    minHeight:150,
    resizeMode:'contain',
    backgroundColor:'white'
  },
  body_container:{
    padding:5
  },
  title:{
    fontWeight:'bold',
    fontSize:20
  },
  desc:{
    fontStyle:'italic',
    fontSize:15,
    marginVertical:5
  },
  price:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'right'
  },
  
})