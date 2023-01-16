import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbol: "$",
};

const currencyFormatter = (value, options) => {
  if (typeof value !== "number") value = 0.0;
  options = { ...defaultOptions, ...options };
  value = value.toFixed(options.significantDigits);

  const [currency, decimal] = value.split(".");
  return `${options.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal}`;
};

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
const Banner = () => (
  <View style={Styles.Banner}>
    <Image
      source={require("../assets/banner.png")}
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
          source={require("../assets/luxuryAndFashion.png")}
          style={{ marginLeft: 10, resizeMode: "contain", width: 375 }}
        />
      </View>
      <View>
        <TouchableOpacity>
          <View style={Styles.Button}>
            <Text style={{ color: "#E0CFBA", fontSize: 18, letterSpacing: 2 }}>
              EXPORE COLLECTION
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const NewArrivals = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  return (
    <View style={Styles.NewArrival}>
      <View style={Styles.NewArrivalheader}>
        <Text style={{ fontSize: 18, letterSpacing: 4 }}>NEW ARRIVAL</Text>
        <Image
          style={{ width: 120, height: 10, marginBottom: 10 }}
          source={require("../assets/3.png")}
        />
      </View>
      <View style={Styles.NewArrivalMenu}>
        <TouchableOpacity
          onPress={() => {
            setActiveTab("All");
          }}
          style={{ alignItems: "center" }}
        >
          <Text
            style={[
              Styles.MenuText,
              activeTab === "All" ? Styles.MenuTextActive : null,
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
              Styles.MenuText,
              activeTab === "Apparel" ? Styles.MenuTextActive : null,
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
              Styles.MenuText,
              activeTab === "Dress" ? Styles.MenuTextActive : null,
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
              Styles.MenuText,
              activeTab === "Tshirt" ? Styles.MenuTextActive : null,
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
              Styles.MenuText,
              activeTab === "Bag" ? Styles.MenuTextActive : null,
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
            imgUrl={require("../assets/productImg1.png")}
            title={"21WN reversible angora cardigan"}
            price="120"
          />
          <ProductCard
            imgUrl={require("../assets/productImg2.png")}
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
            imgUrl={require("../assets/productImg3.png")}
            title={"21WN reversible angora cardigan"}
            price="120"
          />
          <ProductCard
            imgUrl={require("../assets/productImg4.png")}
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
            source={require("../assets/ForwardArrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Brands = () => {
  return (
    <View style={{ marginTop: 30, height: 180 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 120, height: 10 }}
          source={require("../assets/3.png")}
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
            <Image source={require("../assets/Prada.png")} />
            <Image source={require("../assets/Burberry.png")} />
            <Image source={require("../assets/Boss.png")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/Catier.png")} />
            <Image source={require("../assets/Gucci.png")} />
            <Image source={require("../assets/Tiffany&Co.png")} />
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 120, height: 10 }}
          source={require("../assets/3.png")}
        />
      </View>
    </View>
  );
};
const ProductCard = ({ imgUrl = "", title = "", price = "" }) => (
  <TouchableOpacity>
    <View style={Styles.productCard}>
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
const Styles = StyleSheet.create({
  Banner: {
    height: 700,
    width: "100%",
  },
  Button: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 280,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 30,
  },
  NewArrival: {
    marginTop: 30,
    height: 830,
    width: "100%",
  },
  NewArrivalheader: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  NewArrivalMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    height: 36,
  },
  MenuText: {
    fontSize: 14,
    letterSpacing: 1,
    color: "#888888",
  },
  MenuTextActive: {
    color: "#212806",
  },
  productCard: {
    width: 190,
    height: 300,
    textAlign: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
