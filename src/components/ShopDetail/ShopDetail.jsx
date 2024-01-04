import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IncDecBtn from "./IncDecBtn";
import img11 from "../../assets/img/product-9.jpg";
import img12 from "../../assets/img/product-9.jpg";
import img3 from "../../assets/img/product-1.jpg";
import img4 from "../../assets/img/product-2.jpg";
import img5 from "../../assets/img/product-3.jpg";
import img6 from "../../assets/img/product-4.jpg";
import img7 from "../../assets/img/product-5.jpg";
import img8 from "../../assets/img/product-6.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ShopDetail.css";
import ShopRoute from "../ShopRoute/ShopRoute";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../Footer/Footer";
import Review from "../ReviewTab/Review";

const ShopDetail = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div style={{ color: "black" }}>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <ShopRoute route1="Home /" route2="Shop /" route3="Shop Detail" />

        <div className="shop-detail">
          <div>
            {/* <h2> Single Item</h2> */}
            <Slider {...settings}>
              <div>
                <img src={img11} alt="product" />
              </div>
              <div>
                <img src={img3} alt="product" />
              </div>
              <div>
                <img src={img4} alt="product" />
              </div>
              <div>
                <img src={img5} alt="product" />
              </div>
              <div>
                <img src={img6} alt="product" />
              </div>
              <div>
                <img src={img7} alt="product" />
              </div>
              <div>
                <img src={img8} alt="product" />
              </div>
            </Slider>
          </div>
          <div className="shop-detail-product-info">
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "3rem",
                marginBottom: "10px",
              }}
            >
              Product Name Goes Here
            </h1>
            {[...Array(4)].map((_, ind) => {
              return (
                <StarIcon key={ind} style={{ color: "rgb(255, 200, 0)" }} />
              );
            })}
            <h1
              style={{ color: "black", fontSize: "2.5rem", marginTop: "10px" }}
            >
              $ 120.00
            </h1>
            <p style={{ color: "rgba(134,136,138,1)" }}>
              Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
              diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna
              duo dolor no sea Nonumy
            </p>
            <div className="radio-size">
              <h3 style={{ fontSize: "2rem" }}>Sizes : </h3>
              <form>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">XS</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">S</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">M</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">L</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">XL</label>
              </form>
            </div>
            <div className="radio-size">
              <h3 style={{ fontSize: "2rem" }}>Colors : </h3>
              <form>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">Red</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">Blue</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">Green</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">Black</label>
                <input type="radio" className="radio-icon" />
                <label className="radio-input">Yellow</label>
              </form>
            </div>
            <IncDecBtn />
            <button type="button" className="add-btn" style={{marginTop:'3rem'}}>
          <span>
            <ShoppingCartIcon />
          </span>
          Add To Cart
        </button>
          </div>
        </div>
        <Review/>
        <div className="you-may-like">
          <Slider {...settings2}>
            <div>
              <img src={img11} alt="product" width='200px' height='300px'/>
            </div>
            <div>
              <img src={img3} alt="product" />
            </div>
            <div>
              <img src={img4} alt="product" />
            </div>
            <div>
              <img src={img5} alt="product" />
            </div>
            <div>
              <img src={img6} alt="product" />
            </div>
            <div>
              <img src={img7} alt="product" />
            </div>
            <div>
              <img src={img11} alt="product" />
            </div>
            <div>
              <img src={img3} alt="product" />
            </div>
            <div>
              <img src={img4} alt="product" />
            </div>
          </Slider>
        </div>

        

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default ShopDetail;
