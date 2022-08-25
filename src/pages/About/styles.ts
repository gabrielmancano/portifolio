import styled from "styled-components";

export const Container = styled.div`
    
    width: 100vw - 15px;
    background-color: #191A36;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 800px) {
        flex-direction: column;

        padding-bottom: 8px;
    }
`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    min-width: 240px;
    height: 535px;
    background-color: #000120;
    padding: 15px;
    align-items: center;

    @media(max-width: 800px) {
        width: 100vw;

        padding: 0;
    }
`

export const Photo = styled.img`
    height: 200px;
    width: 180px;
    border-radius: 200px;

`

export const Title = styled.h1`
    font-family: 'Bebas Neue', cursive;
    cursor: default;
    
    color: #FFF;
    text-align: center;

`

export const Subtitle = styled.div`

`

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const Icon = styled.img`
    width: 40px;
    height: 40px;

    transition: transform 0.3s;

    &:hover{
        transform: scale(1.05);
    }
`

export const ContactsList = styled.div`
    margin-top: 22px;
`

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 5px;
`



export const ContactsText = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFF;

    transition: transform 0.3s;

    &:hover{
        transform: scale(1.04);
    }
`



export const ProjectsList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    
`

export const Text = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    font-size: 22px;
    text-align: justify;
    margin-top: 50px;
    margin-bottom: 20px;

    
    @media(max-width: 500px) {
        font-size: 18px;
    }
    
    `

export const ProjectsText = styled.label`
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    color: #000;

    `

export const Description = styled.div`
    width: 80%;
    text-align: justify;
    justify-content: center;
    margin: 0 auto;
`

export const ProjectsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    margin: auto;
    text-align: center;
    margin-top: 120px;
    background-color: yellow;
    border-radius: 50px;
    width: 250px;
    padding: 5px;
`
