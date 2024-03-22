import Icons from "../../assets/Icons";

//css
import { Img, LogoLink } from "./index.styles";

const Logo = () => {
  return (
    <LogoLink to="/">
      <Img src={Icons.CoupleLogo} alt="logo" />
    </LogoLink>
  );
};

export default Logo;
