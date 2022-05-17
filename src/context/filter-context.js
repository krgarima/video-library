// import React, { useReducer, createContext } from "react";

// const FilterContext = createContext();

// const initialFilterState = "";

// const FilterContextProvider = ({ children }) => {
//   const [filter, dispatch] = useReducer(reducerFn, initialFilterState);

//   return (
//     <div>
//       <FilterContext.Provider value={{ filter, dispatch }}>
//         {children}
//       </FilterContext.Provider>
//     </div>
//   );
// };

// export { FilterContextProvider, FilterContext };

// const reducerFn = (action) => {
//   switch (action.type) {
//     case "pop":
//       return "pop";
//     case "EDM":
//       return "EDM";
//     case "Hip Hop":
//       return "Hip Hop";
//     default:
//       return "";
//   }
// };

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
