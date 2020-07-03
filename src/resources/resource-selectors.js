import _intersection from 'lodash/intersection';
import _identity from 'lodash/identity';
import TAGS from './tags';

export default class ResourceSelectors {
  static selectPartialAbilityTags(abilityPart) {
    const hasAttack = abilityPart.attacks && !!abilityPart.attacks.length;
    const hasMove = abilityPart.moves && !!abilityPart.moves.length;
    const topTags = abilityPart.tags || [];
    return [
      hasAttack && TAGS.ACTIONS.ATTACK,
      hasMove && TAGS.ACTIONS.MOVE,
      ...topTags,
    ].filter(_identity);
  }

  static selectAbilityTags(ability) {
    return this.countTags([
      ...ResourceSelectors.selectPartialAbilityTags(ability.top),
      ...ResourceSelectors.selectPartialAbilityTags(ability.bottom),
    ]);
  }

  static selectAbilitiesTags(abilities, tags = []) {
    const allAbilitiesTags = abilities.reduce((acc, ability) => {
      // ignore duplicated tags for single card
      const abilityTags = Object.keys(ResourceSelectors.selectAbilityTags(ability));
      return [...acc, ...abilityTags];
    }, []);

    const countedTags = this.countTags(allAbilitiesTags);
    if (tags.length <= 0) {
      return countedTags;
    }
    return Object.keys(tags).reduce(
      (acc, tag) => ({ ...acc, [tag]: countedTags[tag] || 0 }),
      {},
    );
  }

  static countTags(tagsArray) {
    return tagsArray.reduce((acc, abilityName) => {
      const currentValue = acc[abilityName] || 0;
      return { ...acc, [abilityName]: currentValue + 1 };
    }, {});
  }

  static filterAbilitiesByLevel(abilities, levels) {
    if (levels.length <= 0) {
      return abilities;
    }
    return abilities.filter((ability) => levels.indexOf(ability.level) >= 0);
  }

  static filterAbilitiesByTag(abilities, tags) {
    return abilities.filter((ability) => {
      const abilityTags = ResourceSelectors.selectAbilityTags(ability);
      return _intersection(Object.keys(abilityTags), tags).length >= tags.length;
    });
  }

  static filterAbilitiesBySearchTerm(abilities, search) {
    const searchTermReg = new RegExp(search.split(' ').join('').toLowerCase());
    return abilities.filter(({ name }) => searchTermReg.test(name.toLowerCase()));
  }

  static filterAbilities(abilities, { tags, levels, search }) {
    const abilitiesWithProperLevel = ResourceSelectors
      .filterAbilitiesByLevel(abilities, levels);
    const abilitiesWithTags = ResourceSelectors
      .filterAbilitiesByTag(abilitiesWithProperLevel, tags);
    return ResourceSelectors
      .filterAbilitiesBySearchTerm(abilitiesWithTags, search);
  }
}
