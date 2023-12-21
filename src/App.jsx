import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-left: 800px;
`;

const Container2 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 0.5px #DCDCDC solid;
    border-radius: 10px 10px 0px 0px;
`;

// const Image = styled.img`
//     height: 100px;
//     width: 100px;
//     background-image: url("../assets/imageS.PNG");
// `;

const Container21 = styled.div`
    margin-right: 100px;
    margin-left: 20px;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 1rem;
`;

const Auteur = styled.p`
  color: #414141;
  font-size: 1rem;
`;


const Container3 = styled.div`
    display: flex;
    justify-content: flex-start;
    border: 0.5px #DCDCDC solid;
    border-radius: 0px 0px 10px 10px;
    align-items: center;
`;

const Rate = styled.p`
  color: #414141;
  font-size: 1rem;
  margin-left: 20px;
  margin-right: 70px;
`;

const Stars = styled.div`
    background-color: #F3C037;
    height : 10px;
    width: 10px;
    margin-left: 10px;
    border-radius: 100%;
`;


const App = () => (
  <Container>
    <Container2>
        <img src="src/assets/imageS.PNG" width="150" height="150" />
        <Container21>
            <Title>Sunset</Title>
            <Auteur>Lofi Fruits Music <br/> (2019)</Auteur>
        </Container21>
    </Container2>
    <Container3>
        <Rate>Rate this album</Rate>
        <Stars></Stars>
        <Stars></Stars>
        <Stars></Stars>
        <Stars></Stars>
        <Stars></Stars>
    </Container3>
  </Container>
);

export default App;