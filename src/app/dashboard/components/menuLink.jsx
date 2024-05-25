"use client";
import Link from "next/link";
import styles from "@/src/css/dashboard/components/menuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ key, item }) {
  const pathname = usePathname();
  if (!item) return null;

  return (
    <Link
      key={key}
      href={item.path}
      className={`${styles.container} ${
        pathname === item?.path && styles.active
      }`}
    >
      {item && item.icon}
      {item && item.title}
    </Link>
  );
}
