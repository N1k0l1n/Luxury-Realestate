import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { sliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
    <GlobalStyle/>
      <Navbar />
      <Dropdown/>
      <Hero slides={sliderData}/>
    </>
  );
}

export default App;
