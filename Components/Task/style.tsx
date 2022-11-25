import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;

  p {
    font-size: 0.9rem;
    padding-top: 0.4rem;
    font-weight: 300;
  }

  .date {
    color: ${({ theme }) => theme.fontColorLight};
    font-size: 0.8rem;

    margin-right: 1rem;
  }

  .mainInfo {
    padding-left: 1rem;
  }
  .taskTextEnded {
    text-decoration: line-through;
    font-weight: 400;
  }
  .taskText,
  .taskTextEnded {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .taskText {
    h4 {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
