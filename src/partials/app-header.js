import { StyleSheet, View, Image } from "react-native";
import colors from "../theme/colors";

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.appIcon} source={require("../../assets/icon.png")} />
      <Image
        style={styles.githubIcon}
        source={require("../../assets/github-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: colors.WHITE,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 1,
    elevation: 1,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  appIcon: {
    width: 36,
    height: 36,
  },
  githubIcon: {
    width: 18,
    height: 19,
  },
});

export default AppHeader;
