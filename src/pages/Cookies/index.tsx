import React, { useState } from 'react'
import { Container, Title, Content, Description, Button, Text, Github, GithubLogo, MobilePhotosContainer, MobilePhoto, Vercel, VercelLogo } from './styles';

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Cookies1 from '../../assets/projects/cookies/1.png'
import Cookies2 from '../../assets/projects/cookies/2.png'
import Cookies3 from '../../assets/projects/cookies/3.png'
import Cookies4 from '../../assets/projects/cookies/4.png'

import githubLogo from '../../assets/icons/github.png';
import vercelLogo from '../../assets/icons/vercel.png';


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

export default function Cookies() {
    return (
        <Container>
            <Title>Cookies do davi</Title>

            <Content>
                <Slideshow
                    imgs={[
                        Cookies1,
                        Cookies2,
                        Cookies3,
                        Cookies4
                    ]}
                />

                <Description>
                    <Text>
                        Site desenvolvido para a empresa @cookiesdodavi, consiste em uma página de apresentação
                        dos produtos, que muda a cor do background e dos botões de acordo com o estado setado.

                    </Text>
                    <Github href='https://github.com/gabrielmancano/ProdutosCookies' target='_blank' rel='noreferrer'>
                        <GithubLogo src={githubLogo} />
                        GITHUB
                    </Github>

                    <Vercel href='https://produtos-cookies.vercel.app/' target='_blank' rel='noreferrer'>
                        <VercelLogo src={vercelLogo} />
                        VERCEL
                    </Vercel>
                </Description>
            </Content>
        </Container>
    )
}
