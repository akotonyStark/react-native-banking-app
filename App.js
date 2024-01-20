import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/screens/Landing';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Main from './src/screens/Main';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, headerShadowVisible:false}}>
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
        <Stack.Screen name="Homescreen" component={Landing} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={Main} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
