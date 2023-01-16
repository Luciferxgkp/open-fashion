import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../assets/Menu2x.png")}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 35 }}>
        <Image
          source={require("../assets/Logo4x.png")}
          style={{ width: 100, height: 50 }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "18%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/Search2x.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/shopping_bag2x.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});
export default Header;
