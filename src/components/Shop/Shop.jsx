// import Header from "../Navbar/Header";
// import Navbar from "../Navbar/Navbar";
import "./Shop.css";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import img12 from "../../assets/img/cat-1.jpg";
import img13 from "../../assets/img/cat-2.jpg";
import img14 from "../../assets/img/cat-3.jpg";
import img15 from "../../assets/img/cat-4.jpg";
import Filter from "../Filter/Filter";
import Footer from '../Footer/Footer';
import ShopRoute from '../ShopRoute/ShopRoute';


const Shop = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <ShopRoute route1='Home /' route2='Shop /' route3='shop List /'/>
      <div className="shop-section">
        <div className="filter-section">
          <div>
            <div className="recent_heading" style={{ width: "15vw" }}>
              <h1 style={{ color: "black", fontSize: "1.5rem",textAlign:'center' }}>
                FILTER BY PRICE
              </h1>
            </div>
            <div className="filter">
              <form className="input-form">
                <Filter price="All Price" quantity={100} />
                <Filter price="$0-$100" quantity={150} />
                <Filter price="$100-$200" quantity={286} />
                <Filter price="$200-$300" quantity={222} />
                <Filter price="$300-$400" quantity={432} />
                <Filter price="$400-$500" quantity={521} />
              </form>
            </div>
          </div>
          <div>
            <div className="recent_heading" style={{width:'15vw'}}>
              <h1 style={{ color: "black", fontSize: "1.5rem" ,textAlign:'center'}}>
                FILTER BY COLOR{" "}
              </h1>
            </div>
            <div className="filter">
              <form className="input-form">
                <Filter price="All Color" quantity={100} />
                <Filter price="Red" quantity={150} />
                <Filter price="Green" quantity={286} />
                <Filter price="Yellow" quantity={222} />
                <Filter price="Blue" quantity={432} />
                <Filter price="Black" quantity={521} />
              </form>
            </div>
          </div>
          <div>
            <div className="recent_heading" style={{width:'15vw'}}>
              <h1 style={{ color: "black", fontSize: "1.5rem", textAlign:'center'}}>
                FILTER BY SIZE{" "}
              </h1>
            </div>
            <div className="filter">
              <form className="input-form">
                <Filter price="All Size" quantity={100} />
                <Filter price="XS" quantity={150} />
                <Filter price="S" quantity={286} />
                <Filter price="M" quantity={222} />
                <Filter price="L" quantity={432} />
                <Filter price="XL" quantity={521} />
              </form>
            </div>
          </div>
        </div>

        <div className="shop-product">
          <div className="shop_product">
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
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Shop;
