import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";
import EarthquakeItem from "../components/earthquake-item";
import { useEffect, useState, useCallback } from "react";
import EarthquakeService from "../services/earthquqake.service";
const EarthquakesView = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [isRefreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getEarthquakes();
  }, []);
  const getEarthquakes = async () => {
    console.log("1");
    try {
      const res = await EarthquakeService.lastEarthquakes();
      if (res) {
        const _res = await res.json();
        setEarthquakes(_res);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const onRefresh = async () => {
    setRefreshing(true);
    await getEarthquakes();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollArea}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        {earthquakes.length > 1 &&
          earthquakes.map((item, index) => (
            <EarthquakeItem
              lastEarthquake={index === 0}
              key={item.ID}
              data={item}
            />
          ))}
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
    alignItems: "center",
    paddingBottom: 80,
    paddingTop: 10,
  },
});
export default EarthquakesView;
