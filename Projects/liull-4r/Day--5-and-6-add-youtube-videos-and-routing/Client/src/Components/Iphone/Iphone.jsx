import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";
function Iphone() {
  const [iphone, setIphone] = useState([]);
  useEffect(() => {
    fetch("your-database-api")
      .then((res) => res.json())
      .then((data) => {
        setIphone(data);
      })
      .catch((err) => {
        console.log("unable to fetch data", err);
      });
  }, []);
  console.log(iphone);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1 className="display-5 font-weight-bold">Iphone</h1>
      <h2 className="display-5">The Best For The Brightest</h2>

      {iphone?.map((i) => {
        return (
          <div key={i.product_id} className="row align-items-center my-5 ">
            <div
              className={`col-md mx-5 order-md ${
                i.product_id % 2 == 0 ? "order-md-2" : "order-md-1"
              }  `}
            >
              <img src={i.product_img} alt="" />
            </div>
            <div
              className={`col-md-5 text-center my-5 mx-5 order-md ${
                i.product_id % 2 == 0 ? "order-md-1" : "order-md-2"
              }   ftext `}
            >
              <h3 className="display-4 font-weight-bold">{i.product_name}</h3>
              <p>{i.product_brief_description}</p>
              <p>{`starting at ${i.starting_price}`}</p>
              <p>{i.price_range}</p>
              <ul>
                <li>
                  <Link className="flearn" to={`/iphone/${i.product_url}`}>
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Iphone;
