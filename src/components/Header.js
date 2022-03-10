import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';

export default function Header () {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/smileylogo.jpg'  alt='' />
                    <Button bg='red' color='white'>
                        Subscribe
                    </Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Sign Up for Daily Content</h1>
                        <p>A collection of content for you to enjoy, enjoy daily youtube videos, history, comedy
                            and fashion.
                        </p>
                        <Button bg='blue' color='gold'>
                            Enjoy the Content
                        </Button>
                    </div>
                    <Image src='./images/cha.jpg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    );
}