import styled, { css } from "styled-components";

export const SimonMain = styled.main``;

export const SimonButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 21rem;
  height: max-content;
  margin: 5rem auto;
  /* gap: 1rem; */
  padding: 1.2rem;
  background: black;
  border-radius: 100%;
  /* border: 1px solid black; */
`;

export const Level = styled.h2`
  color: blue;
  font-size: 1.5rem;
`

const colorSelector = (value) => {
  const styles = {
    blue: css`
      border-top-left-radius: 100%;
      background: ${({active}) => active? 'hsla(238, 100%, 70%, 1)' : 'hsla(238, 100%, 30%, 1)'};
      margin-bottom: 1rem;
      &:active {
        background: hsla(238, 100%, 70%, 1);
        box-shadow: 1px 1px 2px grey;
      }
    `,
    green: css`
      border-top-right-radius: 100%;
      background: ${({active}) => active? 'hsla(104, 100%, 70%, 1)' : 'hsla(104, 100%, 25%, 1)'};
      &:active {
        background: hsla(104, 100%, 70%, 1);
        box-shadow: 1px 1px 2px grey;
      }
    `,
    red: css`
      border-bottom-left-radius: 100%;
      background: ${({active}) => active? 'hsla(360, 100%, 80%, 1)' : 'hsla(360, 100%, 43%, 1)'};
      &:active {
        background: hsla(360, 100%, 80%, 1);
        box-shadow: 1px 1px 2px grey;
      }
    `,
    yellow: css`
      border-bottom-right-radius: 100%;
      background: ${({active}) => active? 'hsla(45, 100%, 80%, 1)' : 'hsla(45, 80%, 50%, 1)'};
      &:active {
        background: hsla(45, 100%, 80%, 1);
        box-shadow: 1px 1px 2px grey;
      }
    `,
  };
  return styles[value];
};

export const Button = styled.button(({ value }) => {
  const styles = colorSelector(value);

  return css`
    cursor: pointer;
    width: 10rem;
    height: 10rem;
    border: none;
    border-radius: 0.2rem;
    ${styles}
  `;
});

export const CenterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CenterButton = styled.button`
  position: absolute;
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  border: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto -17.6rem;
  font-weight: 600;
  font-size: ${({levelTag}) => levelTag ? '3rem' : '1.3rem'};
`;
