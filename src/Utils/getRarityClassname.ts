export const getRarityClassName = (rarity: number) => {
  switch (rarity) {
    case 1:
      return "legendary";
    case 2:
      return "epic";
    case 3:
      return "rare";
    case 4:
      return "uncommon";
    default:
      return "common";
  }
};
