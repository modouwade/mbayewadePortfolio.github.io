import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Wade</h1>
        <p className="pl-desc">
          Wade is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
