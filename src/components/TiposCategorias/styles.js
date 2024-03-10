import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D1DFFE',
    borderRadius: 5,
    paddingHorizontal: '4%',
    paddingVertical: "3%",
    marginVertical: "5%",
    marginHorizontal: '5%',
    width: '40%',
    height: '80%',
    resizeMode: 'center',
  },
 
  chart: {
    marginVertical: '2%',
    justifyContent: 'space-between',
  },
 
  textContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: '40%',
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