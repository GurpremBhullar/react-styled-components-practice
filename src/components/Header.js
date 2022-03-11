import { StyledHeader, Nav, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';

export default function Header () {
    return (
        <StyledHeader>
            <Container>
                <h2>Cha and Samosa</h2>
                <Nav>
                    <Image src='./images/cha.jpg'  alt='' />
                    <Image src='./images/villagekids.jpg'  alt='' />
                    <Image src='./images/samosa.jpg'  alt='' />
                </Nav>
                <Flex>
                    <div>
                    <Button bg='red' color='white'>
                        Subscribe
                    </Button>
                        <h1>Sign Up for Daily Content</h1>
                        <p>A collection of content for you to enjoy, enjoy daily youtube videos, history, comedy
                            and fashion.
                        </p>
                        <Button bg='blue' color='gold'>
                            Enjoy the Content
                        </Button>
                    </div>
                </Flex>
            </Container>
        </StyledHeader>
    );
}