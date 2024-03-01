import { StyleSheet } from "react-native"
import { Roboto_400Regular,Roboto_500Medium,Roboto_700Bold, useFonts  } from "@expo-google-fonts/roboto"

// const [carregarFont,erroFont] = useFonts({
//     Roboto_400Regular,
//     Roboto_500Medium,
//     Roboto_700Bold
// })

// const [fontSucess, setFontSucess] = React.useState(false)

// if (!carregarFont && !erroFont) {
//     setFontSucess(true)
//   }

export const Titulos = 
    
    StyleSheet.create({

    h1:{
        fontFamily: "Roboto",
        fontSize: 50,
        lineHeight: 60,
        
    },

    h2:{
        fontFamily: "roboto",
        fontSize: 40,
        lineHeight: 48,
        fontWeight: "700"
    },
    h3:{
        fontFamily: "Roboto_700Bold",
        fontSize: 30,
        lineHeight: 39,
       
    },
    h4:{
        fontFamily: "Roboto_500Medium",
        fontSize: 20,
        letterSpacing: 0.2,
        lineHeight: 28,
        fontWeight: "500",
    },
})

export const subtitulos = StyleSheet.create({
    sub:{
        fontFamily: "Roboto_700Bold",
        fontSize: 15,
        letterSpacing: 0.2,
        lineHeight: 21,
        fontWeight: "bold",
    },
})


export const corpoTexto = StyleSheet.create({
    c: {
        fontFamily : "Roboto_400Regular",
        fontSize: 14,
        lineHeight: 19.6,
    },
})


export const funcionais = StyleSheet.create({
    f1:{
        fontFamily: "Roboto_700Bold",
        fontSize: 10,
        letterSpacing: 0.2
    },
    f2:{
        fontFamily: "Roboto_500Medium",
        fontSize: 12,
        letterSpacing: 0.2,
        fontWeight: "600",
    },
    f3:{
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        fontWeight: "600",
    },
})