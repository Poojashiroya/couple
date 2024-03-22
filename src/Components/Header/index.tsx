import {
  FacebookOutline,
  TwitterOutline,
} from "@emotion-icons/evaicons-outline";
import Logo from "../Logo";
import {
  TopHeader,
  HeaderContainer,
  HeaderContent,
  Pages,
  NavLink,
  SocialIcons,
} from "./index.styles";
import { Instagram } from "@emotion-icons/bootstrap";
import { Youtube } from "@emotion-icons/remix-line";

const Header = () => {
  return (
    <HeaderContainer>
      <TopHeader>
        <Logo />
        <Pages>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Pages>
        <SocialIcons>
          <FacebookOutline size={24} />
          <Instagram size={20} />
          <TwitterOutline size={24} />
          <Youtube size={24} />
        </SocialIcons>
      </TopHeader>
      <HeaderContent />
    </HeaderContainer>
  );
};

export default Header;
