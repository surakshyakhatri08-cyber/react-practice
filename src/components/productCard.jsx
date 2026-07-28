// product card
const ProductCard = ({product: { name, money, description }}) => {
  return (
    <div className='product-card'>
      {/* <img src={productImg} alt="CD Icon T-Shirt" className='product-img' /> */}
      
      <div className='product-details'>
        <h2 className="product-title">{name}</h2>
      <span className="product-price">Rs. {money}</span>
      <p className="product-description">{description}</p>
      <button className='btn-add-cart'>Add to cart</button>
      </div>

    </div>
  );
};

export default ProductCard;