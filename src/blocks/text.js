/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.

const secondTick = {
  "type": "secondtick",
  "message0": "secondTick",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const sendChatMessage = {
  "type": "sendchatmessage",
  "message0": "sendChatMessage %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const triggers = {
  "type": "triggers",
  "message0": "Triggers:",
  "inputsInline": true,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const script = {
  "type": "script",
  "message0": "Script:",
  "inputsInline": true,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const ifelse = {
  "type": "ifelse",
  "message0": "if %1 do %2 else %3",
  "args0": [
    {
      "type": "input_value",
      "name": "check",
      "check": "Boolean"
    },
    {
      "type": "input_statement",
      "name": "do1"
    },
    {
      "type": "input_statement",
      "name": "else1"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const pos = {
  "type": "pos",
  "message0": "pos %1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "x"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "y"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const moveEntity = {
  "type": "moveentity",
  "message0": "moveEntity %1 %2 to pos %3",
  "args0": [
    {
      "type": "input_value",
      "name": "entity"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringPlayer = {
  "type": "triggeringplayer",
  "message0": "triggeringPlayer",
  "output": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
};

const owner = {
  "type": "owner",
  "message0": "owner",
  "output": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringUnit = {
  "type": "triggeringunit",
  "message0": "triggeringUnit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

const selectedUnit = {
  "type": "selectedunit",
  "message0": "selectedUnit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

const lastCreatedUnit = {
  "type": "lastcreatedunit",
  "message0": "lastCreatedUnit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

const frameTick = {
  "type": "frametick",
  "message0": "frameTick",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const serverShuttingDown = {
  "type": "servershuttingdown",
  "message0": "serverShuttingDown",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const gameStart = {
  "type": "gamestart",
  "message0": "gameStart",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const onPostResponse = {
  "type": "onpostresponse",
  "message0": "onPostResponse",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const playerSendsChatMessage = {
  "type": "playerSendsChatMessage",
  "message0": "playerSendsChatMessage",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesWall = {
  "type": "unitTouchesWall",
  "message0": "unitTouchesWall",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitUsesItem = {
  "type": "unitUsesItem",
  "message0": "unitUsesItem",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitAttributeBecomesZero = {
  "type": "unitAttributeBecomesZero",
  "message0": "unitAttributeBecomesZero",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitStartsUsingAnItem = {
  "type": "unitStartsUsingAnItem",
  "message0": "unitStartsUsingAnItem",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitAttributeBecomesFull = {
  "type": "unitAttributeBecomesFull",
  "message0": "unitAttributeBecomesFull",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitEntersRegion = {
  "type": "unitEntersRegion",
  "message0": "unitEntersRegion",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitDroppedAnItem = {
  "type": "unitDroppedAnItem",
  "message0": "unitDroppedAnItemk",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitSelectsItem = {
  "type": "unitSelectsItem",
  "message0": "unitSelectsItem",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitLeavesRegion = {
  "type": "unitLeavesRegion",
  "message0": "unitLeavesRegion",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitAttacksUnit = {
  "type": "unitAttacksUnit",
  "message0": "unitAttacksUnit",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitStopsUsingAnItem = {
  "type": "unitStopsUsingAnItem",
  "message0": "unitStopsUsingAnItem",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesProjectile = {
  "type": "unitTouchesProjectile",
  "message0": "unitTouchesProjectile",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitPickedAnItem = {
  "type": "unitPickedAnItem",
  "message0": "unitPickedAnItem",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesItem = {
  "type": "unitTouchesItem",
  "message0": "unitTouchesItem",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const playerJoinsGame = {
  "type": "playerjoinsgame",
  "message0": "playerJoinsGame",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const playerLeavesGame = {
  "type": "playerleavesgame",
  "message0": "playerLeavesGame",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const destroyEntity = {
  "type": "destroyentity",
  "message0": "destroy %1",
  "previousStatement": null,
  "nextStatement": null,
  "args0": [
    {
      "type": "input_value",
      "name": "entity"
    }
  ],
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

const playerCameraTrackUnit = {
  "type": "playercameratrackunit",
  "message0": "make %1 %2 track unit %3",
  "args0": [
    {
      "type": "input_value",
      "name": "player"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "unit"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
};

const createUnitAtPosition = {
  "type": "createunitatposition",
  "message0": "create %1 %2 for player %3 %4 at pos %5 %6 and angle %7",
  "previousStatement": null,
  "nextStatement": null,
  "args0": [
    {
      "type": "input_value",
      "name": "unittype"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "player"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "angle"
    }
  ],
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

// Colors per category
// 120 for trigger
// 65 for unit
// 260 for player
// 230 for logic
// 330 for other
// 290 for entity

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
  [script, frameTick, secondTick, sendChatMessage, triggers, ifelse, pos, moveEntity, triggeringPlayer, owner, triggeringUnit, selectedUnit, onPostResponse, gameStart, serverShuttingDown,
  unitTouchesItem, unitPickedAnItem, unitTouchesProjectile, unitStopsUsingAnItem, unitAttacksUnit, unitSelectsItem, unitLeavesRegion, unitDroppedAnItem, unitEntersRegion, unitAttributeBecomesFull,
  unitStartsUsingAnItem, unitAttributeBecomesZero, unitUsesItem, unitTouchesWall, playerSendsChatMessage, destroyEntity, lastCreatedUnit, playerCameraTrackUnit, createUnitAtPosition,
  playerJoinsGame, playerLeavesGame]);