import Images from "../../assets/Images";
import {CardAuthor, CardContainer, CardContent, CardImg, CardQuote, Date} from "./index.styles";

const Card = () => {
 return (
    <CardContainer>
     <CardContent>
      <CardQuote>A really random quote found on the internet. Yes i’m not really creative. And enclosing it in double quotes cause aesthetics</CardQuote>
      <CardAuthor>~ Zalak C Korat</CardAuthor>
      <Date>ACT, Apr 2024</Date>
     </CardContent>
     <CardImg src={Images.Img4} alt="img" />
    </CardContainer>
 )
}

export default Card;