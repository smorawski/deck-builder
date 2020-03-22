import _pick from 'lodash/pick';

import { CLASSES_OBJECT } from './classes';
import TAGS, { TAGS_IMAGES } from './tags';
import { LEVELS } from './other';

const classNames = Object.values(TAGS.CLASSES);

const abilities = classNames.reduce(
  (acc, className) => {
    const classObject = CLASSES_OBJECT[className];
    if (!classObject || !classObject.abilities) {
      return acc;
    }
    return ({ ...acc, ...(classObject.abilities) });
  },
  {},
);

class ResourceProvider {
  static getAbilityLevels() {
    return Object.values(LEVELS);
  }

  static getAllClassNames() {
    return classNames;
  }

  static getClassHandSize(classKey) {
    return CLASSES_OBJECT[classKey].handSize;
  }

  static getAllClasses() {
    return Object.values(CLASSES_OBJECT).map(({ name, icon }) => ({ name, image: icon }));
  }

  static getClassAbilities(className) {
    return CLASSES_OBJECT[className] ? Object.values(CLASSES_OBJECT[className].abilities) : [];
  }

  static getAllAbilities() {
    return abilities;
  }

  static getAbility(abilityName) {
    return abilities[abilityName];
  }

  static getAbilities(abilityNames) {
    return abilityNames.map((abilityName) => abilities[abilityName]);
  }

  static getAllTagsValues() {
    return Object.keys(TAGS_IMAGES);
  }

  static getImagesForTags(tags) {
    return _pick(TAGS_IMAGES, tags);
  }
}
export default ResourceProvider;
