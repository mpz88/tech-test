import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({results}) => {
  if (!results.length) {
    return <p>No results</p>
  } else {
return (
<>
{ results.map((image) =>(
  <img className="card-image" src={image}  alt= "space" />
))}
</>
);
}
}
export default SearchResults;