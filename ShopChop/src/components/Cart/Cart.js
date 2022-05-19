import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Cart = ({product}) => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source={{uri:product.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} $</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:'#e0e0e0',
    backgroundColor:'#eeeeee',
    margin:8,
    flexDirection:'row',
  },
  img:{
    width:100,
    minHeight:100,
    resizeMode:'contain',
    backgroundColor:'white'
  },
  body_container:{
    flex:1,
    padding:5,
    justifyContent:'space-between'
  },
  title:{
    fontSize:14,
    fontWeight:'600'
  },
  price:{
    textAlign:'right',
    fontSize:14,
    fontStyle:'italic'
  }
})