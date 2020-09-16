export const TABS = [
  {
    id: 'enterCode',
    name: 'Enter Code',
  }, {
    id: 'notebook',
    name: 'Notebook',
  }
];

export const SUSPECTS = [
  'Kishkumen',
  'Gadianton',
  'King Noah',
  'Nehor',
  'Amalickiah',
  'Ammoron',
  'Zerahemnah',
  'Giddianhi',
];

export const WEAPONS = [
  'Sword of Laban',
  'Sling',
  'Bow and Arrow',
  'Javelin',
  'Atlatl',
  'Poison',
  'Knife',
  'Fire',
];

export const LOCATIONS = [
  'Zarahemla',
  'Ammonihah',
  'Jerusalem',
  'Land of Desolation',
  'Land of Ishmael',
  'Mount Antipas',
  'City of Laman',
  'The Wilderness',
];

export const FREE_CLUES = [
  'Kishkumen',
  'Knife',
  'Land of Desolation',
];

export const FREE_CODE = '1a1a1';

// Must be lowercase
export const CODES = [
  FREE_CODE,
  'aaaaa',
  '11111',
  'a1a1a',
];

export const CLUES = {
  [FREE_CODE]: {
    person: 'Kishkumen',
    weapon: 'Knife',
    place: 'Land of Desolation',
  },
  'aaaaa': {
    person: 'Gadianton',
    weapon: 'Sword of Laban',
    place: 'Zarahemla',
  },
  '11111': {
    person: 'King Noah',
    weapon: 'Sling',
    place: 'Ammonihah',
  },
  'a1a1a': {
    person: 'Nehor',
    weapon: 'Bow and Arrow',
    place: 'Jerusalem',
  },
}