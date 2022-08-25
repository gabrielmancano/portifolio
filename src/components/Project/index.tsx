import React from 'react';
import { Container, Title, Description, Button } from './styles';

interface ProjectProps {
    title: string;
    description: string;
}

export function Project({ title, description }: ProjectProps) {
  return (
    <Container>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
            <Title>
                {title}
            </Title>

            <Description>
                {description}
            </Description>

            <Button>Ir para o projeto</Button>
        </div>
    </Container>
  )
}