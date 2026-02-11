const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log(product.title);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <p>⭐ {product.rating.rate}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
