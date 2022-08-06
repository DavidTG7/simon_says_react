import styled, { css } from "styled-components";

export const SimonMain = styled.main``;

export const SimonButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 21rem;
  margin: 5rem auto;
  gap: 1rem;
`;

const colorSelector = (value) => {
  const styles = {
    blue: css`
      border-top-left-radius: 100%;
      background: ${({active}) => active? 'hsla(238, 100%, 70%, 1)' : 'hsla(238, 100%, 30%, 1)'};
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
    border-radius: 0.5rem;
    box-shadow: 3px 3px 5px grey;
    ${styles}
  `;
});
