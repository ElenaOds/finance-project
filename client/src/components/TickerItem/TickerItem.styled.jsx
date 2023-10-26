import styled from 'styled-components';


export const Row = styled.tr`
  height: 42px;

  @media screen and (min-width: 768px) {
    height: 50px;
}
 `

 export const Cell = styled.td`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.14;
    color: #3c4043;
   
    @media screen and (min-width: 768px) {
        height: 50px;
        font-size: 20px;    
    }

    @media screen and (min-width: 1280px) {
    font-size: 24px;
    }

 `



