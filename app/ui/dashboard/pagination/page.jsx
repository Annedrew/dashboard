import styles from "./pagination.module.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <div className={styles.paginationbtn}>
          <IoMdArrowDropleftCircle />
          <span>Previous</span>
        </div>
      </button>
      <button className={styles.button}>
        <div className={styles.paginationbtn}>
          <span>Next</span>
          <IoMdArrowDroprightCircle />
        </div>
      </button>
    </div>
  );
}
