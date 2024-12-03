import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";
function App() {
  return (
    <>
      <h1 className="text-green bg-green-400 p-4 rounded-lg mb-4">
        Tailwind CSS Test
      </h1>
      <Cards name="Ankit Kumar" btnText="Visit Profile"/>
      <Cards/> 
    </>
  );
}

export default App;
