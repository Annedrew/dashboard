import Sidebar from "./dashboard/components/sidebar";
import Navbar from "./dashboard/components/navbar";
import Dashboard from "./dashboard/page";
import styles from "@/src/css/dashboard/dashboard.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Homepage;
