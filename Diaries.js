import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { useFonts } from '@use-expo/font';
import { AppLoading } from "expo";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Diaries() {

    const [val1, setVal1] = useState()

    const [loaded] = useFonts({
        "Poppins-ExtraBold": require('./assets/fonts/Poppins-ExtraBold.ttf'),
        "Poppins-Light": require('./assets/fonts/Poppins-Light.ttf'),
        "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
        "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!loaded) {
        return <AppLoading />;
    }


    return (
        <ImageBackground style={styles.container} source={require('./assets/white.jpg')}>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-around'
                , marginVertical: hp('1%'), alignItems: 'center', marginHorizontal: wp('-13%')
            }}>
                <Text style={{ fontSize: wp('10%'), fontFamily: 'Poppins-ExtraBold', color: '#8772CF',top:hp('1%') }}> D
                    <Text style={{ fontSize: wp('10%'),color:'#000' }}>iaries</Text>
                </Text>


                <FontAwesome5 name="user" size={22} color="#B0A5E3"  style={{left:wp('3%')}}/>



            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: hp('-2%') }}>

                <Text style={{
                    fontSize: wp('2.65%'), fontFamily: 'Poppins-Light', color: '#8772CF',
                    left: wp('5%'), marginVertical: '.3%',alignItems:'center',justifyContent:'center'
                }}>Access your Diaries down below.</Text>

                <View style={{
                    backgroundColor: '#E2E2E2', width: wp('38%'), height: hp('5%'),
                    borderTopLeftRadius: 10, borderBottomLeftRadius: 10, flexDirection: 'row',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <Text style={{ fontSize: wp('2.9%'), fontFamily: 'Poppins-SemiBold', fontSize: wp('3.0%') }}>Create Diary</Text>
                    <Image style={{ width: wp('3.5%'), height: hp('2%') }} source={require('./assets/write.png')} />

                </View>

            </View>

            <View style={styles.userContainer}>
                <TextInput
                    maxLength={120}
                    placeholder="Search Chapters"
                    style={styles.inputName} value={val1} onChangeText={(val) => setVal1(val)} />
                <Fontisto name="search" size={16} color="#CCCCCC" />
            </View>




            
            <View style={{flexDirection:'row',marginVertical:wp('0%')}}>
               
                <View style={{marginHorizontal:wp('8%'),backgroundColor:'#343434',borderRadius:12,height:hp('38%'),
                width:wp('8%'),justifyContent:'center',alignItems:'center',}}>
                       
                       
                    <Entypo name="cross" size={22} color="#6D5F9F" />
                    <View style={{marginVertical:wp('2.5%')}}>
                      <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1.5%')}} />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}}  />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}} />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}} />
                       <View style={{top:hp('2%')}}>
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}} />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}} />
                       </View>
                   
                    </View>
                    
                </View>


          
                <View style={{borderRadius:12,height:hp('37%'),
                width:wp('9%'),justifyContent:'center',alignItems:'center',marginHorizontal:wp('-7.5%')}}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:18,top:hp('.5%'),color:'#8772CF'}}>NO</Text>
                    <View style={{marginVertical:wp('.9%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>01</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>02</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>03</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>04</Text>

                      <View style={{top:hp('2.2%.')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>05</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>06</Text>

                      </View>

                    </View>
                    
                </View>



                <View style={{borderRadius:12,height:hp('37%'),
                justifyContent:'center',alignItems:'center',marginHorizontal:wp('6.5%')}}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:18,left:wp('-3%'),top:hp('1%'),color:'#8772CF'}}>Name</Text>
                    <View style={{top:hp('1.5%'),left:wp('3.5%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Entrepreneur Elite</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Reception Analyt</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Goals by 2015</Text>
            <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Control Part Amount {'\n'} Parade</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Deadly Execution</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Movie Night</Text>
                    </View>
                    
                </View>



                
                <View style={{borderRadius:12,height:hp('37%'),
                justifyContent:'center',alignItems:'center',marginHorizontal:wp('-2%')}}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:18,right:wp('1%'),top:wp('1.8%'),color:'#8772CF'}}>Dt</Text>
                    <View style={{marginVertical:wp('2%'),left:wp('2.8%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <View style={{top:hp('2.75%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>

                      </View>

                    </View>
                    
                </View>


                <View style={{borderRadius:12,height:hp('37%'),
                width:wp('9%'),justifyContent:'center',alignItems:'center',marginHorizontal:wp('10%')}}>
                       
                       
                    <Text  style={{fontFamily:'Poppins-SemiBold',fontSize:18,width:wp('24%'),color:'#8772CF'}}>Chapters</Text>
                    <View style={{bottom:hp('1%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>22</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>08</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>17</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>03</Text>
                      <View style={{top:hp('3.4%')}}>

                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>999</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>43</Text>
                      </View>
                    </View>
                    
                </View>
                  



                <View style={{marginHorizontal:wp('-4%'),marginVertical:'18%'}}> 

                     <View  style={{width:wp('.8%'),height:hp('1.5%'),backgroundColor:'#6D5F9F',borderRadius:5}}/>
                     
                     <View  style={{width:wp('.8%'),height:hp('17%'),backgroundColor:'#E2E2E2',borderRadius:5}}/>

                </View>



               


                

            </View>
                <View style={{top:hp('1.5%'),marginHorizontal:wp('4%')}}>
                <Text style={{ fontSize: wp('8%'), fontFamily: 'Poppins-ExtraBold', color: '#8772CF' }}> B
                    <Text style={{ fontSize: wp('8%') ,color:'#000'}}>rowse</Text>
                </Text>
                </View>
            
            <View  style={{bottom:wp('14%')}}>
               
                <ImageBackground source={require('./assets/browse.png')} style={{width:wp('90%'),
                marginLeft:20,
                height:hp('26%')}} >

                    <View style={{flexDirection:'row',left:wp('1%'),justifyContent:'space-around',}}>
                             <View style={{height:wp('48%'),justifyContent:'center',marginHorizontal:wp('2.5%')}}>
                            
                             <View >
                            <Text style={{fontFamily:'Poppins-ExtraBold',color:'#fff',top:wp('1.5%')}}>Entrepreneur</Text>
                            <Text style={{fontFamily:'Poppins-ExtraBold',color:'#fff'}}>Elite</Text>

                             </View>

                            
                            <Text style={{color:'#666666',fontSize:wp('1.5%'),marginHorizontal:wp('.5%')}}>Dt:1/9/2020</Text>
                                 <View style={{alignItems:'center',flexDirection:'row'}}>
                                     <Text style={{fontFamily:"Poppins-Bold",color:'#8772CF',fontSize:wp('2.5%'),marginLeft:wp('.8%')}}>View</Text>
                                 <Entypo name="eye" size={10} color="white" style={{marginLeft:wp('1%'),marginVertical:hp('.8%')}} />
                                 </View>

                        
                            </View>


                            <View style={{borderRadius:12,height:hp('37%'),
                justifyContent:'center',alignItems:'center',marginHorizontal:wp('5%'),marginVertical:hp('-4%')}}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:wp('4.6%'),color:'#ECBD45',right:wp('2.8%')}}>Chapters</Text>
                    <View style={{left:wp('3%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('.5%'),fontSize:10,color:'#fff'}}>
                          <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10,color:'#ECBD45'}}>01 </Text> Business Ethics</Text>

                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('.5%'),fontSize:10,color:'#fff'}}>
                          <Text style={{fontFamily:'Poppins-Light',fontSize:10,color:'#ECBD45'}}>02 </Text>
                      Overcast Days</Text>
                      <Text style={{fontFamily:'Poppins-Light',fontSize:10,color:'#fff',marginVertical:hp('.5%')}}>
                          <Text style={{fontFamily:'Poppins-Light',fontSize:10,color:'#ECBD45'}}>03 </Text>Retractive Interactions</Text>
                      <Text style={{fontFamily:'Poppins-Light',fontSize:10,color:'#fff'}}>
                          <Text style={{fontFamily:'Poppins-Light',fontSize:10,color:'#ECBD45',marginVertical:hp('.5%')}}>04 </Text>Time Looper</Text>
                      <Text style={{fontFamily:'Poppins-Light',fontSize:10,color:'#fff',marginVertical:hp('.5%')}}>
                          <Text style={{fontFamily:'Poppins-Light',fontSize:10,color:'#ECBD45',marginVertical:hp('.5%')}}>05 </Text>Initial Climb</Text>

                    </View>
                    
                </View>




              <View style={{alignItems:'center',justifyContent:"space-around",}}>
              <Entypo name="plus" size={24} color="#EDBE46" />
              <View style={{marginHorizontal:wp('10%'),bottom:wp('5%')}}> 

            <View  style={{width:wp('.8%'),height:hp('1.5%'),backgroundColor:'#ECBD45',borderRadius:5}}/>

            <View  style={{width:wp('.8%'),height:hp('13%'),backgroundColor:'#E2E2E2',borderRadius:5}}/>

            </View>
                        </View>


                    </View>

                    <View style={{backgroundColor:'#3E3E3E',width:wp('26%'),
                    height:wp('22%'),borderTopLeftRadius:50
                    ,borderTopRightRadius:50,bottom:wp('1.5%'),
                    alignSelf:'center',justifyContent:'flex-start',alignItems:'center'
                    }}>
                        
                        <FontAwesome name="home" size={28} color="white" style={{paddingTop:hp('1.5%')}}/>

                    </View>

                </ImageBackground>
            </View>
            
            





        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    container:
    {

        width: wp('100%'),
        height: hp('100%'),
        paddingBottom: 20

    },


    userContainer:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: hp('1.5%'),
        marginVertical: hp('2%'),
        left: wp('3%')


    },

    inputName:
    {
        borderBottomColor: '#8772CF',
        borderBottomWidth: 2,
        width: wp('85%'),
        marginHorizontal: wp('-5%')

    },



})
