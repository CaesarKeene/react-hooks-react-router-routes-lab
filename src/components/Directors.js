import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directors.map((director) => (
          <li key={director.name}>
            <h3>{director.name}</h3>
            <p>Movies:</p>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directors;
