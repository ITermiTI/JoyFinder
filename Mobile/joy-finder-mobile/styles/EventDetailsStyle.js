import { StyleSheet } from "react-native";
export const eventDetailsStyle = StyleSheet.create({

background: {
    position: "relative",
    backgroundColor: "#2F303A",
    flex: 1,
    alignSelf: "stretch",
},

title: {
    position: "absolute",
    color: "#8CE8A0",
    left: "13%",
    top: "9%",
    fontSize: 30,
},
dateIcon: {
    left: "11%",
    top: "21%"
  },
timeIcon: {
    left: "11%",
    top: "25%"
},
locationIcon: {
    left: "11%",
    top: "29%"
},
typeIcon: {
    left: "11%",
    top: "33%"
},
creatorIcon: {
    left: "11%",
    top: "37%"
},
dateText: {
    left: "25%",
    top: "16%",
    fontSize: 25,
    color: "#FFFFFF"
},
timeText: {
    left: "25%",
    top: "20%",
    fontSize: 25,
    color: "#FFFFFF"
},
locationText: {
    left: "25%",
    top: "24%",
    fontSize: 25,
    color: "#FFFFFF"
},
typeText: {
    left: "25%",
    top: "28%",
    fontSize: 25,
    color: "#FFFFFF"
},
creatorText: {
    left: "25%",
    top: "32%",
    fontSize: 25,
    color: "#FFFFFF"
},
takePartText: {
    fontSize: 28,
    alignSelf: "center",
    color: "#FFFFFF"
},
takePartBtn: {
    height: "10%",
    width: "80%",
    
    top: "37%",
    backgroundColor: "linear-gradient(180deg, rgba(11, 138, 255, 0.51) 99.99%, rgba(11, 108, 255, 0) 100%)",
    justifyContent: "center",
    alignSelf: "center"
}
});