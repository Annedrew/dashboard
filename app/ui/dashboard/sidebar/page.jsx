import React from "react";
import { sidebarItems } from "@/app/lib/constant";
import MenuLink from "../menuLink/page";
import styles from "./sidebar.module.css";
import { MdLogout } from "react-icons/md";
import Image from "next/image";


export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="https://i.imgur.com/e8buxpa.jpeg"
          alt="avatar"
          height="50"
          width={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Anne</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {sidebarItems.map((item) => {
          return (
            <li key={item.title}>
              <span className={styles.cat}>{item.title}</span>
              {item.list.map((item) => {
                return <MenuLink key={item.title} item={item} />;
              })}
            </li>
          );
        })}
      </ul>
      <form
        // action={async () => {
        //   "use server";
        //   await signOut();
        // }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
}
