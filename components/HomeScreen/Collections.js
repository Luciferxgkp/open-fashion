import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HomeScreenStyles } from "../../Styles";

const Collections = () => {
  return (
    <View style={HomeScreenStyles.Collections}>
      <Text style={HomeScreenStyles.Header}>COLLECTIONS</Text>
      <Cards
        imgUrl={require("../../assets/Frame_2.png")}
        styles={{
          height: 330,
          width: "100%",
        }}
      />
      <Cards
        imgUrl={require("../../assets/Group_269.png")}
        styles={{
          height: 396,
          width: 300,
        }}
      />
      <Cards
        imgUrl={require("../../assets/Video.png")}
        styles={{
          marginTop: 30,
          height: 230,
        }}
      />
    </View>
  );
};

const Cards = ({ imgUrl = "", styles }) => {
  return (
    <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
      <Image source={imgUrl} style={{ ...styles }} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export default Collections;
