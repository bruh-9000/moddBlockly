/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldTextInput } from 'blockly';
import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const blockTmp = Object.create(null);

blockTmp['script'] = function (block, generator) {
  // Generate the function call for this block.
  const code = ``;
  return code;
};

blockTmp['triggers'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `\n`;
  return code;
};

blockTmp['ifelse'] = function (block, generator) {
  const check = generator.valueToCode(block, 'check', Order.NONE) || "";
  const do1 = generator.statementToCode(block, 'do1') || "";
  const else1 = generator.statementToCode(block, 'else1') || "";
  
  // Generate the function call for this block.
  let code;

  if (else1) {
    if (do1) {
      code = `if (${check}) {\n${do1}} else {\n${else1}}\n`;
    } else {
      code = `if (${check}) {\n\n${do1}} else {\n${else1}}\n`;
    }
  } else {
    if (do1) {
      code = `if (${check}) {\n${do1}}\n`;
    } else {
      code = `if (${check}) {\n\n}\n`;
    }
  }

  return code;
};

blockTmp['secondtick'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@secondTick\n`;
  return code;
};

blockTmp['sendchatmessage'] = function (block, generator) {
  const text = generator.valueToCode(block, 'message', Order.NONE) || "''";

  // Generate the function call for this block.
  const code = `sendChatMessage(${text})\n`;
  return code;
};

blockTmp['pos'] = function (block, generator) {
  const x = generator.valueToCode(block, 'x', Order.NONE) || "";
  const y = generator.valueToCode(block, 'y', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `pos(${x}, ${y})`;
  return [code, generator.ORDER_NONE];
};

blockTmp['moveentity'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const pos = generator.valueToCode(block, 'pos', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `moveEntity(${entity}, ${pos})\n`;
  return code;
};

blockTmp['owner'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `.owner`;
  return [code, generator.ORDER_NONE];
};

blockTmp['triggeringplayer'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringPlayer`;
  return [code, generator.ORDER_NONE];
};

