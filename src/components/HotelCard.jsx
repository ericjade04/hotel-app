import React from "react";

const HotelCard = ({image, title, price, category}) => {

  let categoryName = "category " + title; 
  return (
    <div>
      <figure><img src={image} alt={title} width={"100%"} height={"100%"}/></figure>
      <h4>{title}</h4>
      <p>{price}/day</p>
      <p className={categoryName}>{category}</p>
    </div>
  )
}

export default HotelCard;