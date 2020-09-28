import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useFonts } from '@use-expo/font';
import { AppLoading } from "expo";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Welcome() {

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
        <View>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-around'
                , marginVertical: hp('1%'), alignItems: 'center', marginHorizontal: wp('-13%')
            }}>
                <Text style={{ fontSize: wp('8%'), fontFamily: 'Poppins-ExtraBold', color: '#8772CF', top: hp('1%') }}>Welcome !
                
                </Text>


                <FontAwesome5 name="user" size={22} color="#B0A5E3" style={{ left: wp('1%') }} />



            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: hp('-2%') }}>

                <Text style={{
                    fontSize: wp('3%'), fontFamily: 'Poppins-Light',
                    left: wp('-18%'), marginVertical: '.3%', alignItems: 'center', justifyContent: 'center'
                }}>Access your Diaries down below.</Text>



            </View>

            <View style={styles.userContainer}>
                <TextInput
                    maxLength={120}
                    placeholder="Search Diaries / Chapters"
                    style={styles.inputName} value={val1} onChangeText={(val) => setVal1(val)} />
                <Fontisto name="search" size={20} color="#CCCCCC" />
            </View>



            <View style={{
                flexDirection: 'row', justifyContent: 'space-around'
                , marginVertical: hp('-2%'), alignItems: 'center', marginHorizontal: wp('-22%')
            }}>
                <Text style={{ fontSize: wp('10%'), fontFamily: 'Poppins-ExtraBold', color: '#8772CF', top: hp('1%') }}> D
                    <Text style={{ fontSize: wp('10%'), color: '#000' }}>iaries</Text>
                </Text>


                <FontAwesome5 name="plus" size={22} color="#B0A5E3" style={{ left: wp('-3%') }} />



            </View>


            <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'space-around',marginHorizontal:wp('1%') }}>



                <View style={{ flexDirection: 'row', bottom: wp('-6%') }}>

                    <View style={{
                        width: wp('3%'), height: hp('11.8%')
                        , backgroundColor: '#454545', left: 20, alignItems: 'center',
                    }}>
                        <View style={{ top: hp('.2%'), justifyContent: 'center' }}>
                            <Foundation name="crown" size={6} color="white" />
                            <Text style={{ fontSize: wp('.89%'), textAlign: 'center', width: wp('1%'), color: '#8772CF', fontFamily: 'Poppins-Bold', top: hp('.3%') }}>COSMOS</Text>
                            <Text style={{ fontSize: wp('.89%'), width: wp('.65%'), textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', bottom: wp('-1%'), left: wp('.3%') }}>DIARIES</Text>
                        </View>

                    </View>


                    <View style={{ justifyContent: 'center', marginHorizontal: wp('8%'), bottom: hp('1%') }}>
                        <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: wp('5%'), bottom: hp('.4%') }}>01</Text>
                        <View style={{ bottom: hp('1.5%') }}>


                            <View style={{ bottom: wp('1.5%') }}>

                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', top: wp('1.5%'), fontSize: wp('2.7%') }}>Entrepreneur</Text>
                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', fontSize: wp('2.7%') }}>Elite</Text>

                            </View>


                            <Text style={{ color: '#666666', fontSize: wp('2.2%'), marginHorizontal: wp('.5%'), bottom: hp('.2%') }}>Dt:1/9/2020</Text>
                            <View style={{ top: wp('.7%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', width: wp('13%'), borderRadius: 3, height: hp('2.1%') }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: '#8772CF', fontSize: wp('2.5%'), marginLeft: wp('.8%') }}>View</Text>
                                <Entypo name="eye" size={10} color="white" style={{ marginLeft: wp('1%'), marginVertical: hp('.8%') }} />
                            </View>

                        </View>
                    </View>

                </View>









                <View style={{ flexDirection: 'row', bottom: wp('-6%') }}>

                    <View style={{
                        width: wp('3%'), height: hp('11.8%')
                        , backgroundColor: '#454545', left: 20, alignItems: 'center',
                    }}>
                        <View style={{ top: hp('.2%'), justifyContent: 'center' }}>
                            <Foundation name="crown" size={6} color="white" />
                            <Text style={{ fontSize: wp('.89%'), textAlign: 'center', width: wp('1%'), color: '#8772CF', fontFamily: 'Poppins-Bold', top: hp('.3%') }}>COSMOS</Text>
                            <Text style={{ fontSize: wp('.89%'), width: wp('.65%'), textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', bottom: wp('-1%'), left: wp('.3%') }}>DIARIES</Text>
                        </View>

                    </View>


                    <View style={{ justifyContent: 'center', marginHorizontal: wp('8%'), bottom: hp('1%') }}>
                        <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: wp('5%'), bottom: hp('.4%') }}>02</Text>
                        <View style={{ bottom: hp('1.5%') }}>


                            <View style={{ bottom: wp('1.5%') }}>

                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', top: wp('1.5%'), fontSize: wp('2.7%') }}>Reception</Text>
                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', fontSize: wp('2.7%') }}>Disaster</Text>

                            </View>


                            <Text style={{ color: '#666666', fontSize: wp('2.2%'), marginHorizontal: wp('.5%'), bottom: hp('.2%') }}>Dt:1/9/2020</Text>
                            <View style={{ top: wp('.7%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', width: wp('13%'), borderRadius: 3, height: hp('2.1%') }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: '#8772CF', fontSize: wp('2.5%'), marginLeft: wp('.8%') }}>View</Text>
                                <Entypo name="eye" size={10} color="white" style={{ marginLeft: wp('1%'), marginVertical: hp('.8%') }} />
                            </View>

                        </View>
                    </View>

                </View>
















                <View style={{ flexDirection: 'row', bottom: wp('-6%') }}>

                    <View style={{
                        width: wp('3%'), height: hp('11.8%')
                        , backgroundColor: '#454545', left: 20, alignItems: 'center',
                    }}>
                        <View style={{ top: hp('.2%'), justifyContent: 'center' }}>
                            <Foundation name="crown" size={6} color="white" />
                            <Text style={{ fontSize: wp('.89%'), textAlign: 'center', width: wp('1%'), color: '#8772CF', fontFamily: 'Poppins-Bold', top: hp('.3%') }}>COSMOS</Text>
                            <Text style={{ fontSize: wp('.89%'), width: wp('.65%'), textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', bottom: wp('-1%'), left: wp('.3%') }}>DIARIES</Text>
                        </View>

                    </View>


                    <View style={{ justifyContent: 'center', marginHorizontal: wp('8%'), bottom: hp('1%') }}>
                        <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: wp('5%'), bottom: hp('.4%') }}>03</Text>
                        <View style={{ bottom: hp('1.5%') }}>


                            <View style={{ bottom: wp('1.5%') }}>

                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', top: wp('1.5%'), fontSize: wp('2.7%') }}>Goals By</Text>
                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', fontSize: wp('2.7%') }}>2020</Text>

                            </View>


                            <Text style={{ color: '#666666', fontSize: wp('2.2%'), marginHorizontal: wp('.5%'), bottom: hp('.2%') }}>Dt:1/9/2020</Text>
                            <View style={{ top: wp('.7%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', width: wp('13%'), borderRadius: 3, height: hp('2.1%') }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: '#8772CF', fontSize: wp('2.5%'), marginLeft: wp('.8%') }}>View</Text>
                                <Entypo name="eye" size={10} color="white" style={{ marginLeft: wp('1%'), marginVertical: hp('.8%') }} />
                            </View>

                        </View>
                    </View>

                </View>

















            </View>




            {/* Chapters  */}

            <View style={{marginVertical:hp('8%')}}>          
              <View style={{
                flexDirection: 'row', justifyContent: 'space-around'
                , marginVertical: hp('-2%'), alignItems: 'center', marginHorizontal: wp('-17%')
            }}>
                <Text style={{ fontSize: wp('10%'), fontFamily: 'Poppins-ExtraBold', color: '#8772CF', top: hp('1%') }}> C
                    <Text style={{ fontSize: wp('10%'), color: '#000' }}>hapters</Text>
                </Text>


                <FontAwesome5 name="plus" size={22} color="#B0A5E3" style={{ left: wp('-3%') }} />



            </View>


            <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'space-around',marginHorizontal:wp('1%'),
            
        }}>



                <View style={{ flexDirection: 'row', bottom: wp('-6%') }}>

                    <View style={{
                        width: wp('3%'), height: hp('11.8%')
                        , backgroundColor: '#454545', left: 20, alignItems: 'center',
                    }}>
                        <View style={{ top: hp('.2%'), justifyContent: 'center' }}>
                            <Foundation name="crown" size={6} color="white" />
                            <Text style={{ fontSize: wp('.89%'), textAlign: 'center', width: wp('1%'), color: '#8772CF', fontFamily: 'Poppins-Bold', top: hp('.3%') }}>COSMOS</Text>
                            <Text style={{ fontSize: wp('.89%'), width: wp('.65%'), textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', bottom: wp('-1%'), left: wp('.3%') }}>DIARIES</Text>
                        </View>

                    </View>


                    <View style={{ justifyContent: 'center', marginHorizontal: wp('8%'), bottom: hp('1%') }}>
                          <View style={{bottom:hp('.8%')}}>
                       <Text style={{fontFamily:'Poppins-ExtraBold',fontSize:wp('3.5%')}}>CH <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: wp('5%'), bottom: hp('.4%') }}>05</Text></Text>
                       </View>
                       <Text style={{fontFamily:'Poppins-Light',fontSize:wp('2.7%'),bottom:hp('1.8%')}}>Business Ethics</Text>
                        <View style={{ bottom: hp('1.5%') }}>


                        <View style={{bottom:hp('1%')}}>

                        
                       
                            <View style={{ bottom: wp('-.3%') }}>

                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', top: wp('1.5%'), fontSize: wp('2.2%') }}>Entrepreneur</Text>
                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', fontSize: wp('2.2%') }}>Elite</Text>

                            </View>


                            <Text style={{ color: '#666666', fontSize: wp('2.2%'), marginHorizontal: wp('0%'), bottom: hp('.2%') }}>Dt:1/9/2020</Text>
                            <View style={{ top: wp('.7%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', width: wp('13%'), borderRadius: 3, height: hp('2.1%') }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: '#8772CF', fontSize: wp('2.5%'), marginLeft: wp('.8%') }}>View</Text>
                                <Entypo name="eye" size={10} color="white" style={{ marginLeft: wp('1%'), marginVertical: hp('.8%') }} />
                            </View>
                            </View>

                        </View>
                    </View>

                </View>









                <View style={{ flexDirection: 'row', bottom: wp('-6%') }}>

                    <View style={{
                        width: wp('3%'), height: hp('11.8%')
                        , backgroundColor: '#454545', left: 20, alignItems: 'center',
                    }}>
                        <View style={{ top: hp('.2%'), justifyContent: 'center' }}>
                            <Foundation name="crown" size={6} color="white" />
                            <Text style={{ fontSize: wp('.89%'), textAlign: 'center', width: wp('1%'), color: '#8772CF', fontFamily: 'Poppins-Bold', top: hp('.3%') }}>COSMOS</Text>
                            <Text style={{ fontSize: wp('.89%'), width: wp('.65%'), textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', bottom: wp('-1%'), left: wp('.3%') }}>DIARIES</Text>
                        </View>

                    </View>


                    <View style={{ justifyContent: 'center', marginHorizontal: wp('8%'), bottom: hp('1%') }}>
                          <View style={{bottom:hp('.8%')}}>
                       <Text style={{fontFamily:'Poppins-ExtraBold',fontSize:wp('3.5%')}}>CH <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: wp('5%'), bottom: hp('.4%') }}>05</Text></Text>
                       </View>
                       <Text style={{fontFamily:'Poppins-Light',fontSize:wp('2.7%'),bottom:hp('1.8%')}}>Business Ethics</Text>
                        <View style={{ bottom: hp('1.5%') }}>


                        <View style={{bottom:hp('1%')}}>

                        
                       
                            <View style={{ bottom: wp('-.3%') }}>

                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', top: wp('1.5%'), fontSize: wp('2.2%') }}>Entrepreneur</Text>
                                <Text style={{ fontFamily: 'Poppins-Light', color: '#000', fontSize: wp('2.2%') }}>Elite</Text>

                            </View>


                            <Text style={{ color: '#666666', fontSize: wp('2.2%'), marginHorizontal: wp('0%'), bottom: hp('.2%') }}>Dt:1/9/2020</Text>
                            <View style={{ top: wp('.7%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', width: wp('13%'), borderRadius: 3, height: hp('2.1%') }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: '#8772CF', fontSize: wp('2.5%'), marginLeft: wp('.8%') }}>View</Text>
                                <Entypo name="eye" size={10} color="white" style={{ marginLeft: wp('1%'), marginVertical: hp('.8%') }} />
                            </View>
                            </View>

                        </View>
                    </View>

                </View>













                <View style={{ flexDirection: 'row', bottom: wp('-6%') }}>

