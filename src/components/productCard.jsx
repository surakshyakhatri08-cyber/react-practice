// product card
const ProductCard = () => {
  return (
    <div className='product-card'>
      <img src={productImg} alt="CD Icon T-Shirt" className='product-img' />
      
      <div className='product-details'>
        <h2 className="product-title">CD Icon T-Shirt</h2>
      <span className="product-price">Rs. 2999</span>
      <p className="product-description">
        Crafted in Italy from high-end 100% cotton jersey, offering a heavyweight feel that remains incredibly soft and breathable on the skin.
      </p>
      <button className='btn-add-cart'>Add to cart</button>
      </div>

    </div>
  );
};

export default ProductCard;