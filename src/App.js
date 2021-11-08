import "./App.css";
import Banner from "./components/banner";
import BestProduct from "./components/best-product";
import Header from "./components/header";
import Introduction from "./components/intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Introduction />
      <BestProduct />
    </div>
  );
}

export default App;
