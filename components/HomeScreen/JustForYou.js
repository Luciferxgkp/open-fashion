import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { HomeScreenStyles } from "../../Styles";
import ProductCard from "../ProductCard";

const JustForYou = () => {
  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={HomeScreenStyles.Header}>JUST FOR YOU</Text>
      <Image
        style={HomeScreenStyles.Line}
        source={require("../../assets/3.png")}
      />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ height: 400 }}
      >
        <ProductCard
          styles={{ height: "100%", width: 250, margin: 16 }}
          imgUrl={require("../../assets/productImg1.png")}
          title={"21WN reversible angora cardigan"}
          price="120"
        />
        <ProductCard
          styles={{ height: "100%", width: 250, margin: 16, marginLeft: 0 }}
          imgUrl={require("../../assets/productImg2.png")}
          title={"21WN reversible angora cardigan"}
          price="120"
        />
        <ProductCard
          styles={{ height: "100%", width: 250, margin: 16, marginLeft: 0 }}
          imgUrl={require("../../assets/productImg3.png")}
          title={"21WN reversible angora cardigan"}
          price="120"
        />
        <ProductCard
          styles={{ height: "100%", width: 250, margin: 16, marginLeft: 0 }}
          imgUrl={require("../../assets/productImg4.png")}
          title={"Oblong bag"}
          price="120"
        />
      </ScrollView>
    </View>
  );
};

export default JustForYou;
