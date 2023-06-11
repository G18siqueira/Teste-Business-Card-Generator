import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --gradient: linear-gradient(93.82deg, #6C5AE0 -1.6%, #806EFF 105.56%);

    --white: #fff;
    --black: #000;

    --gray-100: #F1F3F5;
    --gray-200: #E1E4E8;
    --gray-300: #CFD3D8;
    --gray-600: #97A1AC;
    --gray-700: #7E8A98;
    --gray-800: #636E7C;
    --gray-900: #212429;

    --purple-300: #D8D9FD;
    --purple-600: #6C5AE0;
    --purple-700: #4839A3;
    --purple-900: #100C27;

    --yellow-300: #F8DCA0;
    --yellow-600: #F4CA6D;
    --yellow-700: #F2BF4E;   
    
    --nunitoSans: 'Nunito Sans', sans-serif;
    --darkerGrotesque: 'Darker Grotesque', sans-serif;
    --redHatDisplay: 'Red Hat Display', sans-serif;
  }

  *{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body{
    overflow-x: hidden;
    -webkit-font-smoothing: 'antialiased',
  }

  body, input, button{
    font-family: var(--nunitoSans);
    font-weight: 400;
    line-height: 1.5;
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: var(--gradient);
    color: var(--white);
    min-height: calc(100vh - 140px);
    padding: 72px 0;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
`
