import { createGlobalStyle } from 'styled-components';
export const mainTheme = {
  body: '#fffff',
  bgColorLight1: '#f7f8f9',
  bgColorLight2: '#fafbfb',
  bgColorLight3: '#D5D1D4', //ligther : for "titre de la tache background"
  purpleLight: '#e2d9f5',
  mainColor: '#6535CA',
  secondaryColor: '#FCFC62',
  mainColorSelected: '#F7F8F9',
  fontColor: '#161616',
  fontColorMedium: '#a3a4a5', // pour "titre de la tache sélectionnée sur le main"
  fontColorLight: '#c0c1c0', // Pour les taches "attribuer à"
  colorButton: 'white',
  borderColorLight: '#e6e9ed',
};
export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.fontColor};
   font-family:Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
   height: 100vh;
   font-size:16px;
   max-width: 1600px;
   margin:auto;

}

input, textarea, button {font-family: inherit}


.central{display:flex}

//To manage messages for loading/ not connected...
.message {
    margin: 0 auto;
    max-width: 1000px;
    width: 50vw;
    padding: 3rem;
    background-color: white;
    box-shadow: 0px 3px 10px #a3a4a5;
    text-align: center;
    font-size: 1.3rem;
  }
`;
