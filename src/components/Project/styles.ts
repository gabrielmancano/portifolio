import styled from "styled-components";

export const Container = styled.div`
    width: 35%;
    
    min-width: 230px;
    height: 230px;
    background-color: #000120;
    border-radius: 15px;
    margin-top: 20px;
    padding: 10px;
`

export const Image = styled.img`
    width: 70%;
    margin: 0 auto;
    border-radius: 15px;
`

export const Title = styled.label`
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
    color: #FFF;
    margin: auto;
    text-align: center;

    margin-bottom: 20px;
`

export const Description = styled.label`
font-family: 'Bebas Neue', cursive;
    font-size: 19px;
    color: #FFF;
    margin: auto;
    text-align: center;
    margin-top: 15px;
    width: 70%;

`

export const Button = styled.button`
    width: 60%;
    height: 50px;

    font-family: 'Roboto', sans-serif;
    font-size: 17px;

    background-color: #B9BBD5;

    border: none;
    border-radius: 5px;
    cursor: pointer;

    margin-top: 18px;
    
    transition: transform 0.3s;

    &:hover{
        transform: scale(1.03);
    }
`