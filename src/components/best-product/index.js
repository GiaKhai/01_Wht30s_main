import "./bestProduct.css";
import Product from "./ProductBest";
import product1 from "../../image/best-product/best-image-01.png";
import product2 from "../../image/best-product/best-image-02.png";
import product3 from "../../image/best-product/best-image-03.png";
import production1 from "../../image/best-product/producticon-01.png";
import production2 from "../../image/best-product/producticon-02.png";
import production3 from "../../image/best-product/producticon-03.png";

const BestProduct = () => {
  const product = [
    {
      index: 1,
      img: product1,
      imgNum: production1,
    },
    {
      index: 2,
      img: product2,
      imgNum: production2,
    },
    {
      index: 3,
      img: product3,
      imgNum: production3,
    },
  ];
  return (
    <div className="best-product-area">
      <div className="container">
        <div className="description">
          <div className="title">Best Product</div>
          <div className="content">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </div>
          <div className="product">
            <div className="row">
              {product.map((product) => {
                return (
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <Product key={product.index} product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
