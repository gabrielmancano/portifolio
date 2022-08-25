import React, { useEffect, useState } from 'react'
import { Container, Title, Content, Description, PhotosContainer, Button, Photo, Text, Github, GithubLogo, MobilePhotosContainer, MobilePhoto } from './styles';

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Adot1 from '../../assets/projects/adot/resized/1.png'
import Adot2 from '../../assets/projects/adot/resized/2.png'
import Adot3 from '../../assets/projects/adot/resized/4.png'
import Adot4 from '../../assets/projects/adot/resized/5.png'

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

export default function Adot() {
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
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (
        <Container>
            <Title>Adot</Title>

            <Content>
                <Description>
                    <Text>
                        App de adoção, criado 100% por mim. Possui diversas bibliotecas e funcionalidades,
                        utilizando hooks, react navigation.
                        <br /> <br />
                        Foi o app com o qual eu mais aprendi, e também o que mais gostei de fazer.
                        <br />
                        Os animais estão
                        em um array, sendo o novo animal adicionado ao início da lista.

                    </Text>
                        <Github href='https://github.com/gabrielmancano/Adot' target='_blank' rel='noreferrer'>
                            <GithubLogo src={githubLogo} />
                            GITHUB
                        </Github>
                </Description>

                {windowSize.innerWidth >= 1200 ?
                    (
                        <PhotosContainer>
                            <Photo src={Adot1} />
                            <Photo src={Adot2} />
                            <Photo src={Adot3} />
                            <Photo src={Adot4} />
                        </PhotosContainer>
                    )
                    :
                    (
                        <Slideshow
                            imgs={[
                                Adot1,
                                Adot2,
                                Adot3,
                                Adot4
                            ]}
                        />
                    )
                }
            </Content>
        </Container>
    )
}
