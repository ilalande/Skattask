import styled from 'styled-components';
import QUERIES from '../../styles/constant';

export default styled.div`
  background-color: ${({ theme }) => theme.bgColorLight1};
  padding: 0rem;
  margin: 0;

  .central {
    min-height: 95vh;
    display: flex;
    align-items: center;
  }
  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 50vw;
    padding: 1rem 0;
    background-color: white;
    box-shadow: 0px 3px 10px #a3a4a5;
    text-align: right;
  }

  .section {
    text-align: center;
    margin-top: 4rem;
  }

  h1 {
    color: ${({ theme }) => theme.fontColorMedium};
    font-size: 3rem;
    text-transform: uppercase;
  }
  p {
    margin: 1rem 3rem;
    font-size: 1.2rem;
    text-align: left;
    line-height: 2rem;
  }

  @media ${QUERIES.mobileAndLess} {
    .container {
      box-shadow: none;
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
`;
