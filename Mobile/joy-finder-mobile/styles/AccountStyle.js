import { StyleSheet } from "react-native";
export const accountStyle = StyleSheet.create({

background: {
    position: "relative",
    backgroundColor: "#2F303A",
    flex: 1,
    alignSelf: "stretch",
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
    color: "white",
    fontSize: 56,
    position: "absolute",
  },
  textSection: {
    marginTop: 30,
    marginLeft: 30,
    flexDirection: "row",
  },
  textStyle: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "white",
    marginLeft: 10,
  },
  editDetails: {
    
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    backgroundColor: '#5E2758',

    justifyContent: "center",
    alignItems: "center",
  },
  changePas: {
    marginTop: 70,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    backgroundColor:
    'linearGradient(180deg, rgba(11, 138, 255, 0.51) 99.99%, rgba(11, 108, 255, 0) 100%)',

    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 28,
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