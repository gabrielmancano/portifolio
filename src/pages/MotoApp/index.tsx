import React, { useEffect, useState } from 'react'
import { Container, Title, Content, Description, PhotosContainer, Button, Photo, Text, Github, GithubLogo, MobilePhotosContainer, MobilePhoto } from './styles';

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Moto1 from '../../assets/projects/motoapp/1.png'
import Moto2 from '../../assets/projects/motoapp/2.png'
import Moto3 from '../../assets/projects/motoapp/3.png'
import Moto4 from '../../assets/projects/motoapp/4.png'
import Moto5 from '../../assets/projects/motoapp/5.png'
import Moto6 from '../../assets/projects/motoapp/6.png'
import Moto7 from '../../assets/projects/motoapp/7.png'

import githubLogo from '../../assets/icons/github.png';
import expoLogo from '../../assets/icons/expo.png';

// Funções do slideshow (teste)
// (arrumar a tipagem do imgs, não é any)
const Slideshow = ({ imgs }: any) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index === imgs.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <MobilePhotosContainer>
            <Button
                onClick={prev}
            >
                <FiArrowLeft />
            </Button>

            <MobilePhoto src={imgs[index]} />

            <Button
                onClick={next}
            >
                <FiArrowRight />
            </Button>
        </MobilePhotosContainer>
    )
}

export default function MotoApp() {

    // Funções de window.width

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    return (
        <Container>
            <Title>Moto App</Title>

            <Content>
                {windowSize.innerWidth >= 1200 ?
                    (
                        <PhotosContainer>
                            <Photo src={Moto1} />
                            <Photo src={Moto3} />
                            <Photo src={Moto7} />
                            <Photo src={Moto5} />
                        </PhotosContainer>
                    )
                    :
                    (
                        <Slideshow
                            imgs={[
                                Moto1,
                                Moto2,
                                Moto3,
                                Moto4,
                                Moto5,
                                Moto6,
                                Moto7
                            ]}
                        />
                    )
                }

                <Description>
                    <Text>
                        Aplicativo de motos, podendo listar todas ou filtrar dependendo de sua preferência. É possível filtrar por cilindrada, fabricante e categoria. <br/>
                        Criei um arquivo 'data.ts' para servir como se fosse dados vindos de uma API, então listei os modelos usando o método map. <br/>
                        Utilizei styled-components, e passei os parâmetros da página de detalhes através do react navigation.
                    </Text>

                    
                    <Github href='https://github.com/gabrielmancano/motoapp' target='_blank' rel='noreferrer'>
                        <GithubLogo src={githubLogo} />
                        GITHUB
                    </Github>

                    <Github href='https://expo.dev/@gabrielmancano/motoapp' target='_blank' rel='noreferrer'>
                        <GithubLogo src={expoLogo} />
                        EXPO GO
                    </Github>
                </Description>
            </Content>
        </Container>
    )
}
