'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initalState = getInitialState();
var id = 0;

function reduce() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initalState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'PLAYER-DRAW':
      var index;

      index = random(state.playerDeck.length - 1);
      return _extends({}, state, {
        playerHand: [].concat(_toConsumableArray(state.playerHand), [{
          text: state.playerDeck[index].text,
          onPlay: state.playerDeck[index].onPlay,
          id: id++
        }]),
        playerDeck: discardCard(state.playerDeck, index)
      });
    case 'LOCATION-DRAW':
      var index;

      index = random(state.locationDeck.length - 1);
      return _extends({}, state, {
        locationCards: [].concat(_toConsumableArray(state.locationCards), [{ text: state.locationDeck[index], id: id++ }]),
        locationDeck: discardCard(state.locationDeck, index)
      });
    case 'DISCARD-LOCATION-CARD':
      return _extends({}, state, {
        locationCards: discardCard(state.locationCards, null, action.id)
      });
    case 'DISCARD-PLAYER-CARD':
      return _extends({}, state, {
        playerHand: discardCard(state.playerHand, null, action.id)
      });
    case 'CHANGE-PLAYER-HEALTH':
      return _extends({}, state, {
        playerHealth: state.playerHealth + action.value
      });
    case 'CHANGE-PLAYER-RAGE':
      var playerRage;

      playerRage = state.playerRage + action.value;
      if (playerRage < 0) {
        playerRage = 0;
      }

      return _extends({}, state, {
        playerRage: playerRage
      });
    case 'ROLL-D4':
      return _extends({}, state, {
        d4: random(4, 1)
      });
    case 'ROLL-D6':
      return _extends({}, state, {
        d6: random(6, 1)
      });
    case 'ROLL-D10':
      return _extends({}, state, {
        d10: random(10, 1)
      });
    case 'ADD-MODIFIER':
      return _extends({}, state, {
        modifiers: [].concat(_toConsumableArray(state.modifiers), [action.value])
      });
    case 'CHANGE-PLAYER-GOLD':
      var playerGold;

      playerGold = state.playerGold + action.value;
      if (playerGold < 0) {
        playerGold = 0;
      }
      return _extends({}, state, {
        playerGold: playerGold
      });
    default:
      return state;
  }
};

function discardCard(array) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var id = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];

  var cardIndex;

  if (id != -1) {
    cardIndex = array.findIndex(function (card) {
      return card.id === id;
    });
  } else {
    cardIndex = index;
  }

  return [].concat(_toConsumableArray(array.slice(0, cardIndex)), _toConsumableArray(array.slice(cardIndex + 1)));
};

function getInitialState() {
  return {
    locationCards: [],
    locationDeck: getLocationDeck(),
    playerHand: [],
    playerDeck: getPlayerDeck(),
    playerHealth: 30,
    playerMaxHealth: 30,
    d4: 4,
    d6: 6,
    d10: 10,
    modifiers: [],
    playerGold: 0
  };
};

