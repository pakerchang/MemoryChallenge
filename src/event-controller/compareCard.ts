export const compareCard: CompareCard = (firstCard, secondCard) =>
  firstCard.content === secondCard.content
    ? {
        firstCard: { ...firstCard, compareCard: true },
        secondCard: { ...firstCard, compareStatus: true },
      }
    : { firstCard, secondCard };
