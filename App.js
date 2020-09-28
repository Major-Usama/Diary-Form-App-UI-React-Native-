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



export default function App() {
  return (
    <View style={styles.container}>
    <Welcome />
    </View>
  )
}

const styles = StyleSheet.create({

container:
{
        paddingTop:Platform.OS==='android' ? StatusBar.currentHeight : 0
}

})
