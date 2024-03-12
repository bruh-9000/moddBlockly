/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['script'] = function (block, generator) {
  // Generate the function call for this block.
  const code = ``;
  return code;
};

forBlock['triggers'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `\n`;
  return code;
};

forBlock['ifelse'] = function (block, generator) {
  const check = generator.valueToCode(block, 'check', Order.NONE) || "";
  const do1 = generator.valueToCode(block, 'do1', Order.NONE) || "";
  const else1 = generator.valueToCode(block, 'else1', Order.NONE) || "";
  
  // Generate the function call for this block.
  let code;

  if (else1) {
    code = `if (${check}) {\n} else {\n}`;
  } else {
    code = `if (${check}) {\n}`;
  }

  return code;
};

forBlock['secondtick'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@secondTick\n`;
  return code;
};

forBlock['sendchatmessage'] = function (block, generator) {
  const text = generator.valueToCode(block, 'message', Order.NONE) || "''";

  // Generate the function call for this block.
  const code = `sendChatMessage(${text})\n`;
  return code;
};

forBlock['pos'] = function (block, generator) {
  const x = generator.valueToCode(block, 'x', Order.NONE) || "";
  const y = generator.valueToCode(block, 'y', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `pos(${x}, ${y})`;
  return [code, generator.ORDER_NONE];
};

forBlock['moveentity'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const pos = generator.valueToCode(block, 'pos', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `moveEntity(${entity}, ${pos})\n`;
  return code;
};

forBlock['owner'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `.owner`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringplayer'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringPlayer`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `triggeringUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

forBlock['selectedunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `selectedUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

forBlock['lastcreatedunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `lastCreatedUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

forBlock['frametick'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@frameTick\n`;
  return code;
};

forBlock['servershuttingdown'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@serverShuttingDown\n`;
  return code;
};

forBlock['gamestart'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@gameStart\n`;
  return code;
};

forBlock['onPostResponse'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@onPostResponse\n`;
  return code;
};

forBlock['playerSendsChatMessage'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerSendsChatMessage\n`;
  return code;
};

forBlock['unitTouchesWall'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesWall\n`;
  return code;
};

forBlock['unitUsesItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitUsesItem\n`;
  return code;
};

forBlock['unitAttributeBecomesZero'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttributeBecomesZero\n`;
  return code;
};

forBlock['unitStartUsingAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStartsUsingAnItem\n`;
  return code;
};

forBlock['unitattributebecomesfull'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttributeBecomesFull\n`;
  return code;
};

forBlock['unitEntersRegion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitEntersRegion\n`;
  return code;
};

forBlock['unitDroppedAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitDroppedAnItem\n`;
  return code;
};

forBlock['unitLeavesRegion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitLeavesRegion\n`;
  return code;
};

forBlock['unitSelectsItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitSelectsItem\n`;
  return code;
};

forBlock['unitAttacksUnit'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttacksUnit\n`;
  return code;
};

forBlock['unitStopsUsingAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStopsUsingAnItem\n`;
  return code;
};

forBlock['unitTouchesProjectile'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesProjectile\n`;
  return code;
};

forBlock['unitPickedAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitPickedAnItem\n`;
  return code;
};

forBlock['unitTouchesItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesItem\n`;
  return code;
};

forBlock['playerjoinsgame'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerJoinsGame\n`;
  return code;
};

forBlock['playerleavesgame'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerLeavesGame\n`;
  return code;
};

forBlock['destroyentity'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `destroyEntity(${entity})\n`;
  return code;
};

forBlock['playercameratrackunit'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `playerCameraTrackUnit(${player}, ${unit})\n`;
  return code;
};

forBlock['createunitatposition'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unittype = generator.valueToCode(block, 'unittype', Order.NONE) || "''";
  const pos = generator.valueToCode(block, 'pos', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'angle', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `createUnitAtPosition(${unittype}, ${player}, ${pos}, ${angle})\n`;
  return code;
};

forBlock['getplayername'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  console.log(player);

  // Generate the function call for this block.
  const code = `getPlayerName(${player})\n`;
  return [code, generator.ORDER_NONE];
};