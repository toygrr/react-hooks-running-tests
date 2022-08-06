import React from "react"; //  these are just links with a relative path to local files.
import Article from "./Article"; // each js file is a pice to be put in place
import Header from "./Header"; // objects that appear like HTML will simply contain the seperate js files

function App() {
  return (
    <div className="App">
      learn react!
      <Header /> // Header.js
      <Article /> // Article.js
    </div>
  );
}

export default App;
