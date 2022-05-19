import { StyleSheet, Text, View , SafeAreaView, FlatList, ActivityIndicator} from 'react-native'
import React ,{useState , useEffect } from 'react'
import Config from 'react-native-config'
import axios from 'axios'
import Cart from '../../../src/components/Cart/Cart'
 import useFetch from '../../hooks/useFetch'
const Products = () => {
  const {loading,error,data} = useFetch(Config.API_URL);
  
  const renderProduct = ({item}) => <Cart product={item} />;

  if(error){
    console.log(error);
    return <SafeAreaView>
      <Text>hata {error}</Text>
    </SafeAreaView>
    
  }

  return (
    <SafeAreaView>
      {
        loading ? (<ActivityIndicator size="large"/>) 
        : (<FlatList data={data} renderItem={renderProduct}/>)
      }
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({})