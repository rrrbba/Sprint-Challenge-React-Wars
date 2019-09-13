import React, { useState, useEffect } from "react";
import axios from "axios";
import StarCard from './StarCard';
import { Container, Row } from "reactstrap";


export default function StarList(){

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(response => {
                const characters = response.data.results;
                console.log(response);
                setCharacters(characters);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })
    }, []);
    return(
        <Container>
            <Row>
        {characters.map(character => {
            return(
                <StarCard
                key = {character.url}
                name = {character.name}
                birth = {character.birth_year}
                height = {character.height}
                />
            )
        })}
            </Row>
            </Container>
    );
}