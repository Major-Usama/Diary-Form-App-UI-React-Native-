import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ButtonComp({title,onPress,onPress2}) {

    

    return (
        

                <View style={{height:500,justifyContent:'flex-end'}}>          
                        <View style={{backgroundColor:'lightgray',width:400,
             alignSelf:'center',
        height:250,alignItems:'center',justifyContent:'center'}}>
            
            
            <View style={{flexDirection:'row',marginVertical:10}}>
                <TouchableOpacity onPress={onPress}>
            <View style={{width:150,height:30,backgroundColor:'brown',
            alignItems:'center',justifyContent:'center',borderRadius:20
        }}>
                    <Text>Cat1</Text>
            </View>
            </TouchableOpacity>

           <TouchableOpacity onPress2={onPress2}>
            <View style={{width:150,height:30,backgroundColor:'red',
            alignItems:'center',justifyContent:'center',marginHorizontal:5,
            borderRadius:20
        }}>
                    <Text>Cat2</Text>
            </View>
            </TouchableOpacity>
              
            </View>

            
            <View style={{width:'80%',height:30,backgroundColor:'pink',
            alignItems:'center',justifyContent:'center',marginHorizontal:5,
            borderRadius:20
        }}>
                    <Text>Cat2</Text>
            </View>
            
            <View style={{width:'80%',height:30,backgroundColor:'tomato',
            alignItems:'center',justifyContent:'center',marginHorizontal:5,
            borderRadius:20,marginVertical:5
        }}>
                    <Text>Cat2</Text>
            </View>

            
            <View style={{flexDirection:'row',marginVertical:5}}>
                
            <View style={{width:210,height:30,backgroundColor:'orange',
            alignItems:'center',justifyContent:'center',borderRadius:20
        }}>
                    <Text>Cat1</Text>
            </View>

            <View style={{width:80,height:30,backgroundColor:'yellow',
            alignItems:'center',justifyContent:'center',marginHorizontal:5,
            borderRadius:20
        }}>
                    <Text>Cat2</Text>
            </View>

 
            </View>


            
            <View style={{flexDirection:'row',marginVertical:5}}>
                
            <View style={{width:150,height:30,backgroundColor:'brown',
            alignItems:'center',justifyContent:'center',borderRadius:20
        }}>
                    <Text>Cat1</Text>
            </View>

            <View style={{width:150,height:30,backgroundColor:'red',
            alignItems:'center',justifyContent:'center',marginHorizontal:5,
            borderRadius:20
        }}>
                    <Text>Cat2</Text>
            </View>

 
            </View>
            
        </View>
        </View>
  
        
 


        
       
    )
}

const styles = StyleSheet.create({})
