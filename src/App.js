import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router";
import "./App.css";
import Subscription from "./pages/subscription";
import GlobalStyle from "./GlobalWrapper";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