blockTmp['triggeringunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `triggeringUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

blockTmp['selectedunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `selectedUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

blockTmp['lastcreatedunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `lastCreatedUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

blockTmp['frametick'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@frameTick\n`;
  return code;
};

blockTmp['servershuttingdown'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@serverShuttingDown\n`;
  return code;
};

blockTmp['gamestart'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@gameStart\n`;
  return code;
};

blockTmp['onPostResponse'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@onPostResponse\n`;
  return code;
};

blockTmp['playerSendsChatMessage'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerSendsChatMessage\n`;
  return code;
};

blockTmp['unitTouchesWall'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesWall\n`;
  return code;
};

blockTmp['unitUsesItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitUsesItem\n`;
  return code;
};

blockTmp['unitAttributeBecomesZero'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttributeBecomesZero\n`;
  return code;
};

blockTmp['unitStartUsingAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStartsUsingAnItem\n`;
  return code;
};

blockTmp['unitattributebecomesfull'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttributeBecomesFull\n`;
  return code;
};

blockTmp['unitEntersRegion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitEntersRegion\n`;
  return code;
};

blockTmp['unitDroppedAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitDroppedAnItem\n`;
  return code;
};

blockTmp['unitLeavesRegion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitLeavesRegion\n`;
  return code;
};

blockTmp['unitSelectsItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitSelectsItem\n`;
  return code;
};

blockTmp['unitAttacksUnit'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttacksUnit\n`;
  return code;
};

blockTmp['unitStopsUsingAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStopsUsingAnItem\n`;
  return code;
};

blockTmp['unitTouchesProjectile'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesProjectile\n`;
  return code;
};

blockTmp['unitPickedAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitPickedAnItem\n`;
  return code;
};

blockTmp['unitTouchesItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesItem\n`;
  return code;
};

blockTmp['playerjoinsgame'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerJoinsGame\n`;
  return code;
};

blockTmp['playerleavesgame'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerLeavesGame\n`;
  return code;
};

blockTmp['destroyentity'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `destroyEntity(${entity})\n`;
  return code;
};

blockTmp['playercameratrackunit'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `playerCameraTrackUnit(${player}, ${unit})\n`;
  return code;
};

blockTmp['createunitatposition'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unittype = generator.valueToCode(block, 'unittype', Order.NONE) || "''";
  const pos = generator.valueToCode(block, 'pos', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'angle', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `createUnitAtPosition(${unittype}, ${player}, ${pos}, ${angle})\n`;
  return code;
};

blockTmp['getplayername'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  console.log(player);

  // Generate the function call for this block.
  const code = `getPlayerName(${player})`;
  return [code, generator.ORDER_NONE];
};

blockTmp['num2str'] = function (block, generator) {
  const num = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `num2str(${num})\n`;
  return code;
};

blockTmp['str2num'] = function (block, generator) {
  const str1 = generator.valueToCode(block, 'str1', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `str2num(${str1})\n`;
  return code;
};

blockTmp['sendchatmessagetoplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'unittype', Order.NONE) || "''";

  // Generate the function call for this block.
  const code = `sendChatMessageToPlayer(${message}, ${player})\n`;
  return code;
};

blockTmp['break'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `break()\n`;
  return code;
};

blockTmp['continue'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `continue()\n`;
  return code;
};

blockTmp['increasevariablebynumber'] = function (block, generator) {
  const var1 = generator.valueToCode(block, 'var', Order.NONE) || "";
  const number = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `increaseVariableByNumber(${var1}, ${number})\n`;
  return code;
};

blockTmp['decreasevariablebynumber'] = function (block, generator) {
  const var1 = generator.valueToCode(block, 'var', Order.NONE) || "";
  const number = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `decreaseVariableByNumber(${var1}, ${number})\n`;
  return code;
};

blockTmp['setvariable'] = function (block, generator) {
  const var1 = generator.valueToCode(block, 'var', Order.NONE) || "";
  const number = generator.valueToCode(block, 'value', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `setVariable(${var1}, ${number})\n`;
  return code;
};

blockTmp['triggeringregion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringRegion`;
  return [code, generator.ORDER_NONE];
};

blockTmp['triggeringitem'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";
  
  // Generate the function call for this block.
  let code;

  if (sub) {
    code = `triggeringItem.type`;
  } else {
    code = `triggeringItem`;
  }
  return [code, generator.ORDER_NONE];
};

blockTmp['triggeringprojectile'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  let code;

  if (sub) {
    code = `getProjectileTypeOfProjectile(triggeringProj)`;
  } else {
    code = `triggeringProj`;
  }
  return [code, generator.ORDER_NONE];
};

blockTmp['repeat'] = function (block, generator) {
  const times = generator.valueToCode(block, 'times', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  let code;

  if (code1) {
    code = `repeat (${times})\n${code1}{\n`;
  } else {
    code = `repeat (${times})\n\n{\n`;
  }

  return code;
};

blockTmp['while'] = function (block, generator) {
  const bool = generator.valueToCode(block, 'bool', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  let code;

  if (code1) {
    code = `while (${bool})\n${code1}{\n`;
  } else {
    code = `while (${bool})\n\n{\n`;
  }

  return code;
};

blockTmp['kickplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'message', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `kickPlayer(${player}, ${message})\n`;
  return code;
};

blockTmp['comment'] = function (block, generator) {
  const text = block.getFieldValue('text') || "";

  // Generate the function call for this block.
  const code = `// ${text}\ncomment()\n`;
  return code;
};

blockTmp['dropallitems'] = function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `dropAllItems(${unit})\n`;
  return code;
};

blockTmp['centerofregion'] = function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `centerOfRegion(${region})`;
  return [code, generator.ORDER_NONE];
};

blockTmp['getentityposition'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `getEntityPosition(${entity})`;
  return [code, generator.ORDER_NONE];
};

blockTmp['getentiremapregion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `getEntireMapRegion()`;
  return [code, generator.ORDER_NONE];
};

blockTmp['projectiletypeofprojectile'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `getProjectileTypeOfProjectile()`;
  return [code, generator.ORDER_NONE];
};

blockTmp['itemtypeofitem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `.type`;
  return [code, generator.ORDER_NONE];
};

blockTmp['setplayername'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const name = generator.valueToCode(block, 'name', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `setPlayerName(${player}, ${name})\n`;
  return code;
};

blockTmp['setunitnamelabel'] = function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const name = generator.valueToCode(block, 'name', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `setUnitNameLabel(${unit}, ${name})\n`;
  return code;
};

blockTmp['getplayerselectedunit'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `getPlayerSelectedUnit(${player})`;
  return [code, generator.ORDER_NONE];
};

blockTmp['join'] = function (block, generator) {
  const text1 = generator.valueToCode(block, 'text1', Order.NONE) || "''";
  const text2 = generator.valueToCode(block, 'text2', Order.NONE) || "''";

  // Generate the function call for this block.
  const code = `${text1} + ${text2}`;
  return [code, generator.ORDER_NONE];
};