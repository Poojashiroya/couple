import { useState } from "react";
import Card from "../Card";
import {
  CardsContainer,
  Container,
  Content,
  Description,
  Title,
} from "./index.styles";
import { cardsData } from "./mock";

const CardsCarousel = () => {
  const [currentCard,setCurrentCard] = useState(0);
  const [cards, setCards] = useState(cardsData);

  const handleCardClick = (clickedIndex: number) => {
    setCurrentCard(clickedIndex);

    // Reorder the cards array to bring the clicked card to the front
    const reorderedCards = [
      ...cards.slice(clickedIndex),
      ...cards.slice(0, clickedIndex),
    ];

    // Update the state with the reordered cards
    setCards(reorderedCards);
  }

  return (
    <Container>
      <Content>
        <Title>What our peers say about us</Title>
        <Description>
          Authentic reviews as well as the experience our guides hold defines
          the success we had over these years of service
        </Description>
      </Content>
      <CardsContainer>
        {cards &&
          cards.map((card, index) => (
            <Card
             total={cardsData.length}
            index={index}
              currentCard={currentCard}
              handleCardClick={handleCardClick}
             key={`carousel-${index}`}
              author={card.author}
              quote={card.quote}
              place={card.place}
              cardImg={card.cardImg}
            />
          ))}
      </CardsContainer>
    </Container>
  );
};

export default CardsCarousel;
