import React from 'react';

import { NavLink} from "react-router-dom";



const PortfolioCard = (props) =>{
    return(
    <>
    <div className="col-md-4 col-10 mx-auto">
<div className="card">
  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} ></img>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text" style = {{color:'black', fontSize:"0.875rem"}}>{props.description}</p>
    <a href={props.linkto} className="btn btn-primary">Explore</a>
  </div>
</div>
</div>

    </>
    );
};
export default PortfolioCard;