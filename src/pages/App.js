import React            from 'react'
import GlobalStyles 	  from "../styles/globalStyle"
import SearchBar        from "../components/searchBar"
import OtherPages       from "../components/otherPages"
import ListImg          from "../components/listImg"

const App = () => {
  return (
    <React.Fragment>
      {/* <GlobalStyles /> */}
        <SearchBar />
        <OtherPages />
        <ListImg />
    </React.Fragment>
  );
}

export default App;
