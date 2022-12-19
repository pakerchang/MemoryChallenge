interface GameDataType {
  content: string;
  isCompare: boolean;
  index: number;
}

interface GenerateData {
  (rows: number, source: string[]): GameDataType[];
}

interface CompareCard {
  (firstCard: GameDataType, secondCard: GameDataType): object;
}

interface StateType {
  data: object[];
}

interface StateListener {
  (state: StateType, firstCard: GameDataType, secondCard: GameDataType): object[];
}
