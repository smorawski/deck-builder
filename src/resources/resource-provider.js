// I'll deliver all data, just me, no one else!
import scoundrel from './classes/scoundrel';

import tags from './other/tags';

import GloomhavenImage from './other/gloomhaven.png';

const classes = {
  scoundrel,
};

const classNames = Object.values(classes).map(({ name }) => name);

const abilities = classNames.reduce(
  (acc, className) => ({ ...acc, ...(classes[className].abilities) }),
  {},
);

console.log(abilities);

class ResourceProvider {
  static getAllClassNames() {
    return classNames;
  }

  static getAllClasses() {
    return Object.values(classes).map(({ name, image }) => ({ name, image }));
  }

  static getClassAbilities(className) {
    return classes[className] ? Object.values(classes[className].abilities) : [];
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
    return Object.values(tags).reduce((acc, curr) => [...acc, ...(Object.values(curr))], []);
  }

  static getAllTags() {
    return tags;
  }

  static getGloomhavenLogo() {
    return GloomhavenImage;
  }
}
export default ResourceProvider;
