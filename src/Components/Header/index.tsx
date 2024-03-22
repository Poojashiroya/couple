import Logo from "../Logo";
import { TopHeader, HeaderContainer, HeaderContent } from "./index.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TopHeader>
        <Logo />
      </TopHeader>
      <HeaderContent />
    </HeaderContainer>
  );
};

export default Header;
