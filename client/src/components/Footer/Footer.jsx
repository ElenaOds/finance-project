import { Wrapper, Text } from './Footer.styled';
 
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <Wrapper>
        <Text> All rights are reserved © {date}</Text>
        </Wrapper>
    )
}

export default Footer;
