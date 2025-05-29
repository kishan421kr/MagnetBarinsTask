import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { addTo } from "../Redux/redux";
import { useDispatch } from "react-redux";
export function ProductCard({image,name,brand,id,price,description,category}) {
 
 const dispatch = useDispatch();
    return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={image}
        alt="Apple Watch Series 7 in colors pink, silver, and black"
      />
      <Card.Body>
        <Card.Title className="h6">
          {name}
        </Card.Title>
        <div>
            {description}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">${price}</span>
          <Button variant="primary" onClick={()=>{dispatch(addTo({id,qty:1,name,price,image}))}}>Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
