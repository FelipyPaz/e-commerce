import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    margin: 0 0 15px 20px;
  }
`;


export const SpecificItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  select {
    border-radius: 7px;
    margin-right: 30px;
    height: 35px;
    padding: 7px;
    width: 120px;
  }

  input {
    border: 1px solid;
    border-radius: 7px;
    margin-right: 10px;
    height: 35px;
    padding: 7px;
  }
  button {
    width: 70px;
    background: none;
    border: 1px solid;
    border-radius: 7px;
    height: 35px;
    padding: 7px;
  }
`;

export const Img = styled.div`
  display: flex;
  margin-left: 20px;
  height: 600px;

  img {
    margin: 7px 0px;
    width: 98%;
  }
`;
export const Item = styled.div`
  margin-top: 20px;
  padding: 10px;
  h1 {
    margin: 7px 0px;
    font-size: 20px;
  }
  p {
    margin: 7px 0px;
  }
`;
export const Category = styled.div`
  display: flex;
  margin-left: 20px;
  max-width: 100%;
  overflow: auto;

  button {
    height: 50px;
    margin: 0px 5px;
  }
`;
export const All = styled.div`
  display: flex;
  border-bottom: 1px solid;
  flex-direction: column;

  height: 600px;
  overflow: auto;
`;
export const AllItems = styled.div`
 padding: 7px; 
margin: 10px 0;

h4{margin:10px 0}

`;