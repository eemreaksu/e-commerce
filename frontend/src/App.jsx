import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Policy from "./components/layout/Policy/Policy";
import Sliders from "./components/Slider/Sliders";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Sliders />
      <Policy />
      <Footer />
    </>
  );
}

export default App;
