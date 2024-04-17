import Images from "../../assets/Images";
import { CardProps } from "./index.d";
import {
  CardAuthor,
  CardContainer,
  CardContent,
  CardImg,
  CardQuote,
  Container,
  Date,
} from "./index.styles";

const Card = ({
  quote = "A really random quote found on the internet. Yes i’m not really creative. And enclosing it in double quotes cause aesthetics",
  author="~ Zalak Korat",
  place="ACT, Apr 2024",
  cardImg = Images.Img4,
  currentCard = 0,
  handleCardClick,
  index=0,
  total=0,
}: CardProps) => {
  return (
    <Container total={total} index={index} currentCard={currentCard} onClick={() => handleCardClick(1)}>
      <CardContainer>
        <CardContent>
          <CardQuote>{quote}</CardQuote>
          <CardAuthor>{author}</CardAuthor>
          <Date>{place}</Date>
        </CardContent>
        <CardImg src={cardImg} alt="img" />
      </CardContainer>
    </Container>
  );
};

export default Card;
