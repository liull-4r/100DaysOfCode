import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NOT from "../404/NOT";
function ProductIphone() {
  const [product, setProduct] = useState([]);
  // console.log(useParams())
  const { productID } = useParams();
  // console.log(productID)

  useEffect(() => {
    fetch("your-database-api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const productList = data.filter((p) => p.product_url == productID);
        setProduct(productList);
      })
      .catch((err) => {
        console.log("unable to fetch data", err);
      });
  }, []);
  console.log(product);
 if(product.length){
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        ProductIphone
      </div>
    );
    }
 else {
     return <NOT/>
    }
}

export default ProductIphone;
