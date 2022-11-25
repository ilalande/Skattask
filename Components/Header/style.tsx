import styled from 'styled-components';

export default styled.header`
  min-height: 80px;
  padding-top: 0.5rem;
  .containerGen {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    min-width: 120px;
  }

  button {
    background-color: transparent;
    font-size: 0.8rem;
    text-transform: uppercase;
    border: 1px solid #e6e9ed;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
  }
`;
