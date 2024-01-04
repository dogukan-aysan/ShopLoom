import { useContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { ProductContext } from "../../contexts/ProductContext";
import { getProducts } from "../../service/apiProducts";

function useProducts() {
  const { selectedSortBy, searchPattern, selectedCategory } =
    useContext(ProductContext);
  const { ref, inView } = useInView();
  const {
    data: { pages } = {},
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [selectedSortBy, searchPattern, selectedCategory],
    queryFn: getProducts,
    initialPageParam: {
      nextChunk: 1,
      selectedSortBy,
      searchPattern,
      selectedCategory,
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextChunk = lastPage.data.length ? allPages.length + 1 : undefined;
      return {
        nextChunk,
        selectedSortBy,
        searchPattern,
        selectedCategory,
      };
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
