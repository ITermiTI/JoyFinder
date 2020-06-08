import { StyleSheet } from "react-native";
export const homePageStyle = StyleSheet.create({

background: {
    position: "relative",
    backgroundColor: "#2F303A",
    flex: 1,
    alignSelf: "stretch",
},
title: {
    position: "absolute",
    fontSize: 40,
    fontFamily: "Roboto",
    top: "25%",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  floatingButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  
});