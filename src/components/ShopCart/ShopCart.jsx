import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import ShopRoute from "../ShopRoute/ShopRoute";
import IncDecBtn from "../ShopDetail/IncDecBtn";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import img1 from "../../assets/img/product-3.jpg";
import img2 from "../../assets/img/product-4.jpg";
import img3 from "../../assets/img/product-5.jpg";
import img4 from "../../assets/img/product-6.jpg";
import img5 from "../../assets/img/product-8.jpg";
import "./ShopCart.css";
import { Scale, Translate } from "@mui/icons-material";
const ShopCart = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <ShopRoute route1="Home /" route2="Shop /" route3="Shopping Cart" />

        <div className="shopcart-container">
          <div className="shopcart">
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr">
                  <td className="t-body center">
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={img1}
                      alt="product"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <span style={{ fontSize: "25px", marginLeft: "15px" }}>
                      Lamp
                    </span>
                    </span>
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $123.00
                  </td>
                  <td className="t-body center">
                    <IncDecBtn marginTop="-10px" />
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $155.00
                  </td>
                  <td className="t-body" style={{ color: "red" }}>
                    <DeleteForeverIcon />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="t-body center">
                    <img
                      src={img2}
                      alt="product"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <span style={{ fontSize: "25px", marginLeft: "15px" }}>
                      Shoes
                    </span>
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $123.00
                  </td>
                  <td className="t-body center">
                    <IncDecBtn marginTop="-10px" />
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $155.00
                  </td>
                  <td className="t-body" style={{ color: "#c82333;" }}>
                    <DeleteForeverIcon />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="t-body center">
                    <img
                      src={img3}
                      alt="product"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <span style={{ fontSize: "25px", marginLeft: "15px" }}>
                      Drone
                    </span>
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $123.00
                  </td>
                  <td className="t-body center">
                    <IncDecBtn marginTop="-10px" />
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $155.00
                  </td>
                  <td className="t-body" style={{ color: "#c82333;" }}>
                    <DeleteForeverIcon />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="t-body center">
                    <img
                      src={img4}
                      alt="product"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <span style={{ fontSize: "25px", marginLeft: "15px" }}>
                      Watch
                    </span>
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $123.00
                  </td>
                  <td className="t-body center">
                    <IncDecBtn marginTop="-10px" />
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $155.00
                  </td>
                  <td className="t-body" style={{ color: "#c82333;" }}>
                    <DeleteForeverIcon />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="t-body center">
                    <img
                      src={img5}
                      alt="product"
                      style={{ height: "80px", width: "80px" }}
                    />
                    <span style={{ fontSize: "25px", marginLeft: "15px" }}>
                      Face Wash
                    </span>
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $123.00
                  </td>
                  <td className="t-body center">
                    <IncDecBtn marginTop="-10px" />
                  </td>
                  <td className="t-body" style={{ fontSize: "30px" }}>
                    $155.00
                  </td>
                  <td className="t-body" style={{ color: "#c82333;" }}>
                    <DeleteForeverIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-summary">
            <div className="cart">
              <h1>Cart Summary</h1>
              <div className="cart-summary-container">
                <div className="subtotal payment"> 
                  <span>Subtotal</span>
                  <span>$120</span>
                </div>
                <div className="shipping payment">
                  <span>Shipping</span>
                  <span>$10</span>
                </div>
                <hr/>
                <div className="total payment">
                  <span>Total</span>
                  <span>$130</span>
                </div>
              <button className="pay-btn">Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default ShopCart;
