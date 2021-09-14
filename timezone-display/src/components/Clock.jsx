import styled from "styled-components";

import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import { CollectionsBookmarkOutlined } from "@material-ui/icons";


const Container = styled.div`

    background-image: url(${(props)=>props.bg < "12" ? "https://images.unsplash.com/photo-1445561696415-deadc6a2adaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80" : "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"});

    background-size: cover;
    height: 100vh;

    display: flex;
    justify-content: center;

`;



const Wrapper = styled.div`

    background-color: #ccc;
    background-color: rgba(224,224,224, 0.4);
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

const Clock = ({time}) => {


    const splitTime = (convertTime) => {

        let timeConvert = convertTime;

        let timesplit = timeConvert.split(' ');

        
        let time24 = timesplit[1].split(":");

        const time = time24[0] + ":" + time24[1];
        
        console.log(time);

        return time;

    }

    const time24 = splitTime(time.formatted);

    return (
        <Container bg={time24}>
            <Wrapper>
                <Title> 
                    <Icons>
                    <WbSunnyIcon />
                    </Icons>
                    Good Morning, It's Currently
                    </Title>
                    <TimeContainer>
                        <Time>{time24}</Time>
                        <Timezone> { time.nextAbbreviation}</Timezone>
                    </TimeContainer>
                <Location>TimeZone: {time.zoneName}</Location>
                </Wrapper>
        </Container>
    )
}

export default Clock
