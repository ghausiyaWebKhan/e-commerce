import React from "react";
import Images from "./SliderData";
import img1 from "../../assets/img/offer-1.jpg";
import img2 from "../../assets/img/offer-2.jpg";
import img3 from "../../assets/img/product-1.jpg";
import img4 from "../../assets/img/product-2.jpg";
import img5 from "../../assets/img/product-3.jpg";
import img6 from "../../assets/img/product-4.jpg";
import img7 from "../../assets/img/product-5.jpg";
import img8 from "../../assets/img/product-6.jpg";
import img9 from "../../assets/img/product-7.jpg";
import img10 from "../../assets/img/product-8.jpg";
import img11 from "../../assets/img/product-9.jpg";
import img12 from "../../assets/img/cat-1.jpg";
import img13 from "../../assets/img/cat-2.jpg";
import img14 from "../../assets/img/cat-3.jpg";
import img15 from "../../assets/img/cat-4.jpg";
import vender2 from "../../assets/img/vendor-2.jpg";
import vender3 from "../../assets/img/vendor-3.jpg";
import vender4 from "../../assets/img/vendor-4.jpg";
import vender1 from "../../assets/img/vendor-1.jpg";
import vender5 from "../../assets/img/vendor-5.jpg";
import vender6 from "../../assets/img/vendor-6.jpg";
import img from "../../assets/img/carousel-1.jpg";
import "./Slider.css";
import Features from "../Features/Features";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import LatestCategory from "../LatestCategory/LatestCategory";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Slider = () => {
  // console.log(Images);
  return (
    <>
      <div className="banner">
        <div className="banner_inner">
          <div className="slider">
            {/* <img src={img} alt="slider" width="800" height="420" /> */}
            {Images.map((image, id) => {
              return (
                <>
                  <img
                    className="slider_img"
                    src={image.img}
                    alt="slider"
                    key={id}
                    height="530"
                    width="1000"
                  />
                  <div className="overlay">
                    <h1 style={{fontSize:'50px'}}>MENS FASHION</h1>
                    <p style={{fontSize:'25px',width:'60%',textAlign:'center' }}>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <button style={{}}>SHOP NOW</button>
                  </div>
                </>
              );
            })}
          </div>

          <div className="Offers">
            <div className="offer_img">
              <img src={img1} alt="offer" width="500" height="250" />
              <div className="overlay">
                <h6>SAVE 20%</h6>
                <h3>Special Offer</h3>
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="offer_img">
              <img src={img2} alt="offer" width="500" height="250" />
              <div className="overlay">
                <h6>SAVE 20%</h6>
                <h3>Special Offer</h3>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features_product">
        <Features title="Quality Product" icon={<CheckCircleIcon />} />
        <Features title="Free Shipping" icon={<LocalShippingIcon />} />
        <Features title="14 Day Return" icon={<KeyboardReturnIcon />} />
        <Features title="24/7 Support" icon={<WifiCalling3Icon />} />
      </div>

      <h1
        style={{
          fontSize: "50px",
          width: "90vw",
          margin: "0 auto",
          marginBottom: "2rem",
          color: "black",
        }}
      >
        Categories...
      </h1>
      <div className="latestCategory">
        <LatestCategory title="Camera" product="24" img={img3} />
        <LatestCategory title="T-Shirt" product="114" img={img4} />
        <LatestCategory title="Lamp" product="200" img={img5} />
        <LatestCategory title="Shoes" product="143" img={img6} />
        <LatestCategory title="Electronic" product="143" img={img7} />
        <LatestCategory title="Watch" product="143" img={img8} />
        <LatestCategory title="T-Shirt" product="143" img={img9} />
        <LatestCategory title="Face Wash" product="143" img={img10} />
        <LatestCategory title="Chair" product="143" img={img11} />
        <LatestCategory title="Camera" product="143" img={img3} />
        <LatestCategory title="T-Shirt" product="143" img={img4} />
        <LatestCategory title="Lamp" product="143" img={img5} />
      </div>

      <div className="featured_heading">
        <h1 style={{ color: "black" }}>FEATURED PRODUCTS</h1>
      </div>
      <div className="featured_product">
        <FeaturedProduct
          image={img12}
          productName="T-Shirt"
          price="$128.00"
          cutPrice="$120.00"
          rating={4}
        />
        <FeaturedProduct
          image={img13}
          productName="Camera"
          price="$128.00"
          cutPrice="$120.00"
          rating={5}
        />
        <FeaturedProduct
          image={img14}
          productName="Shoes"
          price="$128.00"
          cutPrice="$120.00"
          rating={3}
        />
        <FeaturedProduct
          image={img15}
          productName="Face Wash"
          price="$128.00"
          cutPrice="$120.00"
          rating={3}
        />
        <FeaturedProduct
          image={img15}
          productName="Face Wash"
          price="$128.00"
          cutPrice="$120.00"
          rating={4}
        />
        <FeaturedProduct
          image={img14}
          productName="Shoes"
          price="$128.00"
          cutPrice="$120.00"
          rating={3}
        />
        <FeaturedProduct
          image={img13}
          productName="Camera"
          price="$128.00"
          cutPrice="$120.00"
          rating={4}
        />
        <FeaturedProduct
          image={img12}
          productName="T-Shirt"
          price="$128.00"
          cutPrice="$120.00"
          rating={5}
        />
      </div>
      <div className="featured-offer">
        <div className="featured_offer_img">
          <img src={img1} alt="offer" height="400" width="100%" />
          <div className="overlay">
            <h6>SAVE 20%</h6>
            <h3>Special Offer</h3>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="featured_offer_img">
          <img src={img2} alt="offer" height="400" width="100%" />
          <div className="overlay">
            <h6>SAVE 20%</h6>
            <h3>Special Offer</h3>
            <button>SHOP NOW</button>
          </div>
        </div>
        {/* <img src={img2} alt='offer' height='400' width='100%'/> */}
      </div>

      <div className="recent_heading">
        <h1 style={{ color: "black" }}>RECENT PRODUCTS</h1>
      </div>
      <div className="recent_product">
        <FeaturedProduct
          image={img10}
          productName="T-Shirt"
          price="$128.00"
          cutPrice="$120.00"
          rating={4}
        />
        <FeaturedProduct
          image={img3}
          productName="Camera"
          price="$128.00"
          cutPrice="$120.00"
          rating={5}
        />
        <FeaturedProduct
          image={img4}
          productName="Shoes"
          price="$128.00"
          cutPrice="$120.00"
          rating={3}
        />
        <FeaturedProduct
          image={img5}
          productName="Face Wash"
          price="$128.00"
          cutPrice="$120.00"
          rating={3}
        />
        <FeaturedProduct
          image={img6}
          productName="Face Wash"
          price="$128.00"
          cutPrice="$120.00"
          rating={4}
        />
        <FeaturedProduct
          image={img7}
          productName="Shoes"
          price="$128.00"
          cutPrice="$120.00"
          rating={3}
        />
        <FeaturedProduct
          image={img8}
          productName="Camera"
          price="$128.00"
          cutPrice="$120.00"
          rating={4}
        />
        <FeaturedProduct
          image={img9}
          productName="T-Shirt"
          price="$128.00"
          cutPrice="$120.00"
          rating={5}
        />
      </div>
      <div className="promotion">
        <img className="promotion_img" src={vender1} alt="promotion" />
        <img className="promotion_img" src={vender2} alt="promotion" />
        <img className="promotion_img" src={vender3} alt="promotion" />
        <img className="promotion_img" src={vender4} alt="promotion" />
        <img className="promotion_img" src={vender5} alt="promotion" />
        <img className="promotion_img" src={vender6} alt="promotion" />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Slider;
