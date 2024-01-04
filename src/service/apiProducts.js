import supabase from "./supabase";
import { CHUNK_SIZE } from "../utils/constants";

export async function getProducts({
  pageParam: { nextChunk, selectedSortBy, searchPattern, selectedCategory },
}) {
  const from = nextChunk === 1 ? 0 : (nextChunk - 1) * CHUNK_SIZE + 1;
  const to = from + CHUNK_SIZE + 1;
  let query = supabase
    .from(selectedCategory)
    .select("id, Product_Name, Price, Details, Product_Image", {
      count: "exact",
    })
    .range(from, to);

  // FILTER
  query = query.neq("Product_Image", null);
  if (searchPattern) query = query.ilike("Product_Name", `%${searchPattern}%`);

  // SORT;
  if (selectedSortBy && selectedSortBy !== "Trending")
    query = query.order("Price", {
      ascending: selectedSortBy.includes("low"),
    });

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
  return { data, count };
}
