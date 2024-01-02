import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../service/apiProducts";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useInView } from "react-intersection-observer";

function useProducts() {
  const { selectedSortBy, searchPattern } = useContext(ProductContext);
  const { ref, inView } = useInView();
  const {
    data: { pages } = {},
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products", selectedSortBy, searchPattern],
    queryFn: getProducts,
    initialPageParam: { nextChunk: 1, selectedSortBy, searchPattern },
    getNextPageParam: (lastPage, allPages) => {
      const nextChunk = lastPage.data.length ? allPages.length + 1 : undefined;
      return { nextChunk, selectedSortBy, searchPattern };
    },
  });
  return {
    pages,
    isLoading,
    error,
    ref,
    inView,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
}
export default useProducts;
