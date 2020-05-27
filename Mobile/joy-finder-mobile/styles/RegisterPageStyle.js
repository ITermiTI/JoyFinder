import { StyleSheet } from "react-native";
export const registerPageStyle = StyleSheet.create({

background: {
    position: "relative",
    backgroundColor: "#2F303A",
    flex: 1,
    alignSelf: "stretch",
},
joinText: {
    position: "absolute",
    fontSize: 36,
    fontFamily: "Roboto",
    left: "25%",
    top: "5%",
    color: "#FFFFFF",
  },
funText: {
    position: "absolute",
    fontSize: 36,
    fontFamily: "Roboto",
    left: "60%",
    top: "5%",
    color: "#5E2758",
  },
logInSection: {
    position: "absolute",
    alignSelf: "center",
    top: "90%",
    flexDirection: "row",
  },
  haveAccountText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#FFFFFF",
    },
  logInText: {
    fontFamily: "Roboto",
    color: "#0B8AFF",
    fontSize: 16,
    borderBottomColor: "#0B8AFF",
    borderBottomWidth: 1,
  },
  registerBox: {
    top: "15%",
    left: "10%",
    width: "80%",
    height: "60%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  inputSection: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginBottom: "12%",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "transparent",
    fontSize: 18,
    color: "white",
    height: 30,
    marginLeft: 5,
  },
});