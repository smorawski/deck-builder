export default class ResourceSelectors {
  static selectAbilityTags(ability) {
    const topTags = ability.top.tags || [];
    const bottomTags = ability.bottom.tags || [];

    return this.countTags([...topTags, ...bottomTags]);
  }

  static selectAbilitiesTags(abilities) {
    const allTags = abilities.reduce((acc, ability) => {
      // ignore duplicated tags for single card
      const abilityTags = Object.keys(ResourceSelectors.selectAbilityTags(ability));
      return [...acc, ...abilityTags];
    }, []);

    return this.countTags(allTags);
  }

  static countTags(tagsArray) {
    return tagsArray.reduce((acc, abilityName) => {
      const currentValue = acc[abilityName] || 0;
      return { ...acc, [abilityName]: currentValue + 1 };
    }, {});
  }
}
