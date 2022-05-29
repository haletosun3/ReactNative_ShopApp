import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';
import Cart from '../../../src/components/Cart/Cart';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';



const Products = ({navigation}) => {
  const dispatch =useDispatch();
  const {loading, error, data} = useFetch(Config.API_PRODUCT_URL);

  const handleProduct = id => {
    navigation.navigate('Details',{ id });
  };

  const renderProduct = ({item}) => (
    <Cart product={item} onSelect={() => handleProduct(item.id)} />
  );

  if (error) {
    console.log(error);
    return (
      <SafeAreaView>
        <Text>hata {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <SafeAreaView>
        <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({});
 //<Button title='LogOut' onPress={() => dispatch({type:'SET_USER',payload:{user:null}})} />