import styled from 'styled-components';
import QUERIES from '@styles/constant';
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
  .showOnMobile {
    display: none;
  }
  @media ${QUERIES.mobileAndLess} {
    .showOnMobile {
      display: block;

      margin: 0;
      padding: 1rem;
      background-color: ${({ theme }) => theme.secondaryColor};
    }
    .mainBlock {
      margin-top: 1rem;
      height: 60vh;
    }

    width: 100vw;
    height: 100%;
    margin: 10px;
  }
`;
