import "./App.css";
import Banner from "./components/layout/Banner";
import Headers from "./components/layout/Headers";
import UrlShortenForm from "./components/layout/UrlShortenForm";

function App() {
  return (
    <>
      <Headers />
      <Banner />
      <div className="max_width">
        <UrlShortenForm />
      </div>
    </>
  );
}

export default App;
