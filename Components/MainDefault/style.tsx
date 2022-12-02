import styled from 'styled-components';
import QUERIES from '../../styles/constant';

export default styled.div`
  h1 {
    color: ${({ theme }) => theme.fontColorMedium};
    font-size: 1.4rem;
    padding: 1rem;
    padding-top: 2rem;
  }
`;
