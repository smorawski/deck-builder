export const classesKeysSelector = (state) => Object.keys(state.classes);

export const classSelector = (state, classKey) => state.classes[classKey];
