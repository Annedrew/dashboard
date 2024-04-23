import SearchBar from "@/app/dashboard/searchBar/page";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/page";
import Footer from "@/app/ui/dashboard/footer/page";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

export default async function Products({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  // need to fetch data from database when searching or turning page.
  const { total_product, products } = await fetchProducts(q, page);
  console.log(`Products: ${products}`);

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt="avatar"
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  <span>{product.title}</span>
                </div>
              </td>
              <td>
                <span>{product.category}</span>
              </td>
              <td>
                <span>{product.price}</span>
              </td>
              <td>
                <span>{product.createdAt?.toString().slice(4, 16)}</span>
              </td>
              <td>
                <span>{product.stock}</span>
              </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={total_product} />
      <Footer />
    </div>
  );
}
