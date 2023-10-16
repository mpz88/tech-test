import React, {useState} from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import logo from "../images/logo.png"

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="app">
      <img
        className="nassa-logo"
        src={logo}
        alt="nassaLogo"
        />
        <Search setSearchResults ={setSearchResults}/>
        <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;
