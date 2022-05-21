import React, { useState, createContext } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchList, setSearchList] = useState([]);

  return (
    <div>
      <SearchContext.Provider value={{ searchList, setSearchList }}>
        {children}
      </SearchContext.Provider>
    </div>
  );
};

export { SearchContext, SearchContextProvider };
