import React, { Component } from "react";
import { Picker, SafeAreaView, Text, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
export default class App extends Component {
  state = {
    hand: "right",
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, bottom: hp("5.5%"), marginHorizontal: wp("7%") }}
      >
        <Picker
          selectedValue={this.state.hand}
          onValueChange={(hand) => this.setState({ hand })}
          style={{
            width: 120,
            fontSize: 14,
            top: hp("3.9%"),
            marginHorizontal: wp("20.5%"),justifyContent:'center',alignItems:'center'
          }}
          mode="dropdown"
          itemStyle={{ fontWeight: "bold" }}
        >
          <Picker.Item label="Chapter" value="right" />
          <Picker.Item label="Chapter 1" value="left" />
          <Picker.Item label="Chapter 2" value="left1" />
          <Picker.Item label="Chapter 3" value="left2" />
        </Picker>

        <View style={{ width: "90%", bottom: hp("1%") }}>
          <Text style={{ color: "#FFCB49", fontWeight: "bold",right:wp('.9%') }}>Diary Name :</Text>
        </View>
      </SafeAreaView>
    );
  }
}
