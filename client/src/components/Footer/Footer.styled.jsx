import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: auto;
`

export const Text = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    color: #3c4043;


     @media screen and (min-width: 768px) {
        font-size: 18px;
    
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
   
    }
`