import React from "react";
import styles from "@/src/css/dashboard/dashboard.module.css";
import Card from "./components/card";
import Chart from "./components/chart";
import Rightbar from "./components/rightbar";
import Transaction from "./components/transaction";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
