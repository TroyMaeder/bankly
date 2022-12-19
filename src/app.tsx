import { Home } from "./views/home";
import "./app.css";

const App = () => (
  <>
    {/* TODO: move into it's own component */}
    <div className="header">
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
    </div>
    <Home />
  </>
);

export default App;
