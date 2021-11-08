import React from "react";
import logoGo from "../../image/best-product/go-icon.png";

const ProductBest = (product) => {
  return (
    <div>
      <img className="img-num" src={product.product.imgNum} alt="" />
      <img className="product-item" src={product.product.img} alt="" />
      <div className="name-tag">
        <div className="row">
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8 content-tag">
            <div>How to create mobile-optimized</div>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-4">
            <img className="icon-go" src={logoGo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBest;
