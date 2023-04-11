import { ScrollView, StyleSheet, View } from "react-native";
import EarthquakeItem from "../components/earthquake-item";
const EarthquakesView = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <EarthquakeItem />
        <EarthquakeItem />
        <EarthquakeItem />
        <EarthquakeItem />
        <EarthquakeItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  scrollArea: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: 16,
  },
});
export default EarthquakesView;
