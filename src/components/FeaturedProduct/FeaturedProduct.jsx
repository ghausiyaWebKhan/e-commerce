import './FeaturedProduct.css';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SearchIcon from '@mui/icons-material/Search';
const FeaturedProduct = ({image,productName,price,cutPrice,rating}) =>{
    // console.log(typeof(rating));
    return(
        <>
            <div className="individual_featured_product">
                
                <div className="featured_img">
                    <img src={image} alt="featured_product" height='300' width='300'/>
                    <div className='featured_img_overlay'>
                        <span><ShoppingCartIcon/></span>
                        <span><FavoriteIcon/></span>
                        <span><AutorenewIcon/></span>
                        <span><SearchIcon/></span>
                    </div>
                </div>
                <div className="featured_info">
                    <div className="featured_product_name">{productName}</div>
                    <div className="featured_product_price">
                    <span>{price}</span>
                    <span><del>{cutPrice}</del></span>
                    </div>
                    <div className="featured_product_rating">
                      {[...Array(rating)].map((_,index) => {
                        return(
                            <span key={index}><StarIcon/></span>
                        )
                      })}
                    </div>     

                </div>
            </div>
        </>
    );
}

export default FeaturedProduct;