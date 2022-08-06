import { HeaderMain, HeaderTitle } from "./Header.styles";

export const Header = (blue) => {
  return(
    <HeaderMain blue={blue}>
      <HeaderTitle >SIMON SAYS</HeaderTitle>
    </HeaderMain>
  );
}
