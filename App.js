import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import EarthquakesView from "./src/views/earthquakes";
import AppHeader from "./src/partials/app-header";

export default function App() {
  return (
    <SafeAreaView>
      <AppHeader />
      <EarthquakesView />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
