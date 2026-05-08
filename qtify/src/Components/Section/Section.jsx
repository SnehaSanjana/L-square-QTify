import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({
  title,
  apiEndpoint,
  showToggle = false,
  defaultCollapsed = false,
}) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setAlbums(response.data);
      } catch (error) {
        setAlbums([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [apiEndpoint]);

  const visibleAlbums =
    showToggle && collapsed ? albums.slice(0, 7) : albums;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {showToggle ? (
          <button
            type="button"
            className={styles.actionButton}
            onClick={() => setCollapsed((current) => !current)}
          >
            {collapsed ? "Show all" : "Collapse"}
          </button>
        ) : (
          <button type="button" className={styles.actionButton}>
            Collapse
          </button>
        )}
      </div>

      {loading ? (
        <p className={styles.helperText}>Loading albums...</p>
      ) : (
        <div className={styles.grid}>
          {visibleAlbums.map((album) => (
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
