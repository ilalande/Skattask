import styled from 'styled-components';

export default styled.main`
  width: 78vw;
  padding: 0rem;
  margin: 0 30px;
  border: 1px solid red;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.bgColorLight1};
  > * {
    padding: 0;
  }
`;