<View style={{
    width: wp('3%'), height: hp('11.8%')
    , backgroundColor: '#454545', left: 20, alignItems: 'center',
}}>
    <View style={{ top: hp('.2%'), justifyContent: 'center' }}>
        <Foundation name="crown" size={6} color="white" />
        <Text style={{ fontSize: wp('.89%'), textAlign: 'center', width: wp('1%'), color: '#8772CF', fontFamily: 'Poppins-Bold', top: hp('.3%') }}>COSMOS</Text>
        <Text style={{ fontSize: wp('.89%'), width: wp('.65%'), textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', bottom: wp('-1%'), left: wp('.3%') }}>DIARIES</Text>
    </View>

</View>


<View style={{ justifyContent: 'center', marginHorizontal: wp('8%'), bottom: hp('1%') }}>
      <View style={{bottom:hp('.8%')}}>
   <Text style={{fontFamily:'Poppins-ExtraBold',fontSize:wp('3.5%')}}>CH <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: wp('5%'), bottom: hp('.4%') }}>05</Text></Text>
   </View>
   <Text style={{fontFamily:'Poppins-Light',fontSize:wp('2.7%'),bottom:hp('1.8%')}}>Startup & Exp</Text>
    <View style={{ bottom: hp('1.5%') }}>


    <View style={{bottom:hp('1%')}}>

    
   
        <View style={{ bottom: wp('-.3%') }}>

            <Text style={{ fontFamily: 'Poppins-Light', color: '#000', top: wp('1.5%'), fontSize: wp('2.2%') }}>Entrepreneur</Text>
            <Text style={{ fontFamily: 'Poppins-Light', color: '#000', fontSize: wp('2.2%') }}>Elite</Text>

        </View>


        <Text style={{ color: '#666666', fontSize: wp('2.2%'), marginHorizontal: wp('0%'), bottom: hp('.2%') }}>Dt:1/9/2020</Text>
        <View style={{ top: wp('.7%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', width: wp('13%'), borderRadius: 3, height: hp('2.1%') }}>
            <Text style={{ fontFamily: "Poppins-Bold", color: '#8772CF', fontSize: wp('2.5%'), marginLeft: wp('.8%') }}>View</Text>
            <Entypo name="eye" size={10} color="white" style={{ marginLeft: wp('1%'), marginVertical: hp('.8%') }} />
        </View>
        </View>

    </View>
</View>

</View>











            </View>


            </View>


           
          










            














        </View>
    )
}

const styles = StyleSheet.create({



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
        width: wp('90%'),
        marginHorizontal: wp('-5%')

    },


})
