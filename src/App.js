import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { GiHerbsBundle } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="site-header">
          <Link className="brand" to="/">
            <span className="brand-mark"><GiHerbsBundle /></span>
            Savory.
          </Link>
        <Search />
          <span className="header-note">Cook well. Live gently.</span>
        </header>
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
