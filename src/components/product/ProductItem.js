import "./product.css";
import hearticon from "../../image/hearticon.png";

const ProductItem = (product) => {
  return (
    <div className="item">
      <img className="img-product" src={product.product.img} alt="" />
      <div className="name-product">[what happen] How to create </div>
      <div className="info-product">
        <span className="price">2,500 won</span>
        <div className="like">
          <img className="hearticon" src={hearticon} alt="hearticon" />
          <span>236</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
