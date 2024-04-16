import { MdSearch } from "react-icons/md";
import styles from "./searchbar.module.css";

export default function SearchBar({placeholder}) {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input className={styles.input} placeholder={placeholder} />
    </div>
  )
}
