import React, { useState } from 'react'
import {
  StyleSheet,
  Text, View, Platform,
  StatusBar, ImageBackground,
  TextInput ,TouchableOpacity
  

}from 
'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';





import { Fontisto } from '@expo/vector-icons';




export default function Recover() {
  const [val1, setVal1] = useState()
  return (
    <ImageBackground source={require('./assets/Reg1.jpg')} style={styles.container}>

     
     <View style={styles.inputsContainer}>



        <View style={styles.userContainer1}>
          <TextInput
            maxLength={20}
            placeholder="Email-ID"
            style={styles.inputName1} value={val1} onChangeText={(val) => setVal1(val)} />
                    
              <Fontisto name="email" size={16} color="#B0A5E3" />
    
          
        </View>



       




      
         
         <TouchableOpacity>
        <View style={styles.registerButton}>
          <Text style={styles.buttonText}>Recover Account</Text>

        </View>
        
        </TouchableOpacity>
        

        
      
 






      </View>
    



    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  container:
  {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom:hp('5%')

  },

  inputsContainer:
  {

    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: hp('65%'),
    
    


  },

  userContainer1:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp('1%'),
    marginHorizontal:wp('5%')
    

  },

 
  inputName1:
  {
    borderBottomColor: '#FFCB47',
    borderBottomWidth: 2,
    width: wp('38%'),
    marginHorizontal: wp('-5%')

  },

 
  icon1: {
    width: wp('5%'),
    height: hp('3%'),

  },
  registerButton:
  {
    width: wp('36%'),
    padding: wp('2%'),
    backgroundColor: '#F7C900',
    borderRadius: 5,
    marginVertical: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    right:10
  },
  buttonText:
  {
    fontWeight: 'bold',
    fontSize: wp('4%'),
    color: '#734FBB',
  }

})
