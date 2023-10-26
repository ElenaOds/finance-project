import { Wrapper, StyledLazyLoadImage, LogoWrapper, Title } from './AppBar.styled';
import logo from '../../assets/logo/logo.png'

export const AppBar = () => {
    return (
         <Wrapper>
            <LogoWrapper href='/' aria-label="Finance">   
            <StyledLazyLoadImage       
                src={logo}
                alt="logo"
                />
                <Title>Finance stock</Title>
            </LogoWrapper>
        </Wrapper>
   
    )
}
