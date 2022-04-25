import React, { useState } from "react";
import Results from "./Results";

export default function (Dictionary) {
  let [keyword, getKeyword] = useState("");
  let [results, seeResults] = useState(null);
  function handlResponse(response) {
    seeResults(response.date[0]);
  }

  function search (event) {
    event.preventDefault(); 
    
  }

  return (
    <div>
      <form>
        <input
          className="form-control form-control-sm"
          type="search"
          value="ENTER CITY HERE"
        ></input>
      </form>
      <Results />
    </div>
  );
}
