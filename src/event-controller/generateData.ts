// resource = ["A", "B", "C", "D"];
export const generateData: GenerateData = (row, resource) => {
  const shuffleCard = (arr: object[]) => {
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
      .map((item) => ({
        content: item,
        isCompare: false,
      }))
  );
  return generateSource;
};
