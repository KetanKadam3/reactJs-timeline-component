import React from "react";
import styles from "./timeline.module.css"

export const Timeline = ({ items, size }) => {
  const sizeClass =
    size === "sm" ? styles.small : size === "md" ? styles.medium : styles.large;

  return (
    <div className={`${styles.timeline} ${sizeClass}`}>
      {items.map((item, index) => (
        <div className={styles["timeline-item"]} key={index}>
          <div className={styles["timeline-DateTime"]}>
            <div className={styles.dateContainer}>
              {/* Date details */}
              <p className={styles.monthYear}>
                {`${new Date(item?.date)
                  .toLocaleString("default", { month: "short" })
                  .toUpperCase()} ${new Date(item?.date).getFullYear()}`}
              </p>
              <p className={styles.day}>{new Date(item?.date).getDate()}</p>
              <p className={styles.weekday}>
                {new Date(item?.date)
                  .toLocaleDateString("en-US", { weekday: "short" })
                  .toUpperCase()}
              </p>
              <p className={styles.time}>
                {new Date(item?.date).toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className={styles["timeline-item-content"]}>
            <p className={styles["timeline-title"]}>{item.title}</p>
            <p className={styles["timeline-desc"]}>{item.desc}</p>
            <span className={styles.circle} />
          </div>
        </div>
      ))}
    </div>
  );
};

