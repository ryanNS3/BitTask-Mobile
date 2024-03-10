import { createContext, useState } from "react";

export const BottomSheetContext = createContext({})

export default function BottomSheetProvider({ children }) {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [isBottomSheetVerOpen, setIsBottomSheetVerOpen] = useState(false);
    const [tarefaSelecionadaId, setTarefaSelecionadaId] = useState(null);

    return (
        <BottomSheetContext.Provider
            value={{ isBottomSheetOpen, setIsBottomSheetOpen, isBottomSheetVerOpen, setIsBottomSheetVerOpen, tarefaSelecionadaId, setTarefaSelecionadaId }}
        >
            {children}
        </BottomSheetContext.Provider>
    )
}