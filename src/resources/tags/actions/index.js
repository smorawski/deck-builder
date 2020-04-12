import attack from './attack.svg';
import controlEnemy from './control-enemy.svg';
import controlSummon from './control-summon.svg';
import disarmTrap from './disarm-trap.svg';
import heal from './heal.svg';
import killEnemy from './kill-enemy.svg';
import loot from './loot.svg';
import move from './move.svg';
import pull from './pull.svg';
import push from './push.svg';
import summon from './summon.svg';
import trap from './trap.svg';

// actions
export const ACTIONS = {
  ATTACK: 'attack',
  CONTROL_ENEMY: 'control_enemy',
  CONTROL_SUMMON: 'control_summon',
  CREATE_TRAP: 'create_trap',
  DISARM_TRAP: 'disarm_trap',
  HEAL: 'heal',
  KILL_ENEMY: 'kill_enemy',
  LOOT: 'loot',
  MOVE: 'move',
  PULL: 'pull',
  PUSH: 'push',
  SUMMON: 'summon',
};

export const ACTIONS_IMAGES = {
  [ACTIONS.ATTACK]: attack,
  [ACTIONS.CONTROL_ENEMY]: controlEnemy,
  [ACTIONS.CONTROL_SUMMON]: controlSummon,
  [ACTIONS.CREATE_TRAP]: trap,
  [ACTIONS.DISARM_TRAP]: disarmTrap,
  [ACTIONS.HEAL]: heal,
  [ACTIONS.KILL_ENEMY]: killEnemy,
  [ACTIONS.LOOT]: loot,
  [ACTIONS.MOVE]: move,
  [ACTIONS.PULL]: pull,
  [ACTIONS.PUSH]: push,
  [ACTIONS.SUMMON]: summon,
};
