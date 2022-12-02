import styled from 'styled-components';
import QUERIES from '../../styles/constant';

export default styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    background-color: ${({ theme }) => theme.mainColor};
    color: white;
    font-size: 1.4rem;
    box-shadow: inset 0px -1px 0px #e4e8eb;
    padding: 1rem 2.2rem;
    margin: 10px 20px;
    border-radius: 5px;
    width: 70%;
  }

  .endManage {
    margin: 0;
    padding: 1rem;
    border-radius: 0.3rem;

    display: flex;
    span {
      padding: 0.2rem;
      text-transform: uppercase;
      font-size: 0.7rem;
      color: ${({ theme }) => theme.fontColorLight};
      padding-left: 0.3rem;
    }
  }

  .endButton {
    background-color: white;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainColor};
    padding: 0.5rem;
    margin: 0.5rem;
    margin-right: 3rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    span {
      color: ${({ theme }) => theme.fontColorLight};
    }
  }
  .endedButton {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.body};
    margin-right: 3rem;
    span {
      color: white;
    }
  }
  .endButtonMobile {
    display: none;
  }
  .endedButtonMobile {
    display: none;
  }

  .container {
    margin-left: 2.5rem;
    margin-right: 3rem;
  }
  h2 {
    color: ${({ theme }) => theme.fontColorMedium};
    font-size: 0, 8rem;
    line-height: 20px;
  }
  .buttonZone {
    display: flex;
    margin-bottom: 1.5rem;
  }

  .description {
    margin: auto;
    background-color: ${({ theme }) => theme.colorButton};
    padding: 1rem;

    border: 1px solid;
    border-color: ${({ theme }) => theme.purpleLight};

    border-bottom: 0;
    h2 {
      color: ${({ theme }) => theme.fontColor};
      margin: 0.5rem;
      margin-right: 0;
    }
    .titleDescr {
      display: flex;
      align-items: center;
      padding-bottom: 0.8rem;
    }
  }

  input {
    width: 98%;
    padding: 1rem;
    padding-bottom: 7rem;
    margin-left: 1rem;
    border: 1px solid #e2e4e7;
  }

  .saveButton {
    display: flex;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.colorButton};
    border: 1px solid #e2e4e7;

    span {
      padding: 0.5rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colorButton};
      font-size: 0.7rem;
    }
    button {
      margin: 1rem;
      padding: 0.5rem;
      border: 0;
      background-color: ${({ theme }) => theme.mainColor};
      border-radius: 0.3rem;
    }
  }
  .hideSaveButton {
    display: none;
  }

  @media ${QUERIES.tablettAndLess} {
    .container {
      margin: 0;
      margin-left: 10px;
    }
    .description {
      width: 100%;
    }
    input {
      margin-left: 5px;
    }
    .endButton {
      display: none;
    }
    .endedButton {
      display: none;
    }
    .endButtonMobile {
      display: block;
      background-color: white;
      width: 9rem;
      border: 1px solid red;
      border-color: ${({ theme }) => theme.mainColor};
      padding: 0.5rem;
      margin: 0.5rem;
      margin-right: 3rem;
      display: flex;
      align-items: center;
      border-radius: 5px;
      span {
        font-size: 0.7rem;
      }
    }
    .endedButtonMobile {
      display: block;
      background-color: ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.body};
      padding: 0.5rem;
      margin: 0.5rem;
      span {
        color: white;
        font-size: 0.8rem;
      }
    }
    .wrapperMobile {
      display: flex;
      justify-content: space-between;

      background-color: white;
    }
    .saveButton {
      background-color: white;
      border: 0;
    }
  }
`;
