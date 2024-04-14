import React from 'react'
import Navbar from '../ui/dashboard/navbar/page'
import Sidebar from '../ui/dashboard/sidebar/page'
import styles from "../ui/dashboard/dashboard.module.css"
// import styles from "./../ui/dashboard/dashboard.module.css"
// import styles from "./ui/dashboard/navbar/navbar.module.css"
// import styles from "./ui/dashboard/sidebar/sidebar.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
        </div>
    </div>
  )
}
