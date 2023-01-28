import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HomeScreenStyles } from "../../Styles";

const Trending = () => {
  return (
    <View style={{ marginTop: 40, alignItems: "center" }}>
      <Text style={HomeScreenStyles.Header}>@TRENDING</Text>
      <View
        style={{
          margin: 20,
          flexWrap: "wrap",
          flexDirection: "row",
          height: "auto",
        }}
      >
        <HashTags title={"#2021"} />
        <HashTags title={"#spring"} />
        <HashTags title={"#collection"} />
        <HashTags title={"#fall"} />
        <HashTags title={"#dress"} />
        <HashTags title={"#autumncollection"} />
        <HashTags title={"#openfashion"} />
      </View>
    </View>
  );
};
const HashTags = ({ title = "" }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F9F9F9",
        borderRadius: 30,
        padding: 10,
        margin: 5,
      }}
    >
      <Text style={{ fontSize: 14, letterSpacing: 1, textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Trending;
