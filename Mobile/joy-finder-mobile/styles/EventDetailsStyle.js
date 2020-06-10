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
    top: "10%",
  },
  timeIcon: {
    left: "11%",
    top: "14%",
  },
  locationIcon: {
    left: "11%",
    top: "18%",
  },
  typeIcon: {
    left: "11%",
    top: "15%",
  },
  creatorIcon: {
    left: "11%",
    top: "15%",
  },
  dateText: {
    left: "25%",
    top: "5%",
    fontSize: 25,
    color: "#FFFFFF",
  },
  timeText: {
    left: "25%",
    top: "9%",
    fontSize: 25,
    color: "#FFFFFF",
  },
  locationText: {
    left: "25%",
    top: "10%",
    fontSize: 25,
    color: "#FFFFFF",
  },
  streetText: {
    left: "25%",
    top: "12%",
    fontSize: 25,
    color: "#FFFFFF",
  },
  typeText: {
    left: "25%",
    top: "10%",
    fontSize: 25,
    color: "#FFFFFF",
  },
  creatorText: {
    left: "25%",
    top: "10%",
    fontSize: 25,
    color: "#FFFFFF",
  },
  takePartText: {
    fontSize: 28,
    alignSelf: "center",
    color: "#FFFFFF",
  },
  takePartBtn: {
    height: "10%",
    width: "80%",

    top: "26%",
    backgroundColor:
      "linear-gradient(180deg, rgba(11, 138, 255, 0.51) 99.99%, rgba(11, 108, 255, 0) 100%)",
    justifyContent: "center",
    alignSelf: "center",
  },
  leaveBtn: {
    height: "10%",
    width: "80%",

    top: "26%",
    backgroundColor:
      "linear-gradient(180deg, rgba(255, 0, 0, 0.81) 99.99%, rgba(255, 0, 0, 0) 100%)",
    justifyContent: "center",
    alignSelf: "center",
  },
  editBtn: {
    height: "20%",
    width: "80%",
    top: "40%",
    backgroundColor:
      "linear-gradient(180deg, rgba(255, 255, 0, 0.81) 99.99%, rgba(255, 0, 255, 0) 100%)",
    justifyContent: "center",
    alignSelf: "center",
  },
  cancelBtn: {
    height: "20%",
    width: "80%",
    top: "40%",
    backgroundColor:
      "linear-gradient(180deg, rgba(255, 0, 0, 0.81) 99.99%, rgba(255, 0, 0, 0) 100%)",
    justifyContent: "center",
    alignSelf: "center",
  },
});
