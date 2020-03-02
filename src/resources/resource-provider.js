// I'll deliver all data, just me, no one else!
import scoundrel from './scoundrel';

const classes = {
  scoundrel,
};

const classNames = Object.values(classes).map(({ name }) => name);

const abilities = classNames.reduce(
  (acc, className) => ({ ...acc, ...classes[className].abilities }),
  {},
);

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
}
export default ResourceProvider;
