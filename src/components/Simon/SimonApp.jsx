import { BlueButton, BottomButtons, GreenButton, RedButton, SimonButtons, SimonMain, TopButtons, YellowButton } from "./SimonApp.styles";

export const SimonApp = () => {
  return (
    <SimonMain>
      <SimonButtons>
        <TopButtons>
          <BlueButton />
          <GreenButton />
        </TopButtons>
        <BottomButtons>
          <RedButton />
          <YellowButton />
        </BottomButtons>
      </SimonButtons>
    </SimonMain>
  );
}