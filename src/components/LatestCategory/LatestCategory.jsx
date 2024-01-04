import "./LatestCategory.css";

const LatestCategory = ({ title, product, img }) => {
  return (
    <div className="latest_products">
      
        <div className="product_img">
          <img src={img} alt="product" width="100" height="100" />
        </div>
        <div className="product_info">
          <h3>{title}</h3>
          <p>{product} product</p>
        </div>
    </div>
  );
};

export default LatestCategory;
