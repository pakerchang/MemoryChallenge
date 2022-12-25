// Event listener need store GenerateData data, and to action change state with
// compareCard fn return is true or false, then
// Setup 2 state to store origin state and action state?, I don't think so, bcz we has compare status to show up match status

import { compareCard } from "./compareCard";

export const stateListener: StateListener = (state, firstCard, secondCard) => {
  const renderState = state;
  const compareResult = compareCard(firstCard, secondCard, renderState);

  return [];
};
