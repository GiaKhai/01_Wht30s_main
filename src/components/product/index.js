import product1 from "../../image/product/img-01.png";
import product2 from "../../image/product/img-02.png";
import product3 from "../../image/product/img-03.png";
import product4 from "../../image/product/img-04.png";
import product5 from "../../image/product/img-05.png";
import product6 from "../../image/product/img-06.png";
import product7 from "../../image/product/img-07.png";
import product8 from "../../image/product/img-08.png";
import product9 from "../../image/product/img-09.png";
import product10 from "../../image/product/img-10.png";
import product11 from "../../image/product/img-11.png";
import product12 from "../../image/product/img-12.png";
import product13 from "../../image/product/img-13.png";
import product14 from "../../image/product/img-14.png";
import product15 from "../../image/product/img-15.png";
import product16 from "../../image/product/img-16.png";
import product17 from "../../image/product/img-17.png";
import product18 from "../../image/product/img-18.png";
import product19 from "../../image/product/img-19.png";
import product20 from "../../image/product/img-20.png";
import product21 from "../../image/product/img-21.png";
import product22 from "../../image/product/img-22.png";
import product23 from "../../image/product/img-23.png";
import product24 from "../../image/product/img-24.png";
import product25 from "../../image/product/img-25.png";
import ProductItem from "./ProductItem";
import "./product.css";
const Product = () => {
  const product = [
    {
      index: 1,
      img: product1,
    },
    {
      index: 2,
      img: product2,
    },
    {
      index: 3,
      img: product3,
    },
    {
      index: 4,
      img: product4,
    },
    {
      index: 5,
      img: product5,
    },
    {
      index: 6,
      img: product6,
    },
    {
      index: 7,
      img: product7,
    },
    {
      index: 8,
      img: product8,
    },
    {
      index: 9,
      img: product9,
    },
    {
      index: 10,
      img: product10,
    },
    {
      index: 11,
      img: product11,
    },
    {
      index: 12,
      img: product12,
    },
    {
      index: 13,
      img: product13,
    },
    {
      index: 14,
      img: product14,
    },
    {
      index: 15,
      img: product15,
    },
    {
      index: 16,
      img: product16,
    },
    {
      index: 17,
      img: product17,
    },
    {
      index: 18,
      img: product18,
    },
    {
      index: 19,
      img: product19,
    },
    {
      index: 20,
      img: product20,
    },
    {
      index: 21,
      img: product21,
    },
    {
      index: 22,
      img: product22,
    },
    {
      index: 23,
      img: product23,
    },
    {
      index: 24,
      img: product24,
    },
    {
      index: 25,
      img: product25,
    },
  ];
  return (
    <div className="container">
      <div className="row product-area">
        {product.map((product) => {
          return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
      <div className="text-center mx-auto">
        <button className="btn-see">see more</button>
      </div>
    </div>
  );
};

export default Product;
