import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/add.module.css";

export default function AddProduct() {
  return (
    <div className={styles.container}> 
        <form action={addProduct} className={styles.form}>
            <input type="text" name="title" placeholder='title' required />
            <select name="category" id="category">
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="earphone">Earphone</option>
                <option value="accessories">Accessories</option>
            </select>
            <input type="number" name="price" placeholder='price' />
            <input type="number" name="stock" placeholder='stock' />
            <textarea name="description" placeholder='description' rows="10" />
            <button className={styles.button} type="submit">Submit</button>
        </form>
    </div>
  )
}
