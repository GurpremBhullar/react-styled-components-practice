import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"


export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/babytwo.jpg" width='150px' height='150px' alt="" />
                <img src="./images/henna.jpg" width='150px' height='150px' alt="" />
                <img src="./images/kids.jpg" width='150px' height='150px' alt="" />
                <img src="./images/holi.jpg" width='150px' height='150px' alt="" />
                <img src="./images/baby.jpg" width='150px' height='150px' alt="" />
                <Flex>
                    <ul>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. 
                        </li>
                        <li>+1-203-919-0663</li>
                        <li>bhullargurprem@gmail.com</li>
                    </ul>
                    <ul>
                        <li>About us</li>
                        <li>What we do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons />
                </Flex>

                <p>&copy; 2022 Gurprem. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}