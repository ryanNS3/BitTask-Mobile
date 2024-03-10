import { StyleSheet } from "react-native";
import { Colors } from "../../../global/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header:{
      paddingHorizontal: 20,
      paddingVertical: 30,
      marginBottom: 41,
      backgroundColor: Colors.az2.cor
    },
    boasVindas:{
      paddingVertical: 20,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    overview:{
      flexDirection: "row",    
    },
    cardPorcen:{
      Width: 250,
      paddingHorizontal: 8,
      paddingVertical: 16,
      alignItems:"center",
      marginRight: 10,
      borderRadius: 15,
      flexDirection: "row"
    },
    tarefas:{
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    navegacaoTarefa:{
      flexDirection: "row",
      alignItems: "center"
    },
    botaoTarefa:{
      paddingHorizontal: 8,
      paddingVertical: 11,
      color: Colors.az1.cor,
  
    },
    selecionado:{
      backgroundColor: Colors.azCorEnfase.cor
    }
  });