import React, { useCallback, useState, useMemo, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, ImageBackground, StyleSheet, View, Dimensions, Alert, Platform, ActivityIndicator } from 'react-native'
import smile from '../images/image.png'
import { StatusBar } from 'expo-status-bar'


const { width, height } = Dimensions.get('window')
function Landing({navigation}) {


useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Login')
    }, 2000)
}, [])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
    {/* <StatusBar backgroundColor='#008179' style='light-content' barStyle="light-content"/> */}
    <ImageBackground source={smile} resizeMode="cover" style={styles.image}>
      <View style={styles.midSection}>
        <ActivityIndicator size={'large'} animating={true}/>
       
        {/* <TouchableOpacity style={styles.login} >
          <Text style={{ color: '#fff' }}>Click to Login</Text>
        </TouchableOpacity> */}
      </View>

    </ImageBackground>
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
      width: width,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      // alignItems:'center'
    },
    midSection: {
  
      marginTop: 500,
      alignItems: 'center',
      justifyContent: 'center',
      // height: height,
      // backgroundColor: '#000000c0',
    },
    login: {
      backgroundColor: '#008179',
      height: 50,
      width: 300,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default Landing