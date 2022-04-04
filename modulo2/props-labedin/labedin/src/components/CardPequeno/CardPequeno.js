import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 5px;
    margin-bottom: 10px;
    height: 50px;
    font-size: 1rem;

img {
    width: 35px;
    margin-right: 10px;
    border-radius: 50%;
}

h4 {
    text-align: center;
    margin-right: 5px;
}

div {
    display: flex;
    justify-items: flex-start;
}

`

function CardPequeno(props) {
    return (
        <div>
            <SmallCard>
                <img src={props.imagem} /> 
                <div>
                    <h4>📧 Email:</h4>
                    <p>{props.email}</p>
                </div>
            </SmallCard>
            <SmallCard>
                <img src={props.imagem} /> 
                <div>
                    <h4>🏠 Endereço:</h4>
                    <p>{props.endereco}</p>
                </div>
            </SmallCard>
        </div>
    )
}

export default CardPequeno;