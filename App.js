import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View ,Platform,StatusBar} from 'react-native'
import Reg from './Reg'
import Update from './Update'
import Login from './Login'
import Recover from './Recover'
import Diaries from './Diaries'
import ChaptersNoPages from './ChapterNoPages'
import BusinessEthics from './BusinessEthics'
import EntrepElite from './EntrepElite'
import CreateDiary from './CreateDiary'
import Welcome from './Welcome'
import Chapters from './Chapters'
import MainStackNavigator from './MainStackNavigator'





import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login} headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Reg" component={Reg} />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen name="Diaries" component={Diaries} />
        <Stack.Screen name="CreateDiary" component={CreateDiary} />
        <Stack.Screen name="Chapters" component={Chapters} />
        <Stack.Screen name="EntrepElite" component={EntrepElite} />
        <Stack.Screen name="BusinessEthics" component={BusinessEthics} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

container:
{
        paddingTop:Platform.OS==='android' ? StatusBar.currentHeight : 0
}

})
