import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();

  const [loaded] = useFonts({
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      source={require("./assets/login.jpg")}
      style={styles.container}
    >
      <View style={styles.inputsContainer}>
        <View style={styles.userContainer1}>
          <TextInput
            maxLength={20}
            placeholder="Email/Phone"
            style={styles.inputName1}
            value={val1}
            onChangeText={(val) => setVal1(val)}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              right: wp("6%"),
            }}
          >
            <Fontisto name="email" size={12} color="#B0A5E3" />
            <Text style={{ color: "#B0A5E3" }}> / </Text>
            <Feather name="phone" size={12} color="#B0A5E3" />
          </View>
        </View>

        <View style={styles.userContainer2}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputName}
            value={val2}
            onChangeText={(val) => setVal2(val)}
          />
          <SimpleLineIcons name="key" size={12} color="#B0A5E3" />
        </View>

        <View style={{ alignSelf: "flex-start" }}>
          <Text
            onPress={() => navigation.navigate("Recover")}
            style={{ color: "#734FBB", fontSize: 10, left: wp("1%") }}
          >
            Forgot Password ?
          </Text>
        </View>

        <View style={styles.registerButton}>
          <Text
            onPress={() => navigation.navigate("Welcome")}
            style={styles.buttonText}
          >
            Log In
          </Text>
        </View>

        <View
          style={{ alignSelf: "center", bottom: hp("3%"), right: wp("1%") }}
        >
          <Text
            onPress={() => navigation.navigate("Reg")}
            style={{ color: "#734FBB", fontSize: 11 }}
          >
            Create an Account ?
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: hp("5%"),
  },

  inputsContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
    height: hp("65%"),
  },

  userContainer1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1%"),
    left: wp("3%"),
  },

  userContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1%"),
    marginHorizontal: wp("4%"),
  },

  inputName1: {
    borderBottomColor: "#FFCB47",
    borderBottomWidth: 2,
    width: wp("38%"),
    marginHorizontal: wp("-5%"),
  },

  inputName: {
    borderBottomColor: "#FFCB47",
    borderBottomWidth: 2,
    width: wp("38%"),
    marginHorizontal: wp("-5%"),
  },
  icon1: {
    width: wp("5%"),
    height: hp("3%"),
  },
  registerButton: {
    width: wp("28%"),
    padding: wp(".4%"),
    backgroundColor: "#F7C900",
    borderRadius: 5,
    marginVertical: hp("4%"),
    justifyContent: "center",
    alignItems: "center",
    right: wp("1%"),
  },
  buttonText: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: wp("4.8%"),
    color: "#734FBB",
  },
});
