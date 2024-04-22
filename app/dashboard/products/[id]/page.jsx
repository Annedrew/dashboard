import React from "react";
import styles from "@/app/ui/dashboard/products/productPage/productPage.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/lib/data";

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder={`${product.title}`} />
          <label>Price</label>
          <input type="number" name="price" placeholder={`${product.price}`} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={`${product.stock}`} />
          <label>Category</label>
          <select name="category" id="category">
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="earphone">Earphone</option>
            <option value="accessories">Accessories</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={`${product.description}`}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
