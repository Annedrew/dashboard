"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ key, item }) {
  const pathname = usePathname();
  return (
    <Link
      key={key}
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
