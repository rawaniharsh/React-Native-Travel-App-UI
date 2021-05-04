import React from "react";
import COLORS from "../../constants/colors";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SearchBar } from "react-native-elements";
import places from "../../constants/places"; 
const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const CategoryIcons = [
    <Icon name="flight" size={25} color={COLORS.primary} />,
    <Icon name="beach-access" size={25} color={COLORS.primary} />,
    <Icon name="near-me" size={25} color={COLORS.primary} />,
    <Icon name="place" size={25} color={COLORS.primary} />,
  ];

  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {CategoryIcons.map((icon, index) => (
          <View key={index} style={style.IconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({place}) => {
    return (
      <ImageBackground
        style={style.cardImage}
        source={place.image}
      ></ImageBackground>
    );
  };
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
          <SearchBar
            ref={(search) => (this.search = search)}
            inputStyle={{ backgroundColor: "white", marginTop: -10 }}
            containerStyle={{
              backgroundColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              height: 50,
              borderColor: COLORS.primary,
              marginTop: 30,
            }}
            leftIconContainerStyle={{ backgroundColor: "white" }}
            inputContainerStyle={{ backgroundColor: "white", height: 40 }}
            placeholderTextColor={COLORS.primary}
            placeholder="Search..."
          />
        </View>
        <ListCategories />
        <Text style={style.sectionTitle}>Places</Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
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
    paddingHorizontal: 20,
    marginLeft: 10,
    elevation: 5,
  },
  categoryContainer: {
    marginHorizontal: 20,
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  IconContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 22,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    overflow: "hidden",
    borderRadius: 10,
    padding: 10
  },
});

export default HomeScreen;
