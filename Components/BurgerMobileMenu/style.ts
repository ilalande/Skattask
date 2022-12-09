import styled from 'styled-components';

export default styled.div`
  background-color: white;

  width: 100%;
  position: absolute;
  right: 0;
  top: 100px;
  z-index: 3;

  .WrapperTasks {
    padding: 0;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.mainColor};

    padding: 20px;
  }

  .WrapperTasksEnded {
    padding: 0;
    border-radius: 5px;
    background-color: rgba(101, 53, 202, 0.1);
    padding: 20px;
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
