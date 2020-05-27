import { StyleSheet } from "react-native";
export const LoginStyle = StyleSheet.create({
  background: {
    position: "relative",
    backgroundColor: "#2F303A",
    flex: 1,
    alignSelf: "stretch",
  },
  loginBox: {
    top: "51.06%",
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
  waitingForText: {
    top: "24.81%",
    left: "13.88%",
    position: "absolute",
    fontSize: 24,
    width: "75%",
    fontFamily: "Roboto",
    color: "#FFFFFF",
  },
  getInSection: {
    left: "13.88%",
    top: "31.81%",
  },
  getText: {
    fontFamily: "Roboto",
    color: "#FFFFFF",
    fontSize: 56,
    position: "absolute",
  },
  inText: {
    fontFamily: "Roboto",
    color: "#5E2758",
    fontSize: 56,
    position: "absolute",
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
  signInButton: {
    height: "60%",
    backgroundColor:
      "linear-gradient(180deg, rgba(11, 138, 255, 0.51) 99.99%, rgba(11, 108, 255, 0) 100%)",

    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  noAccountSection: {
    position: "absolute",
    alignSelf: "center",
    top: "83.43%",
    flexDirection: "row",
  },
  noAccountText: {
    fontFamily: "Roboto",
    color: "#FFFFFF",
    fontSize: 16,
  },
  createAccountText: {
    fontFamily: "Roboto",
    color: "#0B8AFF",
    fontSize: 16,
    borderBottomColor: "#0B8AFF",
    borderBottomWidth: 1,
  },
});
