"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "@/src/css/dashboard/components/pagination.module.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { ITEM_PER_PAGE } from "@/app/lib/constant";

export default function Pagination({count}) {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
      replace(`${pathname}?${params}`);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>
        <div className={styles.paginationbtn}>
          <IoMdArrowDropleftCircle />
          <span>Previous</span>
        </div>
      </button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>
        <div className={styles.paginationbtn}>
          <span>Next</span>
          <IoMdArrowDroprightCircle />
        </div>
      </button>
    </div>
  );
}
