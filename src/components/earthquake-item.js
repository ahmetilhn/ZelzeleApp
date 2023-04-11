import { StyleSheet, View } from "react-native";
import colors from "../theme/colors";
const EarthquakeItem = () => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: 100,
    backgroundColor: colors.GRAY_ONE,
    marginBottom: 10,
    borderRadius: 10,
  },
});
export default EarthquakeItem;
