import styled from 'styled-components';

export default styled.nav`
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
`;
