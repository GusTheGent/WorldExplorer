import Navbar from "components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import CountryDetails from "pages/CountryDetails/CountryDetails";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/WorldExplorer" element={<Home />} />
        <Route path="/details/:countryName" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
