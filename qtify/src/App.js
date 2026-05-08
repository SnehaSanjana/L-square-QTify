import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import "./index.css";

const TOP_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/top";
const NEW_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/new";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [loadingTopAlbums, setLoadingTopAlbums] = useState(true);
  const [loadingNewAlbums, setLoadingNewAlbums] = useState(true);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(TOP_ALBUMS_API);
        setTopAlbums(response.data);
      } catch (error) {
        setTopAlbums([]);
      } finally {
        setLoadingTopAlbums(false);
      }
    };

    const fetchNewAlbums = async () => {
      try {
        const response = await axios.get(NEW_ALBUMS_API);
        setNewAlbums(response.data);
      } catch (error) {
        setNewAlbums([]);
      } finally {
        setLoadingNewAlbums(false);
      }
    };

    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" albums={topAlbums} loading={loadingTopAlbums} />
      <Section
        title="New Albums"
        albums={newAlbums}
        loading={loadingNewAlbums}
        showToggle
        defaultCollapsed
      />
    </div>
  );
}

export default App;
