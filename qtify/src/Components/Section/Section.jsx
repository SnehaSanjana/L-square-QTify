import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({
  title,
  albums = [],
  loading = false,
  showToggle = false,
  defaultCollapsed = false,
}) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const visibleAlbums =
    collapsed ? albums.slice(0, 7) : albums; // ← removed showToggle condition, collapse applies always

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {/* ← Every section now always has a Show All / Collapse button */}
        <button
          type="button"
          className={styles.actionButton}
          onClick={() => setCollapsed((current) => !current)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
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
