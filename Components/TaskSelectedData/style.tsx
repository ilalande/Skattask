import styled from 'styled-components';

export default styled.div`
  width: 100%;

  .title {
    background-color: ${({ theme }) => theme.bgColorLight2};
    box-shadow: inset 0px -1px 0px #e4e8eb;
    padding: 0.9rem 2.2rem;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: ${({ theme }) => theme.fontColorMedium};
    font-size: 1.4rem;
  }

  .endManage {
    border: none;
    margin: 0;
    padding: 0.7rem;
    border-radius: 0.3rem;
    margin-right: 0.5rem;
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
    background-color: ${({ theme }) => theme.bgColorLight2};
    border: 1px solid #e2e4e7;

    padding: 0.2rem 0.5rem;
    display: flex;
    align-items: center;
    span {
      color: ${({ theme }) => theme.fontColorLight};
    }
  }
  .endedButton {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.body};
    border: 2px solid red;
    span {
      color: white;
    }
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

    border: 1px solid #e2e4e7;
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
`;
