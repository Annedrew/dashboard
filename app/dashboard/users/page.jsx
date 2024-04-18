import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";
import SearchBar from "@/app/ui/dashboard/searchbar/page";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/page";
import Footer from "@/app/ui/dashboard/footer/page";

export default function UserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchBar placeholder={"Search for a user..."} />
        <button className={styles.button}>Add New</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Janney
              </div>
            </td>
            <td>janney@gmail.com</td>
            <td>Oct 30 2023</td>
            <td>Client</td>
            <td>Passive</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.buttons} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.buttons} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Nina
              </div>
            </td>
            <td>nina@gmail.com</td>
            <td>Oct 29 2023</td>
            <td>Client</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.buttons} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.buttons} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
      <Footer />
    </div>
  );
}
