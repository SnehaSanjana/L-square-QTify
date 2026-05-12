import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({
  title,
  albums = [],
  loading = false,
  defaultCollapsed = false,
}) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
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
        <div className={collapsed ? styles.gridCollapsed : styles.grid}>
          {albums.map((album) => (   // ← render ALL cards always, no slice
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
