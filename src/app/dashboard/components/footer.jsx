import styles from "@/src/css/dashboard/components/footer.module.css";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <span>Contact: </span>
        <a href="mailto:anningcn0721@gmail.com">
          <MdOutlineEmail />
        </a>
      </div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
}
