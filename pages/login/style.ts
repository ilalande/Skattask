import styled from 'styled-components';
import QUERIES from '../../styles/constant';

export default styled.div`
  background-color: ${({ theme }) => theme.bgColorLight1};
  padding: 0rem;
  margin: 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 50vw;
    padding: 1rem 0;
    background-color: white;
    box-shadow: 0px 3px 10px #a3a4a5;
    text-align: right;
  }

  .login-section {
    text-align: center;
    margin-top: 4rem;
  }

  h1 {
    color: ${({ theme }) => theme.fontColorMedium};
    font-size: 3rem;
    text-transform: uppercase;
  }
  button {
    margin: 3rem auto;
    background-color: ${({ theme }) => theme.mainColor};
    padding: 1rem 3rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
    border: 0;
    border-radius: 0.3rem;
    display: block;
  }

  @media ${QUERIES.mobileAndLess} {
    .container {
      box-shadow: none;
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
`;
