import React, { useEffect, useState } from 'react'
import { Container, Title, Content, Description, PhotosContainer, Button, Photo, Text, Github, GithubLogo, MobilePhotosContainer, MobilePhoto } from './styles';

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Todo1 from '../../assets/projects/todo/resized/1.png'
import Todo2 from '../../assets/projects/todo/resized/2.png'
import Todo3 from '../../assets/projects/todo/resized/3.png'
import Todo4 from '../../assets/projects/todo/resized/4.png'

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

export default function TodoApp() {

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
            <Title>To do</Title>

            <Content>
                {windowSize.innerWidth >= 1200 ?
                    (
                        <PhotosContainer>
                            <Photo src={Todo1} />
                            <Photo src={Todo2} />
                            <Photo src={Todo3} />
                            <Photo src={Todo4} />
                        </PhotosContainer>
                    )
                    :
                    (
                        <Slideshow
                            imgs={[
                                Todo1,
                                Todo2,
                                Todo3,
                                Todo4
                            ]}
                        />
                    )
                }

                <Description>
                    <Text>
                        Template criado pela @rocketseat, consiste em um desafio de implementar as funções
                        de contador de tarefas, inserir, editar e remover tasks de uma lista.

                    </Text>

                    
                    <Github href='https://github.com/gabrielmancano/ToDoChallenge' target='_blank' rel='noreferrer'>
                        <GithubLogo src={githubLogo} />
                        GITHUB
                    </Github>
                </Description>
            </Content>
        </Container>
    )
}
