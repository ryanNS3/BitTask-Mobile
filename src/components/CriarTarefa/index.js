import { styles } from "./styles";
import { BottomSheetContext } from "../../contexts/bottomSheetContext";
import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

export function CriarTarefa() {
    const { setIsBottomSheetOpen } = useContext(BottomSheetContext);
    const handleOpenSheet = () => setIsBottomSheetOpen(true);

    return(
        <>
            <TouchableOpacity
                onPress={handleOpenSheet}
                style={styles.botao}
            >
                <Text style={styles.botaoTexto}>CRIAR TAREFA</Text>
            </TouchableOpacity>
        </>
    )
}
