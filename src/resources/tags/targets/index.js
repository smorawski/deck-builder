import adjacentAlly from './adjacent-ally.svg';
import adjacentEnemy from './adjacent-enemy.svg';
import area from './area.svg';
import multiple from './multiple.svg';

export const TARGETS = {
  ADJACENT_ALLY: 'adjacentAlly',
  ADJACENT_ENEMY: 'adjacentEnemy',
  AREA: 'area',
  MULTIPLE: 'multiple',
};

export const TARGETS_IMAGES = {
  [TARGETS.ADJACENT_ALLY]: adjacentAlly,
  [TARGETS.ADJACENT_ENEMY]: adjacentEnemy,
  [TARGETS.AREA]: area,
  [TARGETS.MULTIPLE]: multiple,
};
