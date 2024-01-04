export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "USD" }).format(
    value
  );

export function parseJsonImages(jsonString) {
  if (jsonString == "[]") {
    return false;
  }
  const fixedJsonString = jsonString.replace(/'/g, '"');
  const data = JSON.parse(fixedJsonString);
  return data.map((el) => Object.keys(el)[0]);
}
