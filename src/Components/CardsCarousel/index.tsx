import Card from "../Card";
import { CardsContainer, Container, Content } from "./index.styles";

const CardsCarousel = () => {
 return (
    <Container>
        <Content></Content>
    <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
    </CardsContainer>
    </Container>
 )
}

export default CardsCarousel;