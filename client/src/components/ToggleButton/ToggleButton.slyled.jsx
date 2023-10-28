import styled from 'styled-components';


export const Button = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #008000;
    transition: all 0.4s ease-in-out;

    @media screen and (min-width: 768px) {
        border-radius: 30px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease-in-out;

      @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        }
    }
`
export const Label = styled.label`
    width: 60px;
    height: 20px;
    position: relative;
    display: inline-block;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 80px;
        height: 30px;
        border-radius: 30px;
    }
`
export const Input = styled.input`
    display: none;  

    &:checked +  ${Button} {
        background-color: #ccc;
    }
    &:checked +  ${Button}::before {
        transform: translateX(30px);

        @media screen and (min-width: 768px) {
            transform: translateX(50px);
        }
    }
`
