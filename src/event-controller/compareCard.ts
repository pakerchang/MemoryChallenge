interface CompareFnType {
  (Cards: GameDataType[], pairCard: GameDataType[]): GameDataType[];
}

export const compareCard: CompareFnType = (total, pairCard): any => {
  const firstCard = total.indexOf(pairCard[0]);
  const secondCard = total.indexOf(pairCard[1]);
  if (pairCard[0].content === pairCard[1].content) {
    total[firstCard] = { ...total[firstCard], isCompare: true };
    total[secondCard] = { ...total[secondCard], isCompare: true };
  } else {
    setTimeout(() => {
      total[firstCard] = { ...total[firstCard], isClick: false };
      total[secondCard] = { ...total[secondCard], isClick: false };
    }, 200);
  }
  return total;
};
