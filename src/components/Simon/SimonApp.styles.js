import styled from "styled-components";

export const SimonMain = styled.main`

`;

export const SimonButtons = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 5rem;
  gap: 1rem;
`;

export const TopButtons = styled.div`
  display: flex;
  gap: 1rem;
`

export const BottomButtons = styled.div`
  display: flex;
  gap: 1rem;
`

export const BlueButton = styled.button`
  cursor: pointer;
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: .5rem;
  border-top-left-radius: 100%;
  background: blue;
  box-shadow: 3px 3px 5px grey;
`;

export const GreenButton = styled.button`
  cursor: pointer;
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: .5rem;
  border-top-right-radius: 100%;
  background-color: green;
  box-shadow: 3px 3px 5px grey;
`;

export const RedButton = styled.button`
  cursor: pointer;
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: .5rem;
  border-bottom-left-radius: 100%;
  background: red;
  box-shadow: 3px 3px 5px grey;
`;

export const YellowButton = styled.button`
  cursor: pointer;
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: .5rem;
  border-bottom-right-radius: 100%;
  background: yellow;
  box-shadow: 3px 3px 5px grey;
`;
