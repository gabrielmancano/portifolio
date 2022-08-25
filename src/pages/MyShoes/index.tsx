import React, { useEffect, useState } from 'react'
import { Container, Title, Content, Description, PhotosContainer, Button, Photo, Text, Github, GithubLogo, MobilePhotosContainer, MobilePhoto } from './styles';

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import MyStore1 from '../../assets/projects/myshoes/resized/1.png'
import MyStore2 from '../../assets/projects/myshoes/resized/2.png'
import MyStore3 from '../../assets/projects/myshoes/resized/3.png'
import MyStore4 from '../../assets/projects/myshoes/resized/4.png'

import githubLogo from '../../assets/icons/github.png';

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

export default function MyShoes() {

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
            <Title>My store</Title>

            <Content>
                {windowSize.innerWidth >= 1200 ?
                    (
                        <PhotosContainer>
                            <Photo src={MyStore1} />
                            <Photo src={MyStore2} />
                            <Photo src={MyStore3} />
                            <Photo src={MyStore4} />
                        </PhotosContainer>
                    )
                    :
                    (
                        <Slideshow
                            imgs={[
                                MyStore1,
                                MyStore2,
                                MyStore3,
                                MyStore4
                            ]}
                        />
                    )
                }

                <Description>
                    <Text>
                        Projeto criado no canal do youtube do @sujeitoprogramador. <br/>
                        É um aplicativo com interface de loja, com detalhes sobre os modelos.

                    </Text>

                    
                    <Github href='https://github.com/gabrielmancano/mystore' target='_blank' rel='noreferrer'>
                        <GithubLogo src={githubLogo} />
                        GITHUB
                    </Github>
                </Description>
            </Content>
        </Container>
    )
}
