import React, { useContext } from "react";
import { FilterContext } from "../../context/filter-context";
import "./Filters.css";

export default function Filter() {
  const { setFilter } = useContext(FilterContext);

  return (
    <div className="filter">
      <button className="select-genre" onClick={() => setFilter("")}>
        All
      </button>
      <button className="select-genre" onClick={() => setFilter("pop")}>
        Pop
      </button>
      <button className="select-genre" onClick={() => setFilter("EDM")}>
        EDM
      </button>
      <button className="select-genre" onClick={() => setFilter("Hip Hop")}>
        Hip Hop
      </button>
    </div>
  );
}
