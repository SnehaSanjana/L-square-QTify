import React from "react";
import styles from "./Songs.module.css";

function Songs({ songs = [], loading = false }) {
  if (loading) return <p>Loading...</p>;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Songs</h2>
      <div className={styles.cardContainer}>
        {songs.map((song) => (
          <article key={song.id} className={styles.card}>
            <img src={song.image} alt={song.title} className={styles.image} />
            <p className={styles.songTitle}>{song.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Songs;
