import React from "react";
import COLORS from "../../constants/colors";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{ color: COLORS.white, fontSize: 24, fontWeight: "bold" }}
          >
            Explore
          </Text>
          <Text
            style={{ color: COLORS.white, fontSize: 24, fontWeight: "bold" }}
          >
            Beautiful places
          </Text>
          <View style={style.inputcontainer}>
            <Icon name="search" size={28} color={COLORS.primary}/>
            <TextInput
            placeholder="Search Places"
            style={{color: COLORS.grey, height:30}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
  },
  inputcontainer: {
    height: 600,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});

export default HomeScreen;
