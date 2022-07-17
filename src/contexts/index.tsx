import { createContext, useState } from "react";

interface ContextProviderProps{
    children: JSX.Element | JSX.Element[];
}

interface contextProps {
  searchData?: string,
  setSearchData: string | any,
  is?: string,
  setIs: string | any;
  sort?: string,
  setSort: string | any;
}

export const SearchContext = createContext({} as contextProps);

export function ContextProvider({children}: ContextProviderProps) {
    const [searchData, setSearchData] = useState("");
    const [is, setIs] = useState("");
    const [sort, setSort] = useState("");
    
    return (
      <SearchContext.Provider value={{searchData, setSearchData, is, setIs, sort, setSort}}>
        {children}
      </SearchContext.Provider>
    )
  }