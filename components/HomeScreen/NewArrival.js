import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { HomeScreenStyles } from "../../Styles";
import { currencyFormatter } from "../Helper";

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <View style={HomeScreenStyles.NewArrival}>
      <View style={HomeScreenStyles.NewArrivalheader}>
        <Text style={{ fontSize: 18, letterSpacing: 4 }}>NEW ARRIVAL</Text>
        <Image
          style={{ width: 120, height: 10, marginBottom: 10 }}
          source={require("../../assets/3.png")}
        />
      </View>
      <View style={HomeScreenStyles.NewArrivalMenu}>
        <TouchableOpacity
          onPress={() => {
            setActiveTab("All");
          }}
          style={{ alignItems: "center" }}
        >
          <Text
            style={[
              HomeScreenStyles.MenuText,
              activeTab === "All" ? HomeScreenStyles.MenuTextActive : null,
            ]}
          >
            All
          </Text>
          {activeTab === "All" && (
            <View
              style={{
                backgroundColor: "#DD8560",
                width: 5,
                height: 5,
                transform: [{ rotate: "45deg" }],
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab("Apparel");
          }}
          style={{ alignItems: "center" }}
        >
          <Text
            style={[
              HomeScreenStyles.MenuText,
              activeTab === "Apparel" ? HomeScreenStyles.MenuTextActive : null,
            ]}
          >
            Apparel
          </Text>
          {activeTab === "Apparel" && (
            <View
              style={{
                backgroundColor: "#DD8560",
                width: 5,
                height: 5,
                transform: [{ rotate: "45deg" }],
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab("Dress");
          }}
          style={{ alignItems: "center" }}
        >
          <Text
            style={[
              HomeScreenStyles.MenuText,
              activeTab === "Dress" ? HomeScreenStyles.MenuTextActive : null,
            ]}
          >
            Dress
          </Text>
          {activeTab === "Dress" && (
            <View
              style={{
                backgroundColor: "#DD8560",
                width: 5,
                height: 5,
                transform: [{ rotate: "45deg" }],
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab("Tshirt");
          }}
          style={{ alignItems: "center" }}
        >
          <Text
            style={[
              HomeScreenStyles.MenuText,
              activeTab === "Tshirt" ? HomeScreenStyles.MenuTextActive : null,
            ]}
          >
            Tshirt
          </Text>
          {activeTab === "Tshirt" && (
            <View
              style={{
                backgroundColor: "#DD8560",
                width: 5,
                height: 5,
                transform: [{ rotate: "45deg" }],
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab("Bag");
          }}
          style={{ alignItems: "center" }}
        >
          <Text
            style={[
              HomeScreenStyles.MenuText,
              activeTab === "Bag" ? HomeScreenStyles.MenuTextActive : null,
            ]}
          >
            Bag
          </Text>
          {activeTab === "Bag" && (
            <View
              style={{
                backgroundColor: "#DD8560",
                width: 5,
                height: 5,
                transform: [{ rotate: "45deg" }],
              }}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={{ height: "80%", justifyContent: "space-evenly" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ProductCard
            imgUrl={require("../../assets/productImg1.png")}
            title={"21WN reversible angora cardigan"}
            price="120"
          />
          <ProductCard
            imgUrl={require("../../assets/productImg2.png")}
            title={"21WN reversible angora cardigan"}
            price="120"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ProductCard
            imgUrl={require("../../assets/productImg3.png")}
            title={"21WN reversible angora cardigan"}
            price="120"
          />
          <ProductCard
            imgUrl={require("../../assets/productImg4.png")}
            title={"Oblong bag"}
            price="120"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 30,
          }}
        >
          <Text style={{ fontSize: 16 }}>Explore More</Text>
          <Image
            style={{ width: 20, height: 20, marginLeft: 10 }}
            source={require("../../assets/ForwardArrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ProductCard = ({ imgUrl = "", title = "", price = "" }) => (
  <TouchableOpacity>
    <View style={HomeScreenStyles.productCard}>
      <Image
        source={imgUrl}
        style={{ height: "80%", width: "100%" }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: 12,
          color: "#333333",
          marginTop: 5,
          marginHorizontal: 10,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <Text style={{ fontSize: 15, color: "#DD8560", marginTop: 5 }}>
        {currencyFormatter(parseInt(price))}
      </Text>
    </View>
  </TouchableOpacity>
);

export default NewArrivals;
