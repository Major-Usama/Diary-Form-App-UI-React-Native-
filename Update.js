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
import { ScrollView } from "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function Update({ navigation }) {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [val3, setVal3] = useState();
  const [val4, setVal4] = useState();

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
      source={require("./assets/profile_up.jpg")}
      style={styles.container}
    >
      <View style={styles.inputsContainer}>
        <View style={styles.userContainer}>
          <TextInput
            maxLength={20}
            placeholder="Name"
            style={styles.inputName}
            value={val1}
            onChangeText={(val) => setVal1(val)}
          />
          <FontAwesome5 name="user" size={16} color="#B0A5E3" />
        </View>

        <View style={styles.userContainer}>
          <TextInput
            placeholder="Email-ID"
            style={styles.inputName}
            value={val2}
            onChangeText={(val) => setVal2(val)}
          />
          <Fontisto name="email" size={16} color="#B0A5E3" />
        </View>

        <View style={styles.userContainer}>
          <TextInput
            maxLength={15}
            keyboardType="phone-pad"
            placeholder="Mobile-No"
            style={styles.inputName}
            value={val3}
            onChangeText={(val) => setVal3(val)}
          />
          <Feather name="phone" size={16} color="#B0A5E3" />
        </View>

        <View style={styles.userContainer}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputName}
            value={val4}
            onChangeText={(val) => setVal4(val)}
          />
          <SimpleLineIcons name="key" size={16} color="#B0A5E3" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <View style={styles.registerButton}>
            <Text style={styles.buttonText}>Update</Text>
          </View>
        </TouchableOpacity>
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
    alignItems: "flex-start",
    alignSelf: "flex-end",
    height: hp("95%"),
  },

  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1%"),
    marginHorizontal: wp("4%"),
  },

  inputName: {
    borderBottomColor: "#FFCB47",
    borderBottomWidth: 2,
    width: wp("42%"),
    marginHorizontal: wp("-5%"),
  },
  icon1: {
    width: wp("5%"),
    height: hp("3%"),
  },
  registerButton: {
    width: wp("32%"),
    padding: wp(".6%"),
    backgroundColor: "#F7C900",
    borderRadius: 5,
    marginVertical: hp("5%"),
    left: wp("1%"),
    justifyContent: "center",
    alignItems: "center",
    bottom: hp("1.5%"),
  },
  buttonText: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: wp("4%"),
    color: "#734FBB",
  },
});
