import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface contextProps {
  searchData?: string;
  setSearchData: Dispatch<SetStateAction<string>>;
  isType?: string;
  setIsType: Dispatch<SetStateAction<string>>;
  isSort?: string;
  setIsSort: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext({} as contextProps);

export function ContextProvider({ children }: ContextProviderProps) {
  const [searchData, setSearchData] = useState("");
  const [isType, setIsType] = useState("ALL");
  const [isSort, setIsSort] = useState("NAME");

  return (
    <SearchContext.Provider
      value={{
        searchData,
        setSearchData,
        isType,
        setIsType,
        isSort,
        setIsSort,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
