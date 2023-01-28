import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
  Header: {
    fontSize: 18,
    letterSpacing: 4,
  },
  Line: {
    width: 120,
    height: 10,
    marginBottom: 10,
    marginTop: 10,
  },
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
  Collections: {
    // height: "fit-content",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
});

export default HomeScreenStyles;
