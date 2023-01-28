import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { HomeScreenStyles } from "../../Styles";

const OpenFashion = () => {
  return (
    <View
      style={{
        // marginTop: 20,
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        textAlign: "center",
      }}
    >
      <Image
        source={require("../../assets/Logo4x.png")}
        style={{ height: 80, width: 120, marginTop: 20, marginBottom: 0 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 14,
          width: "70%",
          // marginTop: -10,
          letterSpacing: 1,
          textAlign: "center",
          color: "#555555",
        }}
      >
        Making a luxurious lifestyle accessible for a generous group of women is
        our daily drive.
      </Text>
      <View style={{ alignItems: "center" }}>
        <Image
          style={HomeScreenStyles.Line}
          source={require("../../assets/3.png")}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <SmallCards
            imgUrl={require("../../assets/Miroodles_Sticker.png")}
            text="Fast shipping. Free on orders over $25."
          />
          <SmallCards
            imgUrl={require("../../assets/Miroodles_Sticker_2.png")}
            text="Sustainable process from start to finish."
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <SmallCards
            imgUrl={require("../../assets/Miroodles_Sticker_3.png")}
            text="Unique designs and high-quality materials."
          />
          <SmallCards
            imgUrl={require("../../assets/Miroodles_Sticker_4.png")}
            text="Fast shipping. Free on orders over $25."
          />
        </View>
      </View>
      <Image
        source={require("../../assets/–.png")}
        style={{ width: 60, height: 80, marginBottom: 10 }}
        resizeMode="contain"
      />
    </View>
  );
};
const SmallCards = ({ imgUrl, text }) => {
  return (
    <TouchableOpacity
      style={{ width: "50%", padding: 10, alignItems: "center" }}
    >
      <Image
        source={imgUrl}
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 13,
          textAlign: "center",
          color: "#555555",
          width: "70%",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default OpenFashion;
