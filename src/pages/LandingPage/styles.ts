import styled from "styled-components";

export const Container = styled.div`
    width: 100vw -15px;
    height: 700px;
    background-color: #000120;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const Title = styled.label`
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
    color: #FFF;
    text-align: center;

    margin-top: 40px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 80%;

    margin-top: 50px;
`;

export const Description = styled.label`
    width: 25%;
    font-family: 'Bebas Neue', cursive;
    font-size: 22px;
    color: #FFF;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PhotosContainer = styled.div`

`;

export const Photo = styled.img`
    height: 80%;
    margin: 0 4px;

    @media(max-width: 1200px) {
        height: 70%
    }

    @media(max-width: 900px) {
        height: 60%
    }

    @media(max-width: 800px) {
        height: 50%
    }

    @media(max-width: 700px) {
        height: 40%
    }
`;

export const Text = styled.label`
    text-align: justify;
    margin-top: 50px;
    margin-bottom: 20px;
    
    `


export const Github = styled.a`
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    width: 120px;
    height: 35px;
    background-color: #FFF;
    color: #000;
    text-decoration: none;
    border: none;
    border-radius: 5px;

    margin-top: 10px;
    cursor: pointer;

    &:active{
        filter: brightness(0.7);
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export const GithubLogo = styled.img`
    width: 25px;
    margin-right: 8px;
`


export const Button = styled.button`
    background: none;
    border: none;

    font-size: 32px;
    color: white;

    cursor: pointer;

    transition: transform 0.4s;

    &:hover {
        transform: scale(1.2);
    }
`

export const MobilePhotosContainer = styled.div`
    height: 100%;

    display: flex;

    flex-direction: row;

    align-items: center;
    justify-content: center;
`

export const MobilePhoto = styled.img`
    height: 80%;
    margin: 0 4px;
`;


export const Vercel = styled.a`
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    width: 120px;
    height: 35px;
    background-color: #FFF;
    color: #000;
    text-decoration: none;
    border: none;
    border-radius: 5px;

    margin-top: 10px;
    cursor: pointer;

    &:active{
        filter: brightness(0.7);
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export const VercelLogo = styled.img`
    width: 22px;
    margin-right: 8px;
`