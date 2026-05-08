import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import "./index.css";

const TOP_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/top";
const NEW_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/new";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" apiEndpoint={TOP_ALBUMS_API} />
      <Section
        title="New Albums"
        apiEndpoint={NEW_ALBUMS_API}
        showToggle
        defaultCollapsed
      />
    </div>
  );
}

export default App;
