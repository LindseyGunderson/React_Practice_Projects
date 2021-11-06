import React from 'react'
import styled from 'styled-components'

const SearchDiv = styled.div`

    background-color: #ccc;
    height: 100px;
    margin: auto auto;
    margin-top: -50px;
    padding: 20px;
    width: 60%;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const SearchInput = styled.input`

    padding: 5px;
    border: none;
    text-align: center;
    width: 60%;

`;

const ButtonsDiv = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    
    margin: auto auto;

`;

const SearchButton = styled.button`

    padding: 5px;
    width: 50%;

    border: none;
    background-color: teal;
    border: 1px solid teal;
    color: #fff;
    margin-right: 5px;

    &:hover {
        
        color: teal;
        background-color: #fff;

    }

`;

const RandomButton = styled.button`

    padding: 5px;
    width: 50%;

    border: none;
    background-color: teal;
    border: 1px solid teal;
    color: #fff;
    margin-left: 5px;

    &:hover {
        
        color: teal;
        background-color: #fff;

    }

`;


const Search = () => {
    return (
        <SearchDiv>

            <SearchInput placeholder="Search For A Receipe"/>

            <ButtonsDiv>
                <SearchButton> Search </SearchButton>
                <RandomButton>Surprise Me! </RandomButton>
            </ButtonsDiv>

        </SearchDiv>
    )
}

export default Search
