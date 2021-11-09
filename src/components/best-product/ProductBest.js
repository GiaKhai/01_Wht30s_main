import React from "react";
import logoGo from "../../image/best-product/go-icon.png";

const ProductBest = (product) => {
  return (
    <div className="best-product-item">
      <img className="img-num" src={product.product.imgNum} alt="" />
      <img className="product-item" src={product.product.img} alt="" />
      <div className="name-tag">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 content-tag">
            <div>How to create mobile-optimized</div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <img className="icon-go" src={logoGo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBest;
