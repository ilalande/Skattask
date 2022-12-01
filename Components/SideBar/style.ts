import styled from 'styled-components';

export default styled.nav`
  width: 25vw;
  min-width: 380px;
  margin-left: 20px;
  > * {
    min-height: 60px;
    width: 100%;
    margin: 0;
    padding: 1rem;
  }

  .WrapperTasks {
    padding: 0;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.mainColor};

    margin-top: 10px;
    padding: 20px;
  }

  .WrapperTasksEnded {
    padding: 0;
    border-radius: 5px;

    background-color: rgba(101, 53, 202, 0.1);
    margin-top: 10px;
    padding: 20px;
  }

  form {
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

  .taskList,
  .selectedTask {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;

    .taskTextEnded {
      text-decoration: line-through;
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    padding: 1rem;
    padding-right: 0;
    margin: 10px 0 10px;

    background-color: ${({ theme }) => theme.bgColorLight1};
  }
  .selectedTask {
    background-color: ${({ theme }) => theme.purpleLight};
    border-left: 5px solid black;
  }

  h2 {
    color: ${({ theme }) => theme.mainColorSelected};
    background-color: ${({ theme }) => theme.mainColor};
    font-size: 1rem;
    line-height: 28px;
    font-weight: 800;
    padding-left: 2rem;
  }
  .titleEnded {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;

    padding: 0.5rem 0 0 1.5rem;
    h3 {
      color: ${({ theme }) => theme.fontColor};
      font-size: 1.1rem;
      font-weight: 800;
    }
    .counter {
      padding-right: 0.8rem;
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;
