export type CardProps = {
  quote: string;
  author: string;
  place: string;
  cardImg: string;
  currentCard: number;
  handleCardClick: (val: number) => void;
  index: number;
  total: number;
};
