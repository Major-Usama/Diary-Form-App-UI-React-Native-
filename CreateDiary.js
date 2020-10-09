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

export default function CreateDiary() {
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
      source={require("./assets/createDiaryB.jpg")}
      style={{
        width: wp("100%"),
        height: hp("100%"),
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ left: wp("-1.5%") }}>
        <View style={{ marginHorizontal: wp("-3.2%") }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: hp("1%"),
              alignItems: "center",
              marginHorizontal: wp("-12%"),
            }}
          >
            <View style={{ left: wp("2%") }}>
              <Text
                style={{
                  fontSize: wp("10%"),
                  color: "#000",
                  fontFamily: "Poppins-ExtraBold",
                }}
              >
                {" "}
                Create
                <Text
                  style={{
                    fontSize: wp("10%"),
                    color: "#8772CF",
                    top: hp("1%"),
                  }}
                >
                  {" "}
                  D
                  <Text style={{ fontSize: wp("10%"), color: "#000" }}>
                    iary
                  </Text>
                </Text>
              </Text>
            </View>

            <FontAwesome5
              name="user"
              size={22}
              color="#B0A5E3"
              style={{ right: wp("7%") }}
            />
          </View>
          <View style={{ bottom: hp("1%") }}>
            <Text
              style={{
                fontFamily: "Poppins-Light",
                fontSize: wp("3%"),
                marginHorizontal: wp("10%"),
                top: hp("-1.4%"),
                color: "#8772CF",
              }}
            >
              Be NoteWorthy !
            </Text>
          </View>

          <View style={{ marginVertical: hp("-3%") }}>
            <View style={styles.userContainer}>
              <TextInput
                maxLength={120}
                style={styles.inputName}
                onChangeText={(val) => setVal1(val)}
              >
                <Text style={{ fontSize: wp("3.5%") }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      color: "#8772CF",
                      fontSize: wp("3.5%"),
                    }}
                  >
                    Diary Name :{" "}
                  </Text>{" "}
                  Business Ethics
                </Text>
              </TextInput>
            </View>

            <View style={styles.userContainer2}>
              <TextInput
                maxLength={120}
                style={styles.inputName}
                onChangeText={(val) => setVal1(val)}
              >
                <Text style={{ fontSize: wp("3.5%") }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      color: "#8772CF",
                      fontSize: wp("3.5%"),
                    }}
                  >
                    Date :{" "}
                  </Text>{" "}
                  1/9/2020
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
                      color: "#8772CF",
                      fontSize: wp("3.5%"),
                    }}
                  >
                    Diary No :{" "}
                  </Text>{" "}
                  01
                </Text>
              </TextInput>
            </View>
          </View>

          <Text
            style={{
              fontSize: wp("3%"),
              top: hp("10%"),
              fontFamily: "Poppins-Bold",
              color: "#8772CF",
              marginHorizontal: wp("11.1%"),
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
            top: hp("10.5%"),
            marginHorizontal: wp("7%"),
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: "center",
          }}
          source={require("./assets/editorZ.png")}
        >
          <View style={{ left: wp("7%"), top: hp("-3%") }}>
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
                borderBottomWidth: 0.2,
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
                borderBottomWidth: 0.2,
                bottom: "2.5%",
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
                borderBottomWidth: 0.2,
                bottom: "2.5%",
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
                asahfajhsfbdajhddfbadkdjfnkjdffhjh
              </Text>
            </TextInput>
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
            source={require("./assets/hangerZ.png")}
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
    left: wp("1.5%"),
  },

  inputName: {
    borderBottomColor: "#8772CF",
    borderBottomWidth: 2,
    width: wp("88%"),
  },

  inputName1: {
    borderBottomColor: "#8772CF",
    borderBottomWidth: 2,
    width: wp("30%"),
    marginHorizontal: wp("5%"),
  },

  userContainer1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: hp("1.5%"),
    marginVertical: hp("-5.3%"),
    left: wp("3%"),
  },
  userContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1.5%"),
    bottom: hp("3.5%"),
    left: wp("1.5%"),
  },
});
