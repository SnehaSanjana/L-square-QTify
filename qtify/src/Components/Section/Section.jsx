import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const TOP_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/top";

function Section() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(TOP_ALBUMS_API);
        setAlbums(response.data);
      } catch (error) {
        setAlbums([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopAlbums();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Albums</h2>
        <button type="button" className={styles.actionButton}>
          Collapse
        </button>
      </div>

      {loading ? (
        <p className={styles.helperText}>Loading top albums...</p>
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;