function getPlayerDeck() {
  var cardPool;

  cardPool = [{ text: "1. Simple Axe.\n Basic Weapon.\n  Add 1 d4 to a combat check, generate 2 rage.\n  2 rage: Add 1 d4 + 2 to a combat check.\n  Durability: 2", onPlay: function onPlay() {} }, { text: "2. Miner's Pick.\n  Basic Item.\n  Add 1 to a check.\n  Then gain 1 d4 gold.\n", onPlay: function onPlay() {} }, { text: "3. Iron Shovel.\n  Basic Item.\n  Discard 1 card, then draw 2 cards.\n", onPlay: function onPlay() {} }, { text: "4. Soldier's helmet.\n  Basic Armor.\n  Reduce damage dealt to yourself by 1d4.\n", onPlay: function onPlay() {} }, { text: "5. Iron Breast Plate.\n  Basic Armor.\n  Reduce damage dealt to yourself by 2.\n", onPlay: function onPlay() {} }, { text: "6. Horned Helm.\n  Basic Armor.\n  Add 1 to a combat check.\n  Reduce damage dealt to yourself by 1 this turn.\n", onPlay: function onPlay() {} }, { text: "7. Tarnished Buckler.\n  Basic Armor.\n  Reduce damage dealt to yourself by half.\n", onPlay: function onPlay() {} }, { text: "8. Heroe's Sword.\n  Basic Weapon.\n  Add 2 to a combat check, generate 2 rage.\n  2 rage: Add 1 d6 + 1 to a combat check.\n  Durability: 2", onPlay: function onPlay() {} }, { text: "9. Beserker Axe.\n  Basic Weapon.\n  Add 2 d4s to a combat check.\n  Gain rage equal to the damage done.\n  4 rage: Add 4 d4s to a combat check, do 1 d4 damage to yourself.\n  Durability: d6 4+", onPlay: function onPlay() {} }, { text: "10. Battle Cry.\n  Basic Action.\n  Add 1 d6 to your allies' attacks this turn.\n  Generate 5 rage.\n", onPlay: function onPlay() {} }, { text: "11. Sharpening Stone.\n  Basic Item.\n  Give a weapon 'add 1 to a combat check' and increase its durability by 1.\n", onPlay: function onPlay() {} }, { text: "12. Burning Rage.\n  Rare Action.\n  Deal damage equal to your rage to an enemy.\n  Deal half the damage to yourself (rounded down).\n  Lose all rage.\n", onPlay: function onPlay() {} }, { text: "13. War Master.\n  Basic Ally.\n  Add 1 to Strength and Wisdom rolls for the rest of the scenario.\n", onPlay: function onPlay() {} }, { text: "14. Valiant Soldier.\n  Basic Ally.\n  Add 1 die to a combat roll.\n", onPlay: function onPlay() {} }, { text: "15. Scavenge.\n  Basic Action.\n  If an enemy died this turn, acquire a piece of basic armor.\n", onPlay: function onPlay() {} }, { text: "16. Loyal Soldier.\n  Basic Ally.\n  When taking damage, roll 1 d6.\n  If the result is equal to or less than the damage, prevent it.\n", onPlay: function onPlay() {} }, { text: "17. Mercenary.\n  Basic Ally.\n  Pay 2 gold, add 2 d4s to a combat check.\n", onPlay: function onPlay() {} }, { text: "18. Gauntlets of Strength.\n  Basic Armor.\n  Add 2 to a non-combat strength check.\n", onPlay: function onPlay() {} }];

  return shuffleDeck(cardPool);
};

function getLocationDeck() {
  var cardPool;

  cardPool = ["1. Crypt Zombie.\n 1/1.\n  Undead.\n  When defeated, leave behind a tombstone.\n", "2. Tombstone 0/10.\n  At the end of the turn, roll a d4.\n  On a 1, summon a 1/1 zombie.\n Amass.\n", "3. Vampire.\n 2/6.\n  Undead.\n  Vampiric.\n", "4. Diseased Wolf.\n 2/3.\n Beast.\n  Spreads Disease 1/3 on hit.\n", "5. Highway bandit.\n 2/2.\n  Human.\n  Ambush.\n", "6. Skeleton Soldier.\n 3/3.\n  Undead.\n  Takes half damage from attacks with weapons.\n", "7. Coffin Crawlers.\n 2 x 2/1.\n  Spider.\n", "8. Diseased Crow.\n 1/1.\n  Beast.\n  Spreads Disease 1/2 on hit.\n  When attacked, roll a d4.\n  On 3+, the attack is dodged.\n", "9. Grave Robber.\n 2/5.\n  On hit, player discards a card.\n", "10. Giant Bat.\n 3/5.\n Beast.\n Vampiric.\n", "11. Crypt Demon.\n 6/16.\n Demon Boss.\n  At the end of the turn, deal 2 damage to all other targets.\n  This damage cannot be reduced.\n"];

  return shuffleDeck(cardPool);
};

function shuffleDeck(deck) {
  var index, length, shuffledDeck;

  shuffledDeck = [];
  length = deck.length;
  for (var i = 0; i < length; i++) {
    index = random(deck.length - 1);
    shuffledDeck.push(deck[index]);
    deck.splice(index, 1);
  }
  return shuffledDeck;
};

function random(max) {
  var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  return Math.floor(Math.random() * (max + .9999 - min)) + min;
};

var Reducer = {
  reduce: reduce,
  initialState: getInitialState()
};

exports.default = Reducer;
//# sourceMappingURL=reducer.js.map
