import styled from 'styled-components';
import QUERIES from '../../styles/constant';

export default styled.header`
  min-height: 80px;
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;

  .containerGen {
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;
  }

  .title {
    min-width: 120px;
  }

  .button {
    display: block;

    width: max-content;
    margin: auto;
    margin-top: 10px;
  }

  .burgerMenu {
    display: none;
  }

  button {
    background-color: transparent;
    font-size: 0.8rem;
    text-transform: uppercase;
    border: 1px solid #e6e9ed;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
  }
  @media ${QUERIES.mobileAndLess} {
    width: 100%;
    background-color: ${({ theme }) => theme.secondaryColor};

    .containerGen {
      width: 100%;
      display: block;
    }
    .img-container {
      display: flex;
      justify-content: center;
      width: fit-content;
      margin: auto;
    }
    .burgerMenu {
      display: block;
      width: 100%;
      z-index: 5;
    }

    .burgerButton {
      padding: 0;
      margin: 0;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
`;
