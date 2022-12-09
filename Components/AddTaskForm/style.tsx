import styled from 'styled-components';

export default styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 5px;
  form {
    background-color: white;
    border-radius: 5px;
    padding: 10px 10px;

    border-bottom: 1px solid #e6e9ed;

    .newTask {
      width: 100%;
      background: transparent;
      border: none;
    }

    input {
      padding-top: 0.5rem;
    }
    input:active {
      background: transparent;
      border: none;
    }

    input::placeholder {
      color: ${({ theme }) => theme.fontColorLight};
      font-size: 1rem;
    }
  }
`;
