import React, { Component } from 'react';
import { View, Text,Animated, Alert, Button,StyleSheet, ImageBackground, StatusBar, Platform, ScrollView, TouchableOpacity } from 'react-native';
import ButtonComp from './ButtonComp';
import TestComp from './TestComp'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shpwTrainerProfile: false,
      showmesage: false,
      showbutton: false,
      showcat: false,
      initialQuestion:false,
      initialQuestion1L:false,

      fadeAnimation: new Animated.Value(0)
    };
  }


  botChat = () => {

    if (this.state.initialQuestion === true && this.state.initialQuestion1 === false && this.state.nextQuestion === false) {
      this.setState({
        initialQuestion: true
      })
    }

    else if (this.state.initsialQuestion1 === true && this.state.nextQuestion === false) {
      this.setState({
        initialQuestion1: true
      })


    }

    else if (this.state.initsialQuestion1 === true && this.state.nextQuestion === false && this.state.initialQuestion === true) {
      this.setState({
        nextQuestion: true
      })


    }
    else if (this.state.initialQuestion === true && this.state.nextQuestion === true && this.state.initialQuestion1) {
      setTimeout(
        function () {
          this.setState({ showTrainerProfile: true });
        }.bind(this),
        5000
      )
      this.setState({
        buttonDisplay: false
      })
    } else {
      this.setState({
        initialQuestion: true
      })
    }
  }

  fadeIn = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver:true
  
    }).start();
  };

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ showTrainerProfile: true });
      }.bind(this),
      2000
    ),
      setTimeout(
        function () {
          this.setState({ showmesage: true });
        }.bind(this),
        5000
      ),

      setTimeout(
        function () {
          this.setState({ showbutton: true });
        }.bind(this),
        9000
      ),

      setTimeout(
        function () {
          this.setState({ showcat: true });
        }.bind(this),
        10000
      )

      setTimeout(
        function () {
          this.setState({ showcat2: true });
        }.bind(this),
        9000
      )

  }



  render() {
    return (

      
        <ImageBackground source={require('../CoSMoSUI/assets/Group.png')} style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }}>
          <ScrollView > 

          {this.state.showTrainerProfile === true ?
            <TestComp text="Hello how are you" /> : null}

          {this.state.showmesage === true ?
            <TestComp text="Hello First Question" /> : null}

          {this.state.initialQuestion === true ?
            <View style={{
              width: 150, height: 30, backgroundColor: 'brown',
              alignItems: 'center', justifyContent: 'center', borderRadius: 20, alignSelf: 'flex-end',
              marginTop:10,

            }}>
              <Text>Cat1</Text>
            </View>

            : null}

<Animated.View
          style={[
          
            {
              opacity: this.state.fadeAnimation
            }
          ]}
        >
            <View style={{width:'30%',height:30,backgroundColor:'tomato',
            alignItems:'center',justifyContent:'center',marginHorizontal:5,
            borderRadius:20,marginVertical:5,alignSelf:'flex-end'
        }}>
                    <Text>fade in</Text>
            </View>
        </Animated.View>

{ this.state.showbutton===true&& this.state.fadeAnimation?
					<View style={{marginTop: '2%'}}>
						
						<TestComp text="Hello Second Question"/>
					</View> : null }


          {this.state.initialQuestion1 === true ? 
            <View style={{
              width: 150, height: 30, backgroundColor: 'brown',
              alignItems: 'center', justifyContent: 'center', borderRadius: 20, alignSelf: 'flex-end',
              marginTop:10,

            }}>
              <Text>Cat1</Text>
            </View>

            : null}





        

         <TouchableOpacity onPress={this.fadeIn} style={styles.buttonRow}>
        <View style={{width:'30%',height:30,backgroundColor:'tomato',
            alignItems:'center',justifyContent:'center',marginHorizontal:5,
            borderRadius:20,marginVertical:5
        }}>
                    <Text>fade in</Text>
            </View>
            </TouchableOpacity>




</ScrollView>
        </ImageBackground>

      





    );
  }
}
const styles = StyleSheet.create({
  
  fadingContainer: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: "lightseagreen"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
    color : "#fff"
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
})