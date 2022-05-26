import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, SafeAreaView, Image,
  TouchableOpacity, Button, Alert, Platform,
  Dimensions
} from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import AppButton from './app/components/AppButton';
// import Card from './app/components/Card';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
