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
  Img,
  Menu,
  HeaderDetails,
  Title,
  Description,
  SubDescription,
  MobileHeader,
} from "./index.styles";
import { Instagram } from "@emotion-icons/bootstrap";
import { Close, Youtube } from "@emotion-icons/remix-line";
import Images from "../../assets/Images";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setMobileMenu] = useState<boolean>(false)

  return (
    <HeaderContainer>
      <TopHeader>
        {!showMobileMenu && <Menu size={24} fill={"#000"} onClick={() => setMobileMenu(true)} />}
        {showMobileMenu && <Close size={24} fill={"#000"} onClick={() => setMobileMenu(false)}/>}
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
      {showMobileMenu && <MobileHeader >
      <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
      </MobileHeader>}
      <HeaderContent>
        <HeaderDetails>
          <Title>Pooja & Zalak</Title>
          <Description>Cultivating Deeper Connections</Description>
          <SubDescription>
            Explore the boundless adventure of partnership, where every moment
            is an opportunity to deepen connection, foster understanding, and
            embrace the magic of love.
          </SubDescription>
        </HeaderDetails>
        <Img src={Images.Img8} alt="background-img" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
