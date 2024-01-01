import supabase from "./supabase";
import { CHUNK_SIZE } from "../utils/constants";

export async function getProducts({
  pageParam: { nextChunk, searchPattern, selectedSortBy },
}) {
  const from = nextChunk === 1 ? 0 : (nextChunk - 1) * CHUNK_SIZE + 1;
  const to = from + CHUNK_SIZE + 1;
  let query = supabase
    .from("products")
    .select(
      "uniq_id, description, product_name, product_category_tree, discounted_price, image",
      { count: "exact" }
    )
    .range(from, to);

  // FILTER
  query = query.gt("discounted_price", 0);

  if (searchPattern) query = query.ilike("product_name", `%${searchPattern}%`);

  // // // SORT;
  if (selectedSortBy && selectedSortBy !== "Trending")
    query = query.order("discounted_price", {
      ascending: selectedSortBy.includes("low"),
    });

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
  return { data, count };
}
