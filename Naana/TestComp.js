import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TestComp({text}) {
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:
    {
        backgroundColor:'#fff',
        width:'80%',
        padding:12,
        justifyContent:'center',
        alignItems:'flex-end',
        borderRadius:20,
        marginVertical:10,
        alignSelf:'center'

    }
})
