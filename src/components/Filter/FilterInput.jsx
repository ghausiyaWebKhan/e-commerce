const FilterInput = ({price,quantity}) => {
  return (
    <>
      <div className="filter-input">
        <div className="filter-btn">
          <input type="checkbox" className="checkbox" />
          <label>{price}</label>
        </div>
        <span>{quantity}</span>
      </div>
    </>
  );
};

export default FilterInput;
