import { useLocation, useParams } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const params = useParams();
  console.log({ location, params });
  return <div>Product</div>;
};

export default Product;
