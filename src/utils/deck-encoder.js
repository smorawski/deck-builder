export const decodeDeck = (string) => {
  try {
    const deck = JSON.parse(atob(string));
    return deck;
  } catch (error) {
    console.error(`Unsuccessful import: ${error.stack}`);
    return null;
  }
};

export const encodeDeck = (deck) => {
  try {
    const string = JSON.stringify(deck);
    return btoa(string);
  } catch (error) {
    console.error(`Unsuccessful export: ${error.stack}`);
    return null;
  }
};
