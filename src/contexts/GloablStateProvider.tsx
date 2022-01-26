import React, { createContext, useContext, useState } from "react";

import { GlobalState, SearchResult } from "../types";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const GlobalStateContext = createContext<GlobalState>({
  results: { results: [], image_results: [], entries: [] },
  isLoading: false,
  searchTerm: "",
  search: () => {},
  setSearchTerm: () => {},
});

interface Props {
  children: React.ReactNode;
}

const GlobalStateProvider = ({ children }: Props) => {
  const [results, setResults] = useState<SearchResult>({
    results: [],
    image_results: [],
    entries: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const search = async (type: string) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com/api/v1",
        "x-rapidapi-key": "03f1dcd97emsh02924bd8721bc61p11dd43jsndc7ea67da1fb",
      },
    });

    const data = await res.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <GlobalStateContext.Provider
      value={{ search, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export default GlobalStateProvider;
