import SearchBar from "@/app/ui/dashboard/searchbar/page";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/page";
import Footer from "@/app/ui/dashboard/footer/page";

export default function Products() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <SearchBar placeholder={"Search for a project..."} />
          <button className={styles.addButton}>Add New</button>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Category</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="avatar"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>iPhone</span>
              </div>
            </td>
            <td>
              <span>Phone</span>
            </td>
            <td>
              <span>$123</span>
            </td>
            <td>
              <span>Apri 16 2024</span>
            </td>
            <td>
              <span>72</span>
            </td>
            <td>
              <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
                <button className={`${styles.button} ${styles.delete}`}>
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
