import styled from 'styled-components';

export default styled.main`
  width: 78vw;
  padding: 0rem;
  margin: 0;
  background-color: ${({ theme }) => theme.bgColorLight1};
  > * {
    padding: 0;
  }
`;
