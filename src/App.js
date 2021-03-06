import Footer from "components/footer";
import Happened from "components/happened";
import Issue from "components/issue";
import "./App.css";
import Banner from "./components/banner";
import BestProduct from "./components/best-product";
import Header from "./components/header";
import Introduction from "./components/intro";
import Product from "./components/product";
import BrandStory from "./components/stoty";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Introduction />
      <BestProduct />
      <Product />
      <BrandStory />
      <Issue />
      <Happened />
      <Footer />
    </div>
  );
}

export default App;
