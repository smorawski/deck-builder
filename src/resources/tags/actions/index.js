import attack from './attack.svg';
import disarmTrap from './disarm-trap.svg';
import heal from './heal.svg';
import loot from './loot.svg';
import move from './move.svg';
import pull from './pull.svg';
import push from './push.svg';

// actions
export const ACTIONS = {
  ATTACK: 'attack',
  DISARM_TRAP: 'disarm_trap',
  HEAL: 'heal',
  LOOT: 'loot',
  MOVE: 'move',
  PULL: 'pull',
  PUSH: 'push',
};

export const ACTIONS_IMAGES = {
  [ACTIONS.ATTACK]: attack,
  [ACTIONS.DISARM_TRAP]: disarmTrap,
  [ACTIONS.HEAL]: heal,
  [ACTIONS.LOOT]: loot,
  [ACTIONS.MOVE]: move,
  [ACTIONS.PULL]: pull,
  [ACTIONS.PUSH]: push,
};
