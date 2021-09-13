import styled from "styled-components";

import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Container = styled.div`

    background-image: url("https://images.unsplash.com/photo-1445561696415-deadc6a2adaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80");
    background-size: cover;
    height: 100vh;

    display: flex;
    justify-content: center;


`;

const Wrapper = styled.div`

    background-color: #ccc;
    background-color:rgba(224,224,224, 0.4);
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: auto auto;
    width: 60%;
    height: 600px;
    padding-left: 10%;
    border-radius: 20px;

`;

const Icons = styled.div`

    padding-right: 1rem;

`;

const Title = styled.p`

    display: flex;
    align-items: center;
    text-transform: uppercase;

`;

const TimeContainer = styled.div`

    display: flex;
    align-items: baseline;


`;

const Time = styled.h1`

    font-size: 100px;
    font-weight: 700;


`;

const Timezone = styled.h2`

    padding-left: 1rem;

`;

const Location = styled.h3``;

const Clock = () => {
    return (
        <Container>
            <Wrapper>
                <Title> 
                    <Icons>
                    <WbSunnyIcon />
                    </Icons>
                    Good Morning, It's Currently
                    </Title>
                    <TimeContainer>
                        <Time>11:37</Time>
                        <Timezone> BST</Timezone>
                    </TimeContainer>
                <Location>In London, UK</Location>
                </Wrapper>
        </Container>
    )
}

export default Clock
