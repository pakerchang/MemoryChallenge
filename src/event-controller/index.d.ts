interface GameDataType {
  content?: string;
  isCompare?: boolean;
  isClick?: boolean;
  index?: number;
}

interface GenerateData {
  (rows: number, source: string[], data?: object[]): GameDataType[];
}

interface CompareData {
  data: object[];
}

interface CompareCard {
  (firstCard: GameDataType, secondCard: GameDataType): object[];
}

interface StateType {
  data: object[];
}

interface StateListener {
  (state: StateType, firstCard: GameDataType, secondCard: GameDataType): object[];
}
