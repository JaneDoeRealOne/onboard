import styled from "styled-components";
 
export default styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  height: 400px;
  width: 100%;
  margin: 15px;
  border-radius: 5px;
  border: 2px solid grey;

  &:hover {
    box-shadow: 3px 3px 10px grey;
    background-color: rgba(240, 236, 234, 0.973);
    transition: 0.2s;
  }
`;
