import flow from 'lodash/fp/flow';
import _groupByFp from 'lodash/fp/groupBy';
import _sortByFp from 'lodash/fp/sortBy';
import _reduceFp from 'lodash/fp/reduce';
import _filterFp from 'lodash/fp/filter';
import _mapFp from 'lodash/fp/map';
import _identity from 'lodash/identity';
import _parseInt from 'lodash/parseInt';

import { LEVELS } from '../../resources/other';

const INITIAL_LEVELS = [LEVELS[1], LEVELS.X];

export default (levels) => flow(
  _filterFp((level) => !INITIAL_LEVELS.includes(level)),
  _mapFp(_parseInt),
  _groupByFp(_identity),
  _sortByFp(([value]) => value),
  _reduceFp((maxLevel, [level, ...repeatedLevels]) => {
    // every repetition of level adds to max level
    if (maxLevel >= level) {
      return maxLevel + 1 + repeatedLevels.length;
    }
    return level + repeatedLevels.length;
  }, 1),
)(levels);
