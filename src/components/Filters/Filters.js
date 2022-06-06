import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../../context/filter-context";
import "./Filters.css";

export default function Filter() {
  const { setFilter } = useContext(FilterContext);
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState({
    all: true,
    pop: false,
    edm: false,
    hipHop: false,
  });

  return (
    <div className="filter" onClick={() => navigate("/")}>
      <button
        className={highlight.all ? "highlight select-genre" : "select-genre"}
        onClick={() => {
          setFilter("");
          setHighlight({
            ...highlight,
            all: true,
            pop: false,
            edm: false,
            hipHop: false,
          });
        }}
      >
        All
      </button>
      <button
        className={highlight.pop ? "highlight select-genre" : "select-genre"}
        onClick={() => {
          setFilter("pop");
          setHighlight({
            ...highlight,
            all: false,
            pop: true,
            edm: false,
            hipHop: false,
          });
        }}
      >
        Pop
      </button>
      <button
        className={highlight.edm ? "highlight select-genre" : "select-genre"}
        onClick={() => {
          setFilter("EDM");
          setHighlight({
            ...highlight,
            all: false,
            pop: false,
            edm: true,
            hipHop: false,
          });
        }}
      >
        EDM
      </button>
      <button
        className={highlight.hipHop ? "highlight select-genre" : "select-genre"}
        onClick={() => {
          setFilter("Hip Hop");
          setHighlight({
            ...highlight,
            all: false,
            pop: false,
            edm: false,
            hipHop: true,
          });
        }}
      >
        Hip Hop
      </button>
    </div>
  );
}
