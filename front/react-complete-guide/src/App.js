import { BrowserRouter, Route, Routes } from "react-router-dom";
import VitaInfoPage from './Pages/InfoPage/VitaInfoPage';
import VitaComparePage from './Pages/ComparePage/VitaComparePage';
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}>
          </Route>
          <Route path="/ComparePage" element={<VitaComparePage />}>
          </Route>
          <Route path="/InfoPage" element={<VitaInfoPage />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;