import { StyleSheet, View, Text } from "react-native";
import colors from "../theme/colors";
const EarthquakeItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.magnitude}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>4.5</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.city}>Hatay</Text>
          <Text style={styles.district}>Göksun</Text>
          <Text style={styles.shortInfo}>8.17 km, bir saat önce</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: 100,
    backgroundColor: colors.GRAY_ONE,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  magnitude: {
    width: 64,
    height: 64,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.GRAY_TWO,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  city: {
    fontSize: 20,
    fontWeight: "600",
  },
  district: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 3,
    marginTop: 2,
  },
  shortInfo: {
    fontSize: 10,
  },
});
export default EarthquakeItem;
