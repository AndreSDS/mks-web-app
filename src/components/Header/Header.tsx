import { HeaderContainer, LogoImg } from "./styles";
import logo from "../../assets/images/logo.png";
import { CartButton } from "../CartButton/CartButton";

export const Header = ({}) => {
  return (
    <HeaderContainer>
      <LogoImg alt="logo da loja" src={logo} />
      <CartButton />
    </HeaderContainer>
  );
};
