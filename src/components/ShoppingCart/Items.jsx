import { useContext } from "react";
import { CartContext } from "./ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";



const Items = () => {
    const {item,removeItem,clearCart,increment,decrement,totalAmount} = useContext(CartContext);
    if(item.length === 0){
        return(
            <>
                <div>
                    <h1 style={{color:'black'}}>Cart Is Empty</h1>
                </div>
            </>
        );
    }
    return (
        <>
        {
                    item.map((item)=>(
                    <div className="cart" key={item.id}>
                    
                    <div className="cart-img">
                        <img src={item.img} alt="product" width='150' height='150'/>
                    </div>
                    <div className="cart-title">
                        <h1 className='cart-title'  style={{color:'black',marginBottom:'0'}}>{item.title}</h1>               
                    </div>
                    <div className="cart-desc">
                    <p className='cart-desc' style={{color:'black'}}>{item.description}</p>        
                    </div>
                    <div className="cart-quantity">
                    <button><AddIcon onClick={()=>increment(item.id)}/></button>
                    <span>{item.quantity}</span>
                    <button><RemoveIcon onClick={()=>decrement(item.id)}/></button>
                        
                    </div>
                    <div className="cart-price">{item.price} Rs.</div>
                    <div className="cart-delete">
                        <button type="button"><DeleteForeverIcon style={{border:'none'}} 
                        onClick={()=>removeItem(item.id)}/>
                        </button>
                   
                    </div>
                </div>
            ))
        }
        <div className='cart-total'>
            <h3>
                Cart Total : <span>{totalAmount} Rs.</span>
            </h3>
            <button type="button" className="clear-cart" onClick={()=>clearCart()}>Clear Cart</button>
        </div>
        </>
    );
}




export default Items;