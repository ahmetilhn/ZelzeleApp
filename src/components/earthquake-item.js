import { StyleSheet, View, Text } from "react-native";
import colors from "../theme/colors";
import { baseColorCalc } from "../helpers/base-color.helper";
const EarthquakeItem = ({ data, lastEarthquake }) => {
  const baseColor = baseColorCalc(data.Magnitude);
  return (
    <View
      style={[
        styles.container,
        lastEarthquake && styles.dashedBorder,
        { backgroundColor: baseColor.light },
      ]}
    >
      <View style={styles.info}>
        <View style={[styles.magnitude, { borderColor: baseColor.normal }]}>
          <Text
            style={{ fontSize: 18, fontWeight: "700", color: baseColor.normal }}
          >
            {data.Magnitude}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.city}>{data.Region.City}</Text>
          <Text style={styles.district}>{data.Region.District}</Text>
          <Text style={styles.shortInfo}>
            {data.Depth} Km, {data.Date}
          </Text>
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
    borderStyle: "dashed",
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
  dashedBorder: {
    borderWidth: 1,
    borderColor: colors.GRAY_TWO,
    borderStyle: "dashed",
  },
});
export default EarthquakeItem;
