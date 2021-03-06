import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import PickerComponent from "./PickerComponent";

export default function EntrepElite() {
  const [val1, setVal1] = useState();

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
      source={require("./assets/businessEthicsB.jpg")}
      style={{
        width: wp("100%"),
        height: hp("100%"),
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ right: wp("1.5%") }}>
        <View style={{ marginHorizontal: wp("-3%") }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: hp("1%"),
              alignItems: "center",
              marginHorizontal: wp("-25%"),
            }}
          >
            <Text
              style={{
                fontSize: wp("11%"),
                fontFamily: "Poppins-ExtraBold",
                color: "#8772CF",
                top: hp("1%"),
              }}
            >
              01
            </Text>

            <FontAwesome5
              name="user"
              size={22}
              color="#B0A5E3"
              style={{ left: wp("3%") }}
            />
          </View>
          <View style={{ bottom: hp("1%") }}>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: wp("6%"),
                marginHorizontal: wp("9.5%"),
                top: hp("-2.2%"),
              }}
            >
              Entrepreneur Elite
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Light",
                fontSize: wp("3%"),
                marginHorizontal: wp("10%"),
                top: hp("-2.9%"),
              }}
            >
              1/9/2020
            </Text>
          </View>

          <View style={{ marginVertical: hp("-5%") }}>
            <View style={styles.userContainer}>
              <PickerComponent />
            </View>

            <View style={styles.userContainer2}>
              <TextInput
                maxLength={120}
                style={styles.inputName2}
                onChangeText={(val) => setVal1(val)}
              >
                <Text style={{ fontSize: wp("3.5%") }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      color: "#FFCB47",
                      fontSize: wp("3.5%"),
                    }}
                  >
                    Chapter No :{" "}
                  </Text>{" "}
                  01
                </Text>
              </TextInput>
            </View>

            <View style={styles.userContainer1}>
              <TextInput
                maxLength={120}
                style={styles.inputName1}
                onChangeText={(val) => setVal1(val)}
              >
                <Text style={{ fontSize: wp("3.5%") }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      color: "#FFCB47",
                      fontSize: wp("3.5%"),
                    }}
                  >
                    Chapter Name :{" "}
                  </Text>{" "}
                  Business Ethics
                </Text>
              </TextInput>
            </View>
          </View>

          <Text
            style={{
              fontSize: wp("3%"),
              top: hp("12.5%"),
              fontFamily: "Poppins-Bold",
              color: "#FFCB47",
              marginHorizontal: wp("10.5%"),
            }}
          >
            ENTER SHORT DESCRIPTION
          </Text>
        </View>
        <ImageBackground
          style={{
            width: wp("90%"),
            height: hp("35%"),
            overflow: "hidden",
            top: hp("13%"),
            marginHorizontal: wp("7%"),
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: "center",
          }}
          source={require("./assets/editorY.png")}
        >
          <View style={{ flexDirection: "row", overflow: "hidden" }}>
            <View style={{ left: wp("5%"), top: hp("1%") }}>
              <TextInput
                maxLength={120}
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  bottom: hp("2%"),
                  width: wp("77%"),
                }}
                onChangeText={(val) => setVal1(val)}
              >
                <Text
                  style={{
                    fontSize: wp("2.5%"),
                    color: "#fff",
                    fontFamily: "Poppins-Light",
                    top: hp("4%"),
                  }}
                >
                  asahfajhsfbdajhddfbadkjbfakhdhfbadkhlbjdhfvjdshfjdhdfgihj
                </Text>
              </TextInput>

              <TextInput
                maxLength={120}
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  bottom: hp("2%"),
                  width: wp("77%"),
                }}
                onChangeText={(val) => setVal1(val)}
              >
                <Text
                  style={{
                    fontSize: wp("2.5%"),
                    color: "#fff",
                    fontFamily: "Poppins-Light",
                    top: hp("4%"),
                  }}
                >
                  asahfajhsfbdajhddfbadkjbfakhdhfbadkhlbjdhfvjdshfjdhdfgihj
                </Text>
              </TextInput>

              <TextInput
                maxLength={120}
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  bottom: hp("2%"),
                  width: wp("77%"),
                }}
                onChangeText={(val) => setVal1(val)}
              >
                <Text
                  style={{
                    fontSize: wp("2.5%"),
                    color: "#fff",
                    fontFamily: "Poppins-Light",
                    top: hp("4%"),
                  }}
                >
                  asahfajhsfbdajhddfbadkjbfakhdhfbadkhlbjdhfvjdshfjdhdfgihj
                </Text>
              </TextInput>

              <TextInput
                maxLength={120}
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  bottom: hp("2%"),
                  width: wp("77%"),
                }}
                onChangeText={(val) => setVal1(val)}
              >
                <Text
                  style={{
                    fontSize: wp("2.5%"),
                    color: "#fff",
                    fontFamily: "Poppins-Light",
                    top: hp("4%"),
                  }}
                >
                  asahfajhsfbdajhddfbadkjbfakhdhfbadkhlbjdhfvjdshfjdhdfgihj
                </Text>
              </TextInput>

              <TextInput
                maxLength={120}
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  bottom: "2%",
                  width: wp("77%"),
                }}
                onChangeText={(val) => setVal1(val)}
              >
                <Text
                  style={{
                    fontSize: wp("2.5%"),
                    color: "#fff",
                    fontFamily: "Poppins-Light",
                    top: hp("4%"),
                  }}
                >
                  asahfajhsfbdajhddfbadkjbfakhdhfbadkhlbjdhfvjdshfjdhdfgihj
                </Text>
              </TextInput>

              <TextInput
                maxLength={120}
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  bottom: wp("2%"),
                  width: wp("77%"),
                }}
                onChangeText={(val) => setVal1(val)}
              >
                <Text
                  style={{
                    fontSize: wp("2.5%"),
                    color: "#fff",
                    fontFamily: "Poppins-Light",
                    top: hp("4%"),
                  }}
                >
                  asahfajhsfbdajhddfbadkjbfakhdhfbadkhlbjdhfvjdshfjdhdfgihj
                </Text>
              </TextInput>
            </View>

            <View
              style={{
                marginHorizontal: wp("10%"),
                bottom: wp("-2%"),
                justifyContent: "center",
                right: wp("2%"),
              }}
            >
              <View
                style={{
                  width: wp(".8%"),
                  top: hp(".2%"),
                  height: hp("1.5%"),
                  backgroundColor: "#ECBD45",
                  borderRadius: 5,
                }}
              />

              <View
                style={{
                  width: wp(".8%"),
                  height: hp("16%"),
                  backgroundColor: "#E2E2E2",
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            alignItems: "center",
            height: hp("31%"),
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: wp("13%"), height: hp("13%"), overflow: "hidden" }}
            source={require("./assets/hangerY.png")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1.5%"),
    marginVertical: hp("2%"),
    bottom: hp("1.5%"),
    left: wp("1.5%"),
  },

  inputName: {
    borderBottomColor: "#FFCB47",
    borderBottomWidth: 2,
    width: wp("88%"),
  },

  inputName1: {
    borderBottomColor: "#FFCB47",
    borderBottomWidth: 2,
    width: wp("75%"),
    marginHorizontal: wp("5%"),
  },

  inputName2: {
    borderBottomColor: "#FFCB47",
    borderBottomWidth: 2,
    width: wp("34%"),
    marginHorizontal: wp("5%"),
  },

  userContainer1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: hp("1.5%"),
    marginVertical: hp("-5.7%"),
    left: wp("3%"),
    bottom: hp("4.5%"),
  },

  userContainer2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: hp("1.5%"),
    marginVertical: hp("-4.5%"),
    left: wp("3%"),
    bottom: hp("1.5%"),
  },
});
