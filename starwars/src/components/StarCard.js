import React from "react";
import {
    Card,  CardText, CardBody, CardTitle, CardSubtitle, Col
  } from 'reactstrap';



const StarCard = props => {
    return(
        
        <Col sm="12" md={{ size: 6, offset: 3 }} key= {props.url} className= "everyCard">
         <Card className= "wholeCard" >
            <CardTitle className= "titles">{props.name}</CardTitle>
            <CardBody>
            <CardSubtitle>Birthdate: {props.birth}</CardSubtitle>
            <CardText>Height: {props.height}</CardText>
            </CardBody>
         </Card>
         </Col>    
    )
}

export default StarCard;

