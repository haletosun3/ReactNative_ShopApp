import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Input = ({placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder={placeholder} 
      onChangeText={onChangeText}
      value={value} />

    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        padding:8,
        margin:10,
        backgroundColor:'#e0e0e0',
        borderRadius:5
    }
})