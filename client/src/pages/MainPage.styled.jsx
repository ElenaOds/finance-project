import styled from 'styled-components';


export const Container = styled.div`
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media screen and (min-width: 768px) {
        padding: 40px;
    }

    @media screen and (min-width: 1280px) {
        padding: 70px;
    }
`

export const Text = styled.p`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.14;
    color: #3c4043;
    margin-bottom: 20px;

     @media screen and (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 26px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
`