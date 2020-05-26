import { StyleSheet } from "react-native";
export const DrawerStyle = StyleSheet.create({
  mainDrawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2F303A",
    alignItems: "center",
    paddingTop: 30,
  },
  profileImage: {
    margin: 21,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  credentialsText: {
    color: "white",
    fontSize: 26,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "white",
    margin: 10,
  },
  drawerTile: {
    width: "100%",
    color: "white",
  },
  drawerRow: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  tileText: {
    paddingLeft: 15,
    color: "white",
    fontSize: 20,
  },
});
