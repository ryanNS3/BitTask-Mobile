import { createContext, useState } from "react";

export const BottomSheetContext = createContext({})

export default function BottomSheetProvider({ children }) {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    return (
        <BottomSheetContext.Provider value={{ isBottomSheetOpen, setIsBottomSheetOpen }}>
            {children}
        </BottomSheetContext.Provider>
    )
}