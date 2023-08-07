function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://productimages.hepsiburada.net/s/384/600-800/110000403083158.jpg"
          alt=""
        />
      </div>
      <div className="product-info">
        {" "}
        <h2>Product Title</h2>
        <span>Product Price</span>
      </div>
    </div>
  );
}
export default ProductItem;
