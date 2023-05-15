import TopBar from "../../CommonComponent/TopBar/topBar";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./components/searchPage.css";
import GenderComponent from "./components/genderComponent";
import IdSearch from "./components/idSearch";
import PassSearch from "./components/passSearch";

function SearchPage() {
  const [onIdSearch, setOnIdSearch] = useState(null);
  const location = useLocation();

  useEffect(() => {
    console.log("asdf");
    if (location.state.status) setOnIdSearch(true);
    else setOnIdSearch(false);
  }, []);

  return onIdSearch ? (
    <IdSearch onIdSearch={onIdSearch} setOnIdSearch={setOnIdSearch} />
  ) : (
    <PassSearch onIdSearch={onIdSearch} setOnIdSearch={setOnIdSearch} />
  );
}
export default SearchPage;
