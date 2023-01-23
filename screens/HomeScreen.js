import { ScrollView, StatusBar, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Banner, Brands, NewArrivals } from "../components/HomeScreen";

const HomeScreen = () => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Banner />
        <NewArrivals />
        <Brands />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
