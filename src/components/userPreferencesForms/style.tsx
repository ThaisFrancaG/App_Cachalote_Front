import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.main(
  ({ theme }) => `
  display:flex;
  flex-direction:column;
  align-items:center;

position:relative; 
left:50%;
transform: translate(-50%, 20%);
width: 80vw;
height: 70vh;
background-color:${theme.secondary};

border-bottom-left-radius:10px;
border-top-left-radius:10px;
border-bottom-right-radius:20px;
border-top-right-radius:50px;
box-sizing:border-box;

padding:10px;

z-index:1000;
`
);

export const FormTitle = styled.span(
  ({ theme }) => `
    color:${theme.textTitle}
`
);

export const FormProgress = styled.nav(
  ({ theme }) => `
position:absolute;
bottom:0;
display:flex;
color:${theme.primary}

`
);

export const FormBack = styled.div`
  position: fixed;
  z-index: 800;
  width: 100vw;
  height: 100vh;
  background-color: rgba(229, 229, 186, 0.842);
`;

export const ReadingsContainer = styled.div<any>(
  ({ theme }) => `
display:flex;

justify-content:center;
align-items:center;
column-gap:10px;
width:80vw;
height:auto;
padding-bottom:30px;
`
);

export const PageDescriptor = styled.div(
  ({ theme }) => `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`
);
export const ReadingsSelector = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primary};

  width: 20%;
  height: auto;
  :hover {
    cursor: pointer;
    scale: 1.2;
  }
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: 900;
  }
  span {
    display: flex;
    text-align: center;
  }
  figure {
    width: 15vw;
    height: 30vh;

    border: ${(props) => (props.selected ? "10px" : "5px")} solid
      ${(props) => props.theme.primary};
    border-radius: ${(props) => (props.selected ? "50%" : "10%")};
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      background-color: ${(props) => props.theme.back};
    }
  }
`;
