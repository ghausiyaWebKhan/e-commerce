import './ShopRoute.css';
const ShopRoute = ({route1,route2,route3}) => {
    return(
        <>
            <div style={{width:'90vw',margin:'0 auto',background:'#ffc800',marginTop:'3rem'}} className='shop-route'>
                <span>{route1}</span>
                <span>{route2}</span>
                <span> {route3}</span>
                {/* <span>Home</span> */}
            </div>
        </>
    );
}


export default ShopRoute;