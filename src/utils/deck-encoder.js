export const decodeDeck = (string) => {
  try {
    console.log(atob(string));
    const { classKey, deck } = JSON.parse(atob(string));
    return { classKey, deck };
  } catch (error) {
    console.error(`Unsuccessful import: ${error.stack}`);
    return null;
  }
};

export const encodeDeck = (classKey, deck) => {
  try {
    const string = JSON.stringify({ classKey, deck });
    return btoa(string);
  } catch (error) {
    console.error(`Unsuccessful export: ${error.stack}`);
    return null;
  }
};
