import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ image, follows, title }) {
  return (
    <article className={styles.card}>
      <div className={styles.topSection}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.chipContainer}>
          <Chip
            label={`${follows} Follows`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p className={styles.title}>{title}</p>
      </div>
    </article>
  );
}

export default Card;
