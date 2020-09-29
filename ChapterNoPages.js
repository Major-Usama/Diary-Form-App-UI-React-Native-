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

export default function ChaptersNoPages() {

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
                <Text style={{ fontSize: wp('10%'), fontFamily: 'Poppins-ExtraBold', color: '#FFCB47' }}> C
                    <Text style={{ fontSize: wp('10%'),color:'#000' }}>hapters</Text>
                </Text>


                <FontAwesome5 name="user" size={22} color="#B0A5E3" />



            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: hp('-2%') }}>

                <Text style={{
                    fontSize: wp('3%'), fontFamily: 'Poppins-Light', color: '#FFCB47',
                    left: wp('2.85%'), marginVertical: '.3%'
                }}>Access your Chapters down {'\n'}below.</Text>

                <View style={{
                    backgroundColor: '#E2E2E2', width: wp('40%'), height: hp('5%'),
                    borderTopLeftRadius: 10, borderBottomLeftRadius: 10, flexDirection: 'row',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <Text style={{ fontSize: wp('2.9%'), fontFamily: 'Poppins-Bold', fontSize: wp('3.0%') }}>Create Chapter</Text>
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




            <Text style={{fontFamily:'Poppins-Bold',fontSize:19,marginHorizontal:wp('19.5%'),top:hp('-1.5%')}}>Entrepreneur Elite</Text>
            <View style={{flexDirection:'row',marginVertical:wp('-10%')}}>
               
                <View style={{marginHorizontal:wp('8%'),backgroundColor:'#343434',borderRadius:12,height:hp('38%'),
                width:wp('8%'),justifyContent:'center',alignItems:'center',}}>
                       
                       
                    <Entypo name="cross" size={22} color="#6D5F9F" />
                    <View style={{marginVertical:wp('2.5%')}}>
                      <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1.5%')}} />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}}  />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}} />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}} />
                       <AntDesign name="delete" size={14} color="white" style={{marginVertical:hp('1%')}} />

                    </View>
                    
                </View>


          
                <View style={{borderRadius:12,height:hp('37%'),
                width:wp('9%'),justifyContent:'center',alignItems:'center',marginHorizontal:wp('-5%')}}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:18,}}>NO</Text>
                    <View style={{marginVertical:wp('.9%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>01</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>02</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'3%',fontSize:10}}>03</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>04</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),top:'2%',fontSize:10}}>05</Text>

                    </View>
                    
                </View>



                <View style={{borderRadius:12,height:hp('37%'),
                justifyContent:'center',alignItems:'center',marginHorizontal:wp('6.5%')}}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:18,}}>CHAPTERS</Text>
                    <View style={{marginVertical:wp('.9%'),left:wp('3.5%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Business Ethics</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Overcast Days</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Retractive Interactions</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Time Looper</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>Initial Climb</Text>

                    </View>
                    
                </View>



                
                <View style={{borderRadius:12,height:hp('37%'),
                justifyContent:'center',alignItems:'center',marginHorizontal:wp('2%')}}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:18,}}>Dt</Text>
                    <View style={{marginVertical:wp('2%'),left:wp('3.5%')}}>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>
                      <Text style={{fontFamily:'Poppins-Light',marginVertical:hp('1%'),fontSize:10}}>1/9/2020</Text>

                    </View>
                    
                </View>

                <View style={{marginHorizontal:wp('10%'),marginVertical:'15%'}}> 

                     <View  style={{width:wp('.8%'),height:hp('1.5%'),backgroundColor:'#6D5F9F',borderRadius:5}}/>
                     
                     <View  style={{width:wp('.8%'),height:hp('17%'),backgroundColor:'#E2E2E2',borderRadius:5}}/>

                </View>


                

            </View>
                <View style={{top:hp('8%'),marginHorizontal:wp('4%')}}>
                <Text style={{ fontSize: wp('8%'), fontFamily: 'Poppins-ExtraBold', color: '#FFCB47' }}> B
                    <Text style={{ fontSize: wp('8%') ,color:'#000'}}>rowse</Text>
                </Text>
                </View>
            
            <View  style={{bottom:wp('2%')}}>
               
                <ImageBackground source={require('./assets/browse.png')} style={{width:wp('90%'),
                marginLeft:20,
                height:hp('26%')}} >

                    <View style={{flexDirection:'row',left:wp('4%'),justifyContent:'space-around',}}>
                             <View style={{height:wp('48%'),justifyContent:'center',right:wp('4%')}}>
                            
                             <View >
                            <Text style={{fontFamily:'Poppins-ExtraBold',color:'#fff',top:wp('1.5%')}}>Business</Text>
                            <Text style={{fontFamily:'Poppins-ExtraBold',color:'#fff'}}>Ethics</Text>

                             </View>

                            
                            <Text style={{color:'#666666',fontSize:wp('1.5%'),marginHorizontal:wp('.5%')}}>Dt:1/9/2020</Text>
                                 <View style={{alignItems:'center',flexDirection:'row'}}>
                                     <Text style={{fontFamily:"Poppins-Bold",color:'orange',fontSize:wp('2.5%'),marginLeft:wp('.8%')}}>View</Text>
                                 <Entypo name="eye" size={10} color="white" style={{marginLeft:wp('1%'),marginVertical:hp('.8%')}} />
                                 </View>

                        
                            </View>


                            <View style={{borderRadius:12,height:hp('37%'),
                justifyContent:'center',alignItems:'center',left:wp('2%'),marginVertical:hp('-4%'),
                
                
                }}>
                       
                       
                    <Text numberOfLines={1} style={{fontFamily:'Poppins-SemiBold',fontSize:20,color:'#ECBD45',right:wp('5%'),bottom:hp('3%')}}>Pages</Text>
            <Text style={{fontFamily:'Poppins-ExtraBold',color:'#B0B0B0',fontSize:wp('7.5%'),lineHeight:hp('4.5%'),bottom:wp('2%'),right:wp('1%')}}>No{'\n'}Pages</Text>
            <Text style={{color:'#FDC946',fontSize:wp('1.8%'),fontFamily:'Poppins-Light'}}>Create one by Clicking {'\n'}Add Button on top right corner  </Text> 
                </View>




              <View style={{alignItems:'center',justifyContent:"space-around",left:wp('2.5%')}}>
              <Entypo name="plus" size={24} color="#FFCB47" />
              <View style={{marginHorizontal:wp('10%'),bottom:wp('5%')}}> 

            <View  style={{width:wp('.8%'),height:hp('1.5%'),backgroundColor:'#ECBD45',borderRadius:5}}/>

            <View  style={{width:wp('.8%'),height:hp('13%'),backgroundColor:'#E2E2E2',borderRadius:5}}/>

            </View>
                        </View>


                    </View>

                    <View style={{backgroundColor:'#3E3E3E',width:wp('24%'),
                    height:wp('12%'),borderTopLeftRadius:50
                    ,borderTopRightRadius:50,bottom:wp('.5%'),
                    alignSelf:'center',justifyContent:'center',alignItems:'center'
                    }}>
                        
                        <FontAwesome name="home" size={28} color="white" />

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
        borderBottomColor: '#FFCB47',
        borderBottomWidth: 2,
        width: wp('85%'),
        marginHorizontal: wp('-5%')

    },



})
