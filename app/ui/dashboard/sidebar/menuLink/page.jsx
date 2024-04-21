"use client"
import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

export default function MenuLink({ item, key }) {
  const pathname = usePathname()
  return (
    <Link
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