import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "@/src/css/dashboard/components/card.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.928</span>
        <span className={styles.detail}>
          <span><span className={styles.positive}>12%</span> more than previous week</span>
        </span>
      </div>
    </div>
  );
}
