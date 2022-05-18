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
height: 60vh;
background-color:${theme.secondary};

border-bottom-left-radius:10px;
border-top-left-radius:10px;
border-bottom-right-radius:20px;
border-top-right-radius:50px;
box-sizing:border-box;

padding:10px;

// overflow:hidden;


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

export const ReadingsContainer = styled.div(
  ({ theme }) => `
display:flex;
justify-content:center;
align-items:center;
column-gap:10px;
width:100%;
height:auto;
`
);

export const ReadingsSelector = styled.div(
  ({ theme }) => `

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:${theme.primary};
background-color: ${(props: { selected: any }) =>
    props.selected ? "blue" : "pink"}
width:20%;
height:auto;
:hover{
    cursor:pointer;
    scale:2;
		
}
figure{
width:100%;
border: 2px solid ${theme.primary};
border-radius:10%;
overflow:hidden;

img{
    height:100%;
    width:100%;
    background-color:${theme.back}
}
}
`
);
