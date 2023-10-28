import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-radius: 2px;
  box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.12), 
  1px 3px 4px rgba(0, 0, 0, 0.14), 
  0px 1px 2px rgba(0, 0, 0, 0.2);
`

export const Head = styled.thead`
  background-color: #008000;
 `

 export const HeadTitle = styled.th`
   font-family: 'Roboto';
   font-weight: 500;
   font-size: 16px;
   color: #ffff;

   @media screen and (min-width: 768px) {
    font-size: 20px;
}

  @media screen and (min-width: 1280px) {
      font-size: 24px;
}
 `;

export const Row = styled.tr`
  height: 42px;

  @media screen and (min-width: 768px) {
    height: 50px;
}
 `

 

