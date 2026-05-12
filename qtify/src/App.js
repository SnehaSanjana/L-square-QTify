import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import Songs from "./Components/Songs/Songs"; // ← ADD THIS
import "./index.css";

const TOP_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/top";
const NEW_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/new";
const SONGS_API = "https://qtify-backend.labs.crio.do/songs"; // ← ADD THIS

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]); // ← ADD THIS
  const [loadingTopAlbums, setLoadingTopAlbums] = useState(true);
  const [loadingNewAlbums, setLoadingNewAlbums] = useState(true);
  const [loadingSongs, setLoadingSongs] = useState(true); // ← ADD THIS

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

    // ← ADD THIS FUNCTION
    const fetchSongs = async () => {
      try {
        const response = await axios.get(SONGS_API);
        setSongs(response.data);
      } catch (error) {
        setSongs([]);
      } finally {
        setLoadingSongs(false);
      }
    };

    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs(); // ← ADD THIS
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" albums={topAlbums} loading={loadingTopAlbums} defaultCollapsed={true} />
      <Section
        title="New Albums"
        albums={newAlbums}
        loading={loadingNewAlbums}
        showToggle
        defaultCollapsed={true}
      />
      {/* ← ADD THIS */}
      <Songs songs={songs} loading={loadingSongs} />
    </div>
  );
}

export default App;
