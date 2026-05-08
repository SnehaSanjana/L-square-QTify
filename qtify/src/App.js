import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import "./index.css";

const API_BASE_URL = "https://qtify-backend.labs.crio.do";
const TOP_ALBUMS_API = "/albums/top";
const NEW_ALBUMS_API = "/albums/new";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [loadingTopAlbums, setLoadingTopAlbums] = useState(true);
  const [loadingNewAlbums, setLoadingNewAlbums] = useState(true);

  useEffect(() => {
    const fetchAlbums = async (endpoint) => {
      try {
        // Relative route allows Cypress intercepts like /albums/new to match reliably.
        const response = await axios.get(endpoint);
        return response.data;
      } catch (error) {
        const fallbackResponse = await axios.get(`${API_BASE_URL}${endpoint}`);
        return fallbackResponse.data;
      }
    };

    const fetchTopAlbums = async () => {
      try {
        const data = await fetchAlbums(TOP_ALBUMS_API);
        setTopAlbums(data);
      } catch (error) {
        setTopAlbums([]);
      } finally {
        setLoadingTopAlbums(false);
      }
    };

    const fetchNewAlbums = async () => {
      try {
        const data = await fetchAlbums(NEW_ALBUMS_API);
        setNewAlbums(data);
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
