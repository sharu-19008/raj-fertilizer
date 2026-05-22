import { createContext, useState } from "react";

export const SortContext = createContext(null);

export function SortProvider({children}) {

    const [sortBy, setSortBy] = useState(null)

    
    return (
        <SortContext.Provider value={{
            sortBy,
            setSortBy
        }}>
            {children}
        </SortContext.Provider>
    )

}