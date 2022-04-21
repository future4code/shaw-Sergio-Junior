import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const Header = styled.div`
display: flex;
text-align: center;
justify-content: space-evenly;
align-items: center;
border-bottom: 2px solid #63636318;
.buttonsHeader{
  height: 30px;
  width: 30px;
  margin-left: 2rem;
  border: none;
  background-color: white;
  font-size: 20px;
  margin-right: 0;
  &:hover{
    cursor: pointer;
  }
}
h1 {
    margin-left: 5rem;
   color: purple;
  span{ 
    color: darkcyan;
  }
}
`
export const Footer = styled.footer`
margin-top: -2rem;
display: flex;
justify-content: center;
button{ 
  padding: 0.1rem 0.3rem;
  margin-right: 0.3rem;
}
`
export const MainContainerApp = styled.div`
  display: flex;
  flex-direction:column;
  width: 390px;
  height: 570px;
  justify-content: center;
  text-align:center;
  margin: 10vh auto;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  `
export const Body = styled.div`
    background-color: lightgray;
    display: flex; 
    flex-direction: column;
    min-width: 100%;
    min-height: 100vh;
  `


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
