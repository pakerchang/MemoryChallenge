export const compareCard: CompareCard = (
  firstCard: GameDataType,
  secondCard: GameDataType
): object[] => {
  let compareResult: object[] = [];
  if (Object.keys(firstCard).length !== 0 && Object.keys(secondCard).length !== 0) {
    if (compareResult.length > 0) compareResult.length = 0;
    if (firstCard.content === secondCard.content) {
      compareResult = [
        ...compareResult,
        { ...firstCard, isCompare: true },
        { ...secondCard, isCompare: true },
      ];
    }
  }
  return compareResult;
};
