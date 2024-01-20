import React, { useEffect, useState } from 'react'
import {StatusBar, StyleSheet, Text, View, TextInput, SafeAreaView, Switch, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window')

function Login({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [greetings, setGreetings] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(true)


    const generateGreetingBasedOnTimeOfDay = () => {
        let currentTime = new Date().getHours()

        if (currentTime < 12) {
            setGreetings('Good morning')
        } else if (currentTime < 18) {
            setGreetings('Good afternoon')
        } else {
            setGreetings('Good evening')
        }
    }

    useEffect(() => {
        generateGreetingBasedOnTimeOfDay()
    }, [])

    return (
        <SafeAreaView style={styles.body}>
             <StatusBar barStyle = "light-content" backgroundColor = "#008179" translucent = {true}/>
             <View style={{ height: 60, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginTop:10 }}>
                <View style={{flexDirection:'row', gap:15, alignItems:'center'}}>
                    <FontIcon name="menu" size={20} color={'white'} />
                    <Text style={{color:'white'}}>ABCD Bank</Text>
                </View>

                <View style={{flexDirection:'row', gap:15, alignItems:'center'}}>
                    <Icon name="shield" size={20} color={'white'}/>
                    <Icon name="info" size={20} color={'white'}/>
                    
                </View>

            </View>

            <View style={styles.greetings}>
                <Text style={styles.greetingsText}>{isLoggedIn ? greetings+' Augustine' : 'Welcome to CIBC!'}</Text>
            </View>

        
            <View style={styles.login}>
                <View>
                    <Text style={{ paddingLeft: 5, color: '#777777' }}>Access Card Number</Text>
                    <TextInput style={styles.input} placeholder='Enter your card number' name="cardNumber" type="text" />
                </View>

                <View>
                    <Text style={{ paddingLeft: 5, color: '#777777' }}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter your password' name="password" type="password" />
                </View>

                <View style={styles.rememberPassword}>
                    <Text style={{ paddingLeft: 5, color: '#777777' }}>Remember My Card</Text>
                    <Switch
                        //trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#008179' : '#fafafa'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabled(!isEnabled)}
                        value={isEnabled} />
                </View>

                <View>
                    <TouchableOpacity style={styles.signOnButton} onPress={() => navigation.navigate('Main')}>
                        <Text style={{ color: '#fff' }}>Sign on</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rememberPassword}>
                    <Text style={{ textDecorationLine: 'underline', color: '#008179' }}>Reset Password</Text>
                    <Text style={{ textDecorationLine: 'underline', color: '#008179' }}>Register</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    body: {
        display: 'flex',
        backgroundColor: '#008179',
        flex: 1
    },
    greetings: {
        flex: 2,
        alignItems: 'center',
        padding: 30,
       
    },
    greetingsText: {
        fontSize: 24,
        color: '#f2f2f2',
        textAlign: 'center'
    },
    login: {
        flex: 1.3,
        backgroundColor: '#fff',
        padding: 20,
        gap: 15
    },
    input: {
        // alignSelf: 'stretch',
        padding: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5     // Add this to specify bottom border thickness
    },
    rememberPassword: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 20
    },
    signOnButton: {
        backgroundColor: '#008179',
        height: 50,
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Login