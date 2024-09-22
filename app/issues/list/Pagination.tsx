"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

function Pagination({ itemCount: issueCount, pageSize, currentPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(issueCount / pageSize);

  if (pageCount <= 1) return null;

  const handleChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    if (params.size) {
      const query = "?" + params;
      router.push("/issues/list" + query);
    }
  };

  return (
    <div className="join text-indigo-500">
      <button
        disabled={currentPage <= 1}
        onClick={() => handleChange(1)}
        className="join-item hover:bg-stone-100 border px-4 rounded-md h-12 text-indigo-500 disabled:hover:bg-inherit disabled:text-stone-300"
      >
        <FiChevronsLeft />
      </button>
      <button
        disabled={currentPage <= 1}
        onClick={() => handleChange(currentPage - 1)}
        className="join-item hover:bg-stone-100 border px-4 rounded-md h-12 text-indigo-500 disabled:hover:bg-inherit disabled:text-stone-300"
      >
        <FiChevronLeft />
      </button>
      <button className="join-item text-xs border-t border-b cursor-not-allowed px-4 rounded-md h-12 text-indigo-500">
        Page {currentPage} of {pageCount}
      </button>
      <button
        disabled={currentPage >= pageCount}
        onClick={() => handleChange(currentPage + 1)}
        className="join-item hover:bg-stone-100 border px-4 rounded-md h-12 text-indigo-500 disabled:hover:bg-inherit disabled:text-stone-300"
      >
        <FiChevronRight />
      </button>
      <button
        disabled={currentPage >= pageCount}
        onClick={() => handleChange(pageCount)}
        className="join-item hover:bg-stone-100 border px-4 rounded-md h-12 text-indigo-500 disabled:hover:bg-inherit disabled:text-stone-300"
      >
        <FiChevronsRight />
      </button>
    </div>
  );
}

export default Pagination;
