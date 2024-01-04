import './Features.css';

const Features = ({title,icon}) =>{
    return(
        <>
            {/* <div className="features"> */}
                <div className="feature">
                    <div className="img">{icon}</div>
                    <div className="feature_name">{title}</div>
                </div>
            {/* </div> */}
        </>
    );
};

export default Features;
