import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import QrCodeScreen from './src/screens/QrCodeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationBar from './src/components/NavigationBar';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <NavigationBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          headerStyle: { backgroundColor: '#122929', },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold', },
        }} />
        <Tab.Screen name="QrCode" component={QrCodeScreen} options={{
          headerStyle: { backgroundColor: '#122929', },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold', },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;