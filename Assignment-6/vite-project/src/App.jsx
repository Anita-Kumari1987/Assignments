import "./App.css";
import NavBar from "./Component/NavBar";
import HeroSection from "./Component/HeroSection";

function App() {
  return (
    <div className="navBarContainer">
      <div className="logoContainer">
        <img src="react.svg" />
        <p>v19.1</p>
      </div>
      <NavBar />
      <HeroSection heading="React" subHeading= "The library for web and native user interfaces" buttons={["Learn React", "API Reference" ]}/>
    </div>
  );
}

export default App;
