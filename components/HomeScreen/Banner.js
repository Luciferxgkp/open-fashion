import { View, Text, Image, TouchableOpacity } from "react-native";
import { HomeScreenStyles } from "../../Styles";

const Banner = () => (
  <View style={HomeScreenStyles.Banner}>
    <Image
      source={require("../../assets/banner.png")}
      style={{
        resizeMode: "cover",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    />
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View></View>
      <View>
        <Image
          source={require("../../assets/luxuryAndFashion.png")}
          style={{ marginLeft: 10, resizeMode: "contain", width: 375 }}
        />
      </View>
      <View>
        <TouchableOpacity>
          <View style={HomeScreenStyles.Button}>
            <Text style={{ color: "#E0CFBA", fontSize: 18, letterSpacing: 2 }}>
              EXPORE COLLECTION
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Banner;
