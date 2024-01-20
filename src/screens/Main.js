import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, Image, StatusBar, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/MaterialIcons'
import deposit from '../../assets/deposit-protection.png'

function Main() {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={true} />
            <View style={styles.appHeader}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <FontIcon name="menu" size={30} />
                    <Text>ABCD Bank</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Icon name="shield" size={20} color={'red'} />
                    <View style={{ backgroundColor: '#008179', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 35, width: 35 }}>
                        <Text style={{ color: 'white' }}>AL</Text>
                    </View>
                </View>

            </View>
            <ScrollView>
                <View style={styles.notifications}>
                    <Text style={{ color: 'white' }}>Notifications Card - Swipeable</Text>
                </View>

                <View >
                    <Text style={{ marginLeft: 20 }}>DEPOSIT ACCOUNTS</Text>
                    <View style={styles.chequing}>
                        <Text>Chequing</Text>
                        <Text style={{ fontSize: 12, fontWeight: 300 }}>5720036</Text>
                        <View  style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 30 }}>$2,116.86</Text> 
                            <Icon name="arrow-forward-sharp" size={20} color={'red'} />
                        </View>
                        
                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                            <View style={{  width: 70, height: 40, borderRadius: 5, padding: 5, backgroundColor: '#008179' }}>
                                <Text style={{ fontSize: 10, color: 'white', fontWeight:900, textAlign:'right' }}>DEBIT</Text>
                            </View>

                            <View style={{ flexDirection: 'row', gap:10 }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fafafa',
                                    borderColor:'#cecece',
                                    height: 35,
                                    width: 100,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                }}><Text>Send Money</Text></TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fafafa',
                                    borderColor:'#cecece',
                                    height: 35,
                                    width: 40,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                }}><Text>. . .</Text></TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <View style={styles.savings}>
                        <Text>Savings</Text>
                        <Text style={{ fontSize: 12, fontWeight: 300 }}>5720087</Text>
                        <View  style={{ flexDirection: 'row',  justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 30 }}>$0.00</Text> 
                            <Icon name="arrow-forward-sharp" size={20} color={'red'} />
                        </View>
                    </View>

                    <View style={styles.total}>
                        <Text>Total</Text><Text>$2,116.86    <Icon name="information-circle-outline" size={15} color={'grey'} /></Text>
                    </View>

                    <View>
                        <Text style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>CREDIT CARDS</Text>
                        <View style={styles.creditCards}>
                        <Text>ABCD VISA</Text>
                        <Text style={{ fontSize: 12, fontWeight: 300 }}>4500 1234 8890 6784</Text>
                        <View  style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 30 }}>$2.86</Text> 
                            <Icon name="arrow-forward-sharp" size={20} color={'red'} />
                        </View>
                        
                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                            <View style={{  width: 70, height: 35, borderRadius: 5, padding: 5, backgroundColor: '#6082B6' }}>
                                <Text style={{ fontSize: 10, color: 'white', fontWeight:900, textAlign:'right' }}>*3890</Text>
                                <Text style={{ fontSize: 10, color: 'white', fontWeight:900, textAlign:'right' }}>VISA</Text>
                            </View>

                            <View style={{ flexDirection: 'row', gap:10 }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fafafa',
                                    borderColor:'#cecece',
                                    height: 35,
                                    width: 70,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                }}><Text>Pay Card</Text></TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fafafa',
                                    borderColor:'#cecece',
                                    height: 35,
                                    width: 40,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                }}><Text>. . .</Text></TouchableOpacity>
                            </View>

                        </View>
                        </View>
                    </View>
                   

                    <View style={styles.promos}>
                        <View style={{height:50, width: 50,  justifyContent:'center', alignItems:'center', borderRadius:50, backgroundColor:'#f0f0f0'}}>
                            <Icon name="add" size={20} color={'red'} />
                        </View>
                        <Text style={{flex: 1, flexWrap: 'wrap'}}>Earn up to 2,500 Aventura Points with the ABCD Aventura Visa Card</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>INSIGHTS</Text>
                    <View style={styles.insights}>
                        <Text>Deposit Received</Text>
                        <Text>A $2.00 merchant credit was added to Smart Account ***036</Text>
                    </View>
                </View>


                <View>
                    <Text style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>GET STARTED</Text>
                    <View style={styles.getStarted}>
                        <View style={styles.halfcard}>
                            <Image />
                            <Text>My plan and insights</Text>
                        </View>
                        <View style={styles.halfcard}>
                            <Image />
                            <Text>Move Money</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.footer}>
                    <View style={styles.footerItem}>
                        <Text>Help Center</Text>
                        <Icon name="arrow-forward-sharp" size={20} color={'red'} />
                    </View>

                    <View style={styles.footerItem}>
                        <Text>Provide Feedback</Text>
                        <Icon name="arrow-forward-sharp" size={20} color={'red'} />
                    </View>

                    <View style={{flexDirection:'row', gap: 10, marginTop:20}}>
                       <Image source={deposit} style={{width:70, height:25}}/>
                        <Text style={{flex: 1, flexWrap: 'wrap'}}>ABCD is a member of the Canada Deposit Insurance Corporation (CIDC)</Text>
                        
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appHeader: { height: 100, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 },

    notifications: {
        height: 120,
        backgroundColor: '#008179',
        margin: 20,
        marginBottom: 40,
        marginTop: 0,
        padding: 20,
        borderRadius: 5,

    },

    accounts: {
        padding: 20,
        margin: 20,
    },

    chequing: {
        padding: 20,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        height: 180,
        gap: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    },

    savings: {
        padding: 20,
        gap: 5,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        height: 110,
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    },

    total: {
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cecece',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 10, 
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    creditCards: {
        padding: 20,
        gap:5,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        height: 180,
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    },

    promos: {
        height: 80,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cecece',
        paddingLeft: 20,
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },

    insights: {
        height: 100,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cecece',
        paddingLeft: 20,
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
    },

    getStarted: {
        gap: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
    },

    halfcard: {
        height: 100,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        width: '47%',
        padding: 10
    },

    footer: {
        height: 400,
        backgroundColor: '#f0f0f0',
        padding: 20,
        marginTop: 50,
        gap:20
    },

    footerItem: {borderBottomColor: 'grey', borderBottomWidth: 0.5 , height:50, justifyContent:'space-between', alignItems:'center', flexDirection: 'row',  }
})
export default Main