import React from 'react';
import { Container, Sidebar, Photo, Title, IconsContainer, Icon, Content, Text, ContactsList, ContactsContainer, ContactsText, ProjectsText, Description, ProjectsDiv } from './styles';

import profileImage from '../../assets/perfil.jpg';

import typescriptLogo from '../../assets/icons/typescript.png';
import reactLogo from '../../assets/icons/react-native.png';
import javascriptLogo from '../../assets/icons/javascript.png';
import githubLogo from '../../assets/icons/github.png';


import { FiArrowDown } from "react-icons/fi";

export function About() {
    return (
        <Container>
            <Sidebar>
                <Photo src={profileImage} />
                <Title>GABRIEL MANÇANO.</Title>

                <IconsContainer>
                    <Icon src={javascriptLogo} />
                    <Icon src={reactLogo} />
                    <Icon src={typescriptLogo} />
                    <Icon style={{ borderRadius: 5 }} src={githubLogo} />
                </IconsContainer>

                <ContactsList>
                    <ContactsContainer style={{ justifyContent: 'space-between' }}>
                        <ContactsText style={{ cursor: 'pointer' }}>LinkedIn</ContactsText>
                        <ContactsText>|</ContactsText>
                        <ContactsText style={{ cursor: 'pointer' }}>GitHub</ContactsText>
                    </ContactsContainer>

                    <ContactsContainer>
                        <ContactsText>gabrielmancano@yahoo.com</ContactsText>
                    </ContactsContainer>
                </ContactsList>
            </Sidebar>

            <Content>
                <Title style={{ marginBottom: 50 }}>SOBRE :</Title>

                <Description>
                    <Text>Tenho 27 anos, moro em São Paulo e sou formado em administração na FECAP, com ênfase em comércio exterior.</Text>
                    <br />

                    <Text>
                        Sempre gostei muito da área de programação, e voltei a estudar no final de 2021, com foco em
                        javascript, e então direcionei os estudos para react, mais especificamente em react native e
                        desenvolvimento mobile.
                        <br /><br />
                        Atualmente estou cursando o ignite da @rocketseat, e diariamente estudando através da criação de novos projetos.
                    </Text>
                </Description>

                <ProjectsDiv>
                    <ProjectsText>
                        Projetos que desenvolvi
                    </ProjectsText>
                    <FiArrowDown color='black' style={{fontSize: 22}} />
                </ProjectsDiv>

                {/* <ProjectsList>
                    <Project
                        title='adot'
                        description='Aplicativo de anotações, com funções de cadastrar, editar e apagar.'
                    />

                    <Project
                        title='To do'
                        description='Aplicativo'
                    />

                </ProjectsList> */}
            </Content>

        </Container>
    )
}
