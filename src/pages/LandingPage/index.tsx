import { Container, Title, Content, Description, Text, Github, GithubLogo, Vercel, VercelLogo, Photo } from './styles';

import LandingImage from '../../assets/projects/landingpage/1.png'

import githubLogo from '../../assets/icons/github.png';
import vercelLogo from '../../assets/icons/vercel.png';

export default function LandingPage() {
    return (
        <Container>
            <Title>Landing Page - BMW M3</Title>

            <Content>
                <Description>
                    <Text>
                        Página de apresentação de um carro que eu gosto muito.
                        <br />
                        O projeto é básico, feito para ter um visual clean.

                    </Text>
                    <Github href='https://github.com/gabrielmancano/landingpage' target='_blank' rel='noreferrer'>
                        <GithubLogo src={githubLogo} />
                        GITHUB
                    </Github>

                    <Vercel href='https://landingpage-eight-ashy.vercel.app/' target='_blank' rel='noreferrer'>
                        <VercelLogo src={vercelLogo} />
                        VERCEL
                    </Vercel>
                </Description>

                <Photo src={LandingImage} />

            </Content>
        </Container>
    )
}
