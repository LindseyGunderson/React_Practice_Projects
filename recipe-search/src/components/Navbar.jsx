import React from 'react'
import styled from 'styled-components';

const NavDiv = styled.div`

    width: 100%;
    height: 50px;
    background-color: red;

`;

const Logo = styled.img`



`;



const Navbar = () => {
    return (
        <NavDiv>
            <Logo src="https://cdn.vectorstock.com/i/1000x1000/18/83/food-logo-designs-with-spoon-and-fork-vector-24431883.jpg" />

        </NavDiv>
    )
}

export default Navbar
