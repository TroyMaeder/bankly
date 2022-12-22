import { Home } from "./views/home";
import "./app.css";

const App = () => (
  <>
    <header className="header">
      <div className="container">
        <a
          className="logo"
          href="https://www.thisisbud.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/bankly.svg" alt="Bankly logo" />
        </a>
      </div>
    </header>
    <Home />
  </>
);

export default App;
