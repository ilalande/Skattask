import styled from 'styled-components';

export default styled.div`
background-color: ${({ theme }) => theme.secondaryColor}; 
border-radius:5px;
form {
  background-color: white; 
  border-radius:5px;
padding:10px 10px;
} 

.give {
    background-color: ${({ theme }) => theme.colorButton};
    margin: 1rem 1rem 0 0;

    padding-left: 0.5rem;
    box-shadow: 0px 3px 10px #a3a4a5;
    border-radius: 2rem;
    border: 0;
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
    text-size-adjust: auto;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    visibility: hidden;
    height: 0;
    position: fixed;
  }

  .calendar {
    border: 2px solid #e2e4e7;
    color: ${({ theme }) => theme.fontColorMedium};
  }

  .shown {
    visibility: visible;
    position: relative;
    top: 0.4rem;
    left: 1.1rem;
    display: block;
    z-index: 1000;

    li {
      border: 2px solid #e2e4e7;
      background-color: white;
    }
    li:hover {
      background-color: ${({ theme }) => theme.mainColor};
      color: white;
    }
  }

  .hidden {
    display: none;
  }

  span,
  li {
    padding: 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.fontColorMedium};
    font-size: 0.8rem;
  }
`;
