"use client"
import React, { useContext } from "react";
import Sidebar from "./dashboard/components/sidebar";
import Navbar from "./dashboard/components/navbar";
import Dashboard from "./dashboard/page";
import styles from "@/src/css/dashboard/dashboard.module.css";
import UserContext from "./dashboard/login/authorization/userContext";
import LoginPage from "./dashboard/login/page";

const Homepage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {!user ? (
        <LoginPage />
      ) : (
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Navbar />
            <Dashboard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
