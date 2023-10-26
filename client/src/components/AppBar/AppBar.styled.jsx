import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component"


export const Wrapper = styled.div`
    height: 40px;
    padding: 0 20px;
    display: flex;
    border-bottom: 4px solid #e4efe9 ;

    @media screen and (min-width: 768px) {
        height: 60px;
        padding: 0 40px;
    }

    @media screen and (min-width: 1280px) {
        height: 80px;
        padding: 0 70px;
    }
    `

export const StyledLazyLoadImage = styled(LazyLoadImage)`
    width: 30px;
    height: 30px;

    @media screen and (min-width: 768px) {
        width: 50px;
        height: 50px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 70px;
        height: 70px;
    }
`

export const LogoWrapper = styled.a`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    text-decoration: none;

    @media screen and (min-width: 768px) {
        gap: 15px;
    }

    @media screen and (min-width: 1280px) {
        gap: 15px;
    }
`;

export const Title = styled.h1`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    line-height: 1.14;
    color: #008000;

    @media screen and (min-width: 768px) {
        font-size: 36px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 46px;
    }
`;
