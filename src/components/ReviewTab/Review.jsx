// import StarIcon from '@mui/icons-material/Star';
import './Review.css';
import { useState } from 'react';
import ReviewData from './reviewData';

const Review = () => {
    const [index, setIndex] = useState(1);
    // const change = useRef('');
    const func = (btns)=> {
        setIndex(btns);
        console.log(btns);
        // console.log("hello");
        
      }
  return (
    <>
      <div className="review-tab">
        <div className="review-container">
          <div className="review-btn-container">
            {
              ReviewData.map((btn,ind)=>(
            <button type="button" onClick={()=>func(btn.id)}  key={ind} style={{
              backgroundColor:(btn.id === index )&&'white',
              borderBottom:(btn.id === index ) && '3px solid rgb(255, 200, 0)', 
              color:(btn.id === index ) && 'rgb(255, 200, 0)'}} >
              {btn.button}
              </button>
              ))
            }
          </div>
            {/* <div className="common" > */}
          <div className="review-info">
            {
              ReviewData.map((info,ind)=>(
                <div className='description common' style={{display : (info.id === index) ?'block' : 'none' }}>
                
                <h1 style={{}} key={ind}>{info.head}</h1>
              <p style={{}} key={info.id}>
                {info.para}
              </p>
                </div>
              ))
            }
             
            {/* </div> */}
    
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
