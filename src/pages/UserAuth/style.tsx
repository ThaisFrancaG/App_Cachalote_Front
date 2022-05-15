import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  submitError?: boolean;
  submitSuccess?: boolean;
}
export const MainAuth = styled.main(
  ({ theme }) => `
background-color: ${theme.primary};
color:${theme.textPrimary};
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`
);

export const Banner = styled.aside(
  ({ theme }) => `
position:fixed;

left:-20vw;
min-width:50vw;
height: 200vh;
background-color: ${theme.secondary};
// border-top-right-radius:50%;
// border-bottom-right-radius:70%;
border-radius:50%;

`
);

export const BannerLogin = styled.aside(
  ({ theme }) => `
position:fixed;
right:-20vw;
min-width:50vw;
height: 200vh;
background-color: ${theme.secondary};
// border-top-right-radius:50%;
// border-bottom-right-radius:70%;
border-radius:50%;

`
);

export const Title = styled.span(
  ({ theme }) => `
  color: ${theme.textTitle};
  font-family:"Fredoka One";
  font-size:50px;
  letter-spacing: 5px;
  margin-bottom:60px;
  // text-shadow: 0 2px 0 white;
`
);

export const Form = styled.form(
  ({ theme }) => `
display:flex;
flex-direction:column;
align-items: center;
width:70vw;
padding-left:30vw;
row-gap:20px;
color:${theme.textPrimary};

input{
  min-height:60px;
  width:85%;
  background-color:${theme.input};
  border:none;
  border-radius:20px;
  padding: 0 10px;
  color:${theme.textPrimary};
  font-family:"Nunito";
  letter-spacing: 1px;
  font-size:40px;


}
`
);

export const FormLogin = styled.form(
  ({ theme }) => `
display:flex;
flex-direction:column;
align-items: center;
width:70vw;
padding-right:30vw;
padding-left:20px;
row-gap:20px;
color:${theme.textPrimary};

input{
  min-height:60px;
  width:85%;
  background-color:${theme.input};
  border:none;
  border-radius:20px;
  padding: 0 10px;
  color:${theme.textPrimary};
  font-family:"Nunito";
  letter-spacing: 1px;
  font-size:40px;


}
`
);

export const Button = styled.button(
  ({ theme }) => `
width:200px;
height:50px;
display:flex;
border-radius:20px;
border:none;
font-size:30px;
justify-content:center;
align-items:center;
background-color:${theme.accent};
letter-spacing: 3px;
font-family:"Fredoka One";
color:${theme.textSecondary};

::hover{
  pointer:click;}
`
);

export const Alert = styled.div<Props>`
  display: ${(props) => (props.submitError ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid #d82841;
  border-radius: 5px;
  padding: 2px 5px 2px 5px;
  box-sizing: border-box;
  font-family: "Nunito";
  letter-spacing: 1px;
  span {
    margin-left: 10px;
  }
`;

export const Success = styled.div<Props>`
  display: ${(props) => (props.submitSuccess ? "flex" : "none")};
`;

export const Navigation = styled(Link)(
  ({ theme }) => `
color:${theme.textTitle};
font-size:20px;
letter-spacing: 3px;
font-family:"Fredoka One";
text-decoration:none;
margin-top: 30px;

::hover{
  pointer:click;
  text-decoration-line: underline;
}
`
);
