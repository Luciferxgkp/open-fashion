import { Image, Text, TouchableOpacity, View } from "react-native";
import { HomeScreenStyles } from "../Styles";
import { currencyFormatter } from "./Helper";

const ProductCard = ({
  imgUrl = "",
  title = "",
  price = "",
  styles = null,
}) => (
  <TouchableOpacity>
    <View style={[HomeScreenStyles.productCard, styles]}>
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
export default ProductCard;
