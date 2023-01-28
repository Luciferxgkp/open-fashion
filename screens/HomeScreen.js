import { ScrollView, StatusBar, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import {
  Banner,
  Brands,
  Collections,
  FollowUs,
  JustForYou,
  NewArrivals,
  OpenFashion,
  Trending,
} from "../components/HomeScreen";

const HomeScreen = () => {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Banner />
        <NewArrivals />
        <Brands />
        <Collections />
        <JustForYou />
        <Trending />
        <OpenFashion />
        <FollowUs />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
