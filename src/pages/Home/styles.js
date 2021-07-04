import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  padding: 0 20%;

  .titleContainer {
    margin: 20px auto;
  }
`;

export const Card = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    width: 100%;
    background: #FFF;
    border-radius: 5px;
    height: 115px;
    margin-top: 16px;
    border: 0;
`;