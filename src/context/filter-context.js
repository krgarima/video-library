import React, { useState, createContext } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <FilterContext.Provider value={{ filter, setFilter }}>
        {children}
      </FilterContext.Provider>
    </div>
  );
};

export { FilterContextProvider, FilterContext };
