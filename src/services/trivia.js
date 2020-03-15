const getAmountByDifficulty = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 10;
    case 'medium':
      return 15;
    case 'hard':
      return 20;
    default:
      return 10;
  }
};

export {getAmountByDifficulty}