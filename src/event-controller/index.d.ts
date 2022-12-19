interface GameDataType {
  content: string;
  compareStatus: boolean;
}

interface GenerateData {
  (rows: number, source: any[]): object[];
}

interface CompareCard {
  (firstCard: GameDataType, secondCard: GameDataType): boolean;
}