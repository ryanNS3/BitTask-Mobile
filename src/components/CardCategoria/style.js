import { StyleSheet } from "react-native";
import { Colors } from "../../../global/colors";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.az2.cor,
    borderRadius: 15,
    paddingHorizontal: '4%',
    paddingVertical: "3%",
    width: 192,
    height: 208,
    marginRight: 10,
    resizeMode: 'center',
  },
 
  chart: {
  
    justifyContent: 'space-between',
  },
 
  textContent: {
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 15,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "bold",
  },
});