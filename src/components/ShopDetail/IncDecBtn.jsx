import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import "./IncDecBtn.css";

const IncDecBtn = ({ marginTop }) => {
  const [count, setCount] = useState(0);

  const Increament = () => {
    setCount(count + 1);
  };

  const Decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <div className="buttons">
        <div className="btn-container" style={{marginTop:marginTop}}>
          <button type="button" onClick={Decreament}>
            <RemoveIcon />
          </button>
          <span>{count}</span>
          <button type="button" onClick={Increament}>
            <AddIcon />
          </button>
        </div>
        
      </div>
    </>
  );
};

export default IncDecBtn;
