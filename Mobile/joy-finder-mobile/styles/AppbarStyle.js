import { StyleSheet } from "react-native";
export const AppbarStyle = StyleSheet.create({
  appbarSize: {
    marginTop: 10,
    top: 0,
    left: 0,
    width: "100%",
    height: "9%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  appbarText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  menuIcon: {
    position: "absolute",
    left: 15,
  },
  dotsIcon: {
    position: "absolute",
    right: 15,
  },
});
