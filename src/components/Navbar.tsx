"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();

  const todoFilter = searchParams.get("todos");

  return (
    <nav>
      <Link href="/" className={todoFilter === null ? "active" : ""}>
        All
      </Link>
      <Link
        href="/?todos=active"
        className={todoFilter === "active" ? "active" : ""}
      >
        Active
      </Link>
      <Link
        href={"/?todos=complete"}
        className={todoFilter === "complete" ? "active" : ""}
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
