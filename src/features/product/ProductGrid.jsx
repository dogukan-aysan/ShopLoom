import { useContext, useEffect } from "react";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import ProductCard from "./ProductCard";
import useProducts from "./useProducts";
import { CHUNK_SIZE } from "../../utils/constants";
import { ProductContext } from "../../contexts/ProductContext";

function ProductGrid() {
  const {
    pages,
    isLoading,
    error,
    ref,
    inView,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useProducts();

  const { dispatch } = useContext(ProductContext);

  const chunkIsFull = pages?.at(-1).data.length === CHUNK_SIZE + 2; // HACK - if chunk is not full, we stop fetching because that causes an HTTP 416 Error

  useEffect(() => {
    if (inView && hasNextPage && chunkIsFull) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage, chunkIsFull]);

  useEffect(() => {
    if (pages) dispatch({ type: "count", payload: pages[0].count });
  }, [dispatch, pages]);

  if (isLoading)
    return (
      <div className="loader--page-size">
        <Loader />
      </div>
    );
  if (error) return <Error />;

  return (
    <>
      <div className="catalogue__grid">
        {pages?.map((page) =>
          page.data.map((product) => (
            <ProductCard key={product.uniq_id} product={product} />
          ))
        )}
      </div>
      <span style={{ visibility: "hidden" }} ref={ref}>
        %indicates that the end of the view has been reached%
      </span>
      {isFetchingNextPage && (
        <div className="loader--scroll">
          <Loader />
        </div>
      )}
    </>
  );
}

export default ProductGrid;
