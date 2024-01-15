import React from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, Switch, TouchableOpacity, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

function Login() {
    return (
        <SafeAreaView style={styles.body}>
            <View><Text>App Bar</Text></View>
            <View style={styles.greetings}><Text>Greetings</Text></View>
            <View style={styles.login}>
                <View>
                    <Text style={{ paddingLeft: 5 ,  color:'#777777' }}>Access Card Number</Text>
                    <TextInput style={styles.input} placeholder='Enter your card number' name="cardNumber" type="text" />
                </View>

                <View>
                    <Text style={{ paddingLeft: 5, color:'#777777' }}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter your password' name="password" type="password" />
                </View>

                <View style={styles.rememberPassword}>
                    <Text style={{ paddingLeft: 5, color:'#777777' }}>Remember My Card</Text><Switch />
                </View>

                <View>
                    <TouchableOpacity  style={styles.signOnButton}>
                        <Text style={{ color: '#fff' }}>Sign on</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rememberPassword}>
                    <Text style={{ textDecorationLine:'underline', color:'#008179' }}>Reset Password</Text>
                    <Text style={{ textDecorationLine:'underline', color:'#008179'}}>Register</Text>
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
        // backgroundColor: '#008179',
    },
    login: {
        flex: 1,
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
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 20
    },
    signOnButton:{
        backgroundColor: '#008179',
        height: 50,
        width:'100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Login