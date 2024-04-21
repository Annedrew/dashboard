"use client"
import { MdSearch } from "react-icons/md";
import styles from "@/app/ui/dashboard/searchbar/searchbar.module.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({placeholder}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    
    if (e.target.value) {
      e.target.value.length > 1 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    params.set("test", "value");
    replace(`${pathname}?${params}`);
  }, 300)
  
  return (
    <div className={styles.container}>
      <MdSearch />
      <input className={styles.input} placeholder={placeholder} onChange={handleSearch} />
    </div>
  )
}
