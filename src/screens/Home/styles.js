import { StyleSheet } from "react-native";
import { Colors } from "../../../global/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.az1.cor

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
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20
    },

    listaTarefa:{
      height: 200,
    },

    botaoTarefa:{
      paddingHorizontal: 18,
      paddingVertical: 9,
      borderRadius: 5,
      color: Colors.az1.cor,
      
    },
    
    selecionado:{
      backgroundColor: Colors.azGradienteEnfase.cor,
    },

    categoria:{
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    scrollCategoria:{
      marginTop: 20,
    },

    verMaisCategoria:{
      flexDirection: "row",
      justifyContent: "space-between",
      
    }
    
  });