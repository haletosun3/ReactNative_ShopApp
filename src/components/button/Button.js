import { StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'


const Button = ({text,onPress, loading}) => {
  return (
    <TouchableOpacity 
    style={styles.container} 
    onPress={onPress}
    disabled={loading}>
       {loading ? <ActivityIndicator color="white" /> 
       : (<Text style={styles.title}>{text} </Text>) }
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#CEE5D0',
        alignItems:'center',
        padding:12,
        margin:20,
        borderRadius:5,
    },
    title:{
        fontWeight:'700',
        fontSize:17,
        color:'#2D4263'
    }
})