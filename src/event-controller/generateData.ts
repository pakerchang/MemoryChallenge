// Resource example = ["A", "B", "C", "D"];
interface GenerateDataType {
  (rows: number, source: string[], data?: object[]): GameDataType[];
}
export const generateData: GenerateDataType = (row, resource) => {
  const shuffleCard = (arr: GameDataType[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const generateSource = shuffleCard(
    new Array(row)
      .fill(resource)
      .flat()
      .map((item, index) => ({
        content: item,
        isCompare: false,
        isClick: false,
        index: index,
      }))
  );
  return generateSource;
};
