
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import FeatureProducts from "./components/FeatureProducts.jsx";
import PresentedProduct from "./components/PresentedProduct.jsx";
import Clients from "./components/Clients.jsx";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        <FeatureProducts/>
        <PresentedProduct/>
        <Clients/>
      </div>
    </>
  )
}

export default App
