import ProductCard from "./ProductCard";

const ProductList = ({ products, search, category, sort }) => {
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className="grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
