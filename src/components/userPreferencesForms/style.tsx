import { Link } from "react-router-dom";
import styled from "styled-components";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
export const HorizontalDivisor = styled.div(({ theme }) => ``);

export const FormContainer = styled.main(
  ({ theme }) => `
  display:flex;
  flex-direction:column;
  align-items:center;

position:relative; 
left:50%;
transform: translate(-50%, 20%);
width: 90vw;
min-height: 80vh;
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

export const AvatarSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  min-height: 10vh;

  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    min-height: 8vh;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.input};
    :hover {
      background-color: ${(props) => props.theme.inputTransparent};
    }
  }
`;

export const AvatarForm = styled.form<any>`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: auto;
  justify-content: center;

  input {
    width: 80%;
    height: 8vh;
    background-color: ${(props) => props.theme.input};
  }

  button {
    margin-left: 70%;
    width: 20vw;
    height: 8vh;
    border: none;
    border-radius: 5%;
    color: ${(props) => (props.status ? "#fff" : props.theme.back)};
    :hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.status
          ? props.theme.accentTransparent
          : props.theme.inputTransparent};
    }
    background-color: ${(props) =>
      props.status ? props.theme.accent : props.theme.input};
  }

  img {
    border: 2px solid ${(props) => props.theme.primary};
    display: flex;
    border-radius: 50%;
    background-color: ${(props) => props.theme.back};
    width: 100px;
    height: 100px;
  }
`;

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
color:${theme.primary};
background-color:red;
`
);

export const FormBack = styled.div`
  position: fixed;
  z-index: 800;
  width: 100vw;
  height: 100vh;
  background-color: rgba(229, 229, 186, 0.842);
`;

export const FormNickName = styled.form(
  ({ theme }) => `
display:flex;
flex-direction:column;
align-items: center;
width:80vw;
row-gap:10px;
color:${theme.textPrimary};
margin-top:20px;


span{color: ${theme.primary};
  font-family:"Fredoka One";
  font-size:20px;
  letter-spacing: 5px;
  margin-bottom:3px;}

input{
  min-height:5vh;
  width:90%;
  background-color:${theme.input};
  border:none;
  border-radius:20px;
  padding: 0 10px;
  color:${theme.textPrimary};
  font-family:"Nunito";
  letter-spacing: 1px;
  font-size:20px;
  text-align:center;
}
`
);
export const Button = styled.button`
  width: 30vw;
  height: 5vh;
  display: flex;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.accent};
  letter-spacing: 3px;
  font-family: "Fredoka One";
  color: ${(props) => props.theme.textSecondary};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.accentTransparent};
  }
`;

export const ReadingsContainer = styled.div<any>(
  ({ theme }) => `
display:flex;
justify-content:center;
align-items:start;
column-gap:20px;
width:80vw;
height:60%;
padding-bottom:30px;

`
);

export const PageDescriptor = styled.div(
  ({ theme }) => `
    color: ${theme.primary};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

 
  
`
);
export const ReadingsSelector = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.primary};
  width: 20%;
  max-height: 50%;
  :hover {
    cursor: pointer;
    scale: 1.4;
  }
  .title {
    text-align: center;
    font-size: 110%;
    font-weight: 900;
  }
  span {
    display: flex;
    text-align: center;
    font-size: 70%;
  }
  figure {
    width: 15vw;
    height: 15vh;

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

const blue = {
  700: "#0059B2",
};

const grey = {
  400: "#BFC7CF",
  800: "#2F3A45",
};

export const SwitchContainer = styled.div(
  ({ theme }) => `
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
  color:${theme.primary};
  
  padding-left: 10px;
  padding-right: 20px;
  box-sizing: border-box;
  
`
);
export const Root = styled("span")(
  ({ theme }) => `
 
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 100px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.primary};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: ${theme.accent};
    position: relative;
    transition: all 400ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: black;
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 80px;
      top: 3px;
      background-color:#fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${theme.accent}};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);
