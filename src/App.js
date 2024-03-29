// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'


// PAGES
import Home from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import Show from "./pages/Show";
import Index from "./pages/Index";
import Edit from "./pages/Edit";
import New from "./pages/New";

// COMPONENTS
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <main>
          <Routes>
            <Route path="/" element = {<LandingPage />} />
            // <Route path="/home" element={<Home />} activeClassName="active-link" />
            <Route path="/avengers" element={<Index />} />
            <Route path="/avengers/new" element={<New />} />
            <Route path="/avengers/:index" element={<Show />} />
            <Route path="/avengers/:index/edit" element={<Edit />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

