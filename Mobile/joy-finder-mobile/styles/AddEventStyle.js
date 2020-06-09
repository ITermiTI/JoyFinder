import { StyleSheet } from "react-native";
export const addEventStyle = StyleSheet.create({
  background: {
    position: "relative",
    backgroundColor: "#2F303A",
    flex: 1,
    alignSelf: "stretch",
  },
  loginBox: {
    top: "5.06%",
    left: "10%",
    width: "80%",
    height: "14.37%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  greenCircle: {
    position: "absolute",
    backgroundColor: "rgba(37, 167, 65, 0.1)",
    width: 320,
    height: 320,
    left: "-23.06%",
    top: "-19.06%",
    borderRadius: 160,
  },
  blueCircle: {
    position: "absolute",
    backgroundColor: "rgba(11, 138, 255, 0.1)",
    width: 300,
    height: 300,
    left: "42.5%",
    top: "-13.75%",
    borderRadius: 150,
  },
  inputSection: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginBottom: 22,
    flexDirection: "row",
  },
  input: {
    backgroundColor: "transparent",
    fontSize: 17,
    color: "white",
    height: 28,
    marginLeft: 5,
  },
  addButton: {
    marginBottom: 10,
    height: "50%",
    backgroundColor: "#5E2758",

    justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    marginBottom: 10,
    height: "50%",
    backgroundColor:
      "linear-gradient(180deg, rgba(11, 138, 255, 0.51) 99.99%, rgba(11, 108, 255, 0) 100%)",

    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  inputCoordinates: {
    width: "45%",
    marginHorizontal: 5,
    paddingHorizontal: 7,
    borderWidth: 2,
    borderColor: "#AAAAAA",
    fontSize: 16,
    color: "#AAAAAA",
    height: 28,
    marginLeft: 5,
  },
  inputSectionCoordinates: {
    marginBottom: 22,
    flexDirection: "row",
    justifyContent: "center",
  },
  closeStyle: {
    fontSize: 25,
    color: "white",
  },
  pressStyle: {
    width: "100%",
    backgroundColor: "#2F303A",
    height: "20%",
  },
  maps: {
    flex: 4,
    width: "100%",
    height: "100%",
  },
  touch: {
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
});
