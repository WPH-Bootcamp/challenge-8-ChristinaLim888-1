import { useMemo, useState } from "react";

interface UseCarouselProps<T> {
  items: T[];

  itemsPerPage?: number;
}

export function useCarousel<T>({
  items,
  itemsPerPage = 5,
}: UseCarouselProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(
    items.length / itemsPerPage
  );

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;

    return items.slice(
      start,
      start + itemsPerPage
    );
  }, [items, currentPage, itemsPerPage]);

  const next = () => {
    setCurrentPage((prev) =>
      prev >= totalPages - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrentPage((prev) =>
      prev <= 0 ? totalPages - 1 : prev - 1
    );
  };

  return {
    currentItems,

    currentPage,

    totalPages,

    next,

    previous,
  };
}