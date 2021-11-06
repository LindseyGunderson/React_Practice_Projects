import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`

    margin: 5% 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`;

const Card = styled.div`

    background-image: url("https://images.unsplash.com/photo-1510431198580-7727c9fa1e3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80");
    background-position: center;
    background-size: cover;
    margin: 0 1rem;
    height: 280px;
    width: 200px;

    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: 5px;

`;

const CardInfo = styled.div`


    width: 90%;
    text-align: center;
    padding: 5px;
    margin: 97% auto;
    height: auto;
    background-color: #fff;
    border-radius: 5px;
`;

const Title = styled.h2``;

const Description = styled.p``;

const RecipeCard = () => {
    return (
        <CardContainer>
            <Card>

            <CardInfo> 
                   <Title> Pecan Waffles </Title>
                   <Description> 15 Min Prep Time </Description>
                   <Description> 5 Min Cook Time </Description>
                </CardInfo>
            </Card>

            <Card>

                <CardInfo> 
                   <Title> Pecan Waffles </Title>
                   <Description> 15 Min Prep Time </Description>
                   <Description> 5 Min Cook Time </Description>
                </CardInfo>
            </Card>
        </CardContainer>
    )
}

export default RecipeCard
