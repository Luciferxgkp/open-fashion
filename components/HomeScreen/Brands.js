import { View, Image } from "react-native";

const Brands = () => {
  return (
    <View style={{ marginTop: 30, height: 250 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 120, height: 10 }}
          source={require("../../assets/3.png")}
        />
      </View>
      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ImageComponent imgUrl={require("../../assets/Prada.png")} />
            <ImageComponent imgUrl={require("../../assets/Burberry.png")} />
            <ImageComponent imgUrl={require("../../assets/Boss.png")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ImageComponent imgUrl={require("../../assets/Catier.png")} />
            <ImageComponent imgUrl={require("../../assets/Gucci.png")} />
            <ImageComponent imgUrl={require("../../assets/TiffanyAndCo.png")} />
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 120, height: 10 }}
          source={require("../../assets/3.png")}
        />
      </View>
    </View>
  );
};

const ImageComponent = ({ imgUrl }) => (
  <Image
    source={imgUrl}
    style={{
      width: 100,
      height: 100,
      resizeMode: "contain",
    }}
  />
);

export default Brands;
