import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import SpaceArticles from "./components/SpaceArticles";
import Details from "./components/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <MyNavBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <SpaceArticles />
              </main>
            }
          />
          <Route
            path="/details/:idArticles"
            element={
              <main>
                <Details />
              </main>
            }
          />
        </Routes>
        <footer></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
