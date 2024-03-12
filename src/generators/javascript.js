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
  // Generate the function call for this block.
  const code = `triggeringUnit`;
  return [code, generator.ORDER_NONE];
};

forBlock['selectedunit'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `selectedUnit`;
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

forBlock['playersendschatmessage'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerSendsChatMessage\n`;
  return code;
};

forBlock['unittoucheswall'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesWall\n`;
  return code;
};

forBlock['unitysesiItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitUsesItem\n`;
  return code;
};

forBlock['unitattributebecomeszero'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttributeBecomesZero\n`;
  return code;
};

forBlock['unitstartsysinganitem'] = function (block, generator) {
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

forBlock['unitselectsitem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitSelectsItem\n`;
  return code;
};

forBlock['unitattacksynit'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttacksUnit\n`;
  return code;
};

forBlock['unitstopsusinganitem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStopsUsingAnItem\n`;
  return code;
};

forBlock['unittouchesprojectile'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesProjectile\n`;
  return code;
};

forBlock['unitpickedanitem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitPickedAnItem\n`;
  return code;
};

forBlock['unittouchesitem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesItem\n`;
  return code;
};