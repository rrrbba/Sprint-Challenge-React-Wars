import React from "react";
import {
    Card, CardBody,  CardText, CardTitle, CardSubtitle
  } from 'reactstrap';



const StarCard = props => {
    return(
        
         <Card className= "wholeCard" key= {props.url}>
            <CardBody>
            <CardTitle className= "titles">{props.name}</CardTitle>
            <CardSubtitle>Birthdate: {props.birth}</CardSubtitle>
            <CardText>Height: {props.height}</CardText>
            </CardBody>
         </Card> 
         
    );
};

export default StarCard;

