import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";
import SearchBar from "@/app/dashboard/searchBar/page";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/page";
import Footer from "@/app/ui/dashboard/footer/page";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";

export default async function UserPage({searchParams}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {total_user, users} = await fetchUsers(q, page);

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImage}
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`users/${user.id}`}>
                    <button className={`${styles.buttons} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.buttons} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={total_user}/>
      <Footer />
    </div>
  );
}
