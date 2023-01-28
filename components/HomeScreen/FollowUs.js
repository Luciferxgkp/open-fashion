import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HomeScreenStyles } from "../../Styles";

const FollowUs = () => {
  return (
    <View style={[HomeScreenStyles.Collections, { marginTop: 30 }]}>
      <Text style={HomeScreenStyles.Header}>FOLLOW US</Text>
      <Image
        source={require("../../assets/instagram.png")}
        style={{ height: 25, width: 25, marginTop: 10 }}
        resizeMode="contain"
      />
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <InstaCard ImgUrl={require("../../assets/instaId1.png")} id="@mia" />
          <InstaCard
            ImgUrl={require("../../assets/instaId2.png")}
            id="@_jihyn"
            // styles={{ paddingLeft: 0 }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <InstaCard ImgUrl={require("../../assets/instaId3.png")} id="@mia" />
          <InstaCard ImgUrl={require("../../assets/instaId4.png")} id="@mia" />
        </View>
      </View>
    </View>
  );
};
const InstaCard = ({ ImgUrl, id, styles = {} }) => {
  return (
    <TouchableOpacity
      style={[
        {
          aspectRatio: 1 / 1,
          width: "50%",
          padding: 10,
          alignItems: "center",
        },
        { ...styles },
      ]}
    >
      <Image
        source={ImgUrl}
        style={{ height: "100%", width: "100%", position: "absolute" }}
      />
      <Text
        style={{
          top: 150,
          right: 60,
          color: "white",
          letterSpacing: 1,
          fontSize: 14,
        }}
      >
        {id}
      </Text>
    </TouchableOpacity>
  );
};

export default FollowUs;
