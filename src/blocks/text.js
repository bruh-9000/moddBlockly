/**
* @license
* Copyright 2023 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/

import * as Blockly from 'blockly/core';
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
const actionsDefinition = []
actionsDefinition.push({
        "type": "getiteminfrontofunit",
        "message0": "getItemInFrontOfUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "item in front of unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedprojectile",
        "message0": "selectedProjectile ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "selected projectile (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getattributetypeofattribute",
        "message0": "getAttributeTypeOfAttribute %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Attribute",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Attributetype",
        
        "tooltip": "attribute type of attribute",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playadforplayer",
        "message0": "playAdForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ad",
        
        "tooltip": "play video ad for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getrandomnumberbetween",
        "message0": "getRandomNumberBetween %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "min",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "max",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "random number",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "settimeout",
        "message0": "setTimeOut %1",
        "args0": [
          {
              "type": "input_value",
              "name": "duration",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Timer",
        
        "tooltip": "set timeout (wait, then run)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "unitsfacingangle",
        "message0": "unitsFacingAngle %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "unit's facing angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getmapheight",
        "message0": "getMapHeight ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "map's height",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getentitytype",
        "message0": "getEntityType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "entity type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getselectedentity",
        "message0": "getSelectedEntity ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "selected entity (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "rotateentitytofaceposition",
        "message0": "rotateEntityToFacePosition %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "rotate entity to face a position instantly (ignore physics)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "destroyentity",
        "message0": "destroyEntity %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "destroy entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentitydepth",
        "message0": "setEntityDepth %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity depth",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitematslot",
        "message0": "getItemAtSlot %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "slot",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "item at slot",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hideunitfromplayer",
        "message0": "hideUnitFromPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "hide unit from player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showunittoplayer",
        "message0": "showUnitToPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "show unit to player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entitiescollidingwithlastraycast",
        "message0": "entitiesCollidingWithLastRaycast ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entitygroup",
        
        "tooltip": "entities colliding with last triggering raycast",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastpurchasedunit",
        "message0": "getLastPurchasedUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last purchased unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "sendchatmessage",
        "message0": "sendChatMessage %1",
        "args0": [
          {
              "type": "input_value",
              "name": "message",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "send chat message",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playsoundatposition",
        "message0": "playSoundAtPosition %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "sound",
              "check": "Sound",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Sound",
        
        "tooltip": "play sound at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "xycoordinate",
        "message0": "xyCoordinate %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "x",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "y",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "xy coordinate",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "tofixed",
        "message0": "toFixed %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "precision",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number at fixed decimal places",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getentitystate",
        "message0": "getEntityState %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "State",
        
        "tooltip": "current state of entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "dropitematposition",
        "message0": "dropItemAtPosition %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "drop item at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applyforceonentityangle",
        "message0": "applyForceOnEntityAngle %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "force",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply force on entity at an angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showinputmodaltoplayer",
        "message0": "showInputModalToPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "inputlabel",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show input modal to player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemquantity",
        "message0": "getItemQuantity %1",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "item quantity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "isplayerloggedin",
        "message0": "isPlayerLoggedIn %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player is logged in",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "opendialogueforplayer",
        "message0": "openDialogueForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "dialogue",
              "check": "Dialogue",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Dialogue",
        
        "tooltip": "open dialogue for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "continue",
        "message0": "continue ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "skip iteration",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "openwebsiteforplayer",
        "message0": "openWebsiteForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "open website for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentitylifespan",
        "message0": "setEntityLifeSpan %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "lifespan",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity life span",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selecteditem",
        "message0": "selectedItem ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "selected item (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hideunitnamelabel",
        "message0": "hideUnitNameLabel %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "hide unit's name label from hostile players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "settriggeringunit",
        "message0": "setTriggeringUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "set triggering unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "createunitatposition",
        "message0": "createUnitAtPosition %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "create unit at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hideuitextforeveryone",
        "message0": "hideUiTextForEveryone %1",
        "args0": [
          {
              "type": "input_value",
              "name": "target",
              "check": "Updateuitext.target",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "hide overlay text for everyone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playersarefriendly",
        "message0": "playersAreFriendly %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "playera",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "playerb",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "players is friendly to another player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hidegamesuggestionsforplayer",
        "message0": "hideGameSuggestionsForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "hide game suggestions",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "cos",
        "message0": "cos %1",
        "args0": [
          {
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "cos of an angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "transformregiondimensions",
        "message0": "transformRegionDimensions %1,%2,%3,%4,%5,%6,%7,%8,%9",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "x",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "y",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "width",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "height",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "transform region to [ x, y, width, height ]",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitinvisibletofriendlyplayers",
        "message0": "makeUnitInvisibleToFriendlyPlayers %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit invisible to friendly players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentityattributemin",
        "message0": "setEntityAttributeMin %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity attribute min value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entityheight",
        "message0": "entityHeight %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "entity height",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunitsownedbyplayer",
        "message0": "allUnitsOwnedByPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "all units owned by player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showinvitefriendsmodal",
        "message0": "showInviteFriendsModal %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show invite friends modal to player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showcustommodaltoplayer",
        "message0": "showCustomModalToPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "htmlcontent",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show custom modal to player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastplayerselectingdialogueoption",
        "message0": "getLastPlayerSelectingDialogueOption ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "last player selecting a dialogue option",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playerattributemax",
        "message0": "playerAttributeMax %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "player attribute max",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettriggeringitem",
        "message0": "getTriggeringItem ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "last triggering item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemparticle",
        "message0": "getItemParticle %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "particletype",
              "check": "Particletype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Particle",
        
        "tooltip": "item particle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allprojectilesattachedtounit",
        "message0": "allProjectilesAttachedToUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectilegroup",
        
        "tooltip": "all projectiles attached to unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showuitextforeveryone",
        "message0": "showUiTextForEveryone %1",
        "args0": [
          {
              "type": "input_value",
              "name": "target",
              "check": "Updateuitext.target",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show overlay text for everyone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallitems",
        "message0": "forAllItems %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemgroup",
              "check": "Itemgroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all items in a item group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "removeplayerfromplayergroup",
        "message0": "removePlayerFromPlayerGroup %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "playergroup",
              "check": "Playergroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playergroup",
        
        "tooltip": "remove player from player group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayerattribute",
        "message0": "getPlayerAttribute %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "player attribute value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playeriscontrolledbyhuman",
        "message0": "playerIsControlledByHuman %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player is controlled by a human",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setunitowner",
        "message0": "setUnitOwner %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "set owner of a unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getmapwidth",
        "message0": "getMapWidth ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "map's width",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "updateitemquantity",
        "message0": "updateItemQuantity %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Item",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "quantity",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "update item quantity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applyforceonentityanglelt",
        "message0": "applyForceOnEntityAngleLT %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "force",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply force on entity at angle (loss tolerant)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentitystate",
        "message0": "setEntityState %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "state",
              "check": "State",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity state",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entitywidth",
        "message0": "entityWidth %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "entity width",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hideunitinplayerminimap",
        "message0": "hideUnitInPlayerMinimap %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "hide minimap unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selecteditemtype",
        "message0": "selectedItemType ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemtype",
        
        "tooltip": "selected item type (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayercount",
        "message0": "getPlayerCount ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number of human players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemcurrentlyheldbyunit",
        "message0": "getItemCurrentlyHeldByUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "item currently held by unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allitemsdroppedonground",
        "message0": "allItemsDroppedOnGround ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemgroup",
        
        "tooltip": "all items dropped on ground",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "return",
        "message0": "return ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "System",
        
        "tooltip": "return",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "runscript",
        "message0": "runScript %1",
        "args0": [
          {
              "type": "input_value",
              "name": "scriptname",
              "check": "Script",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Script",
        
        "tooltip": "run script",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addunittounitgroup",
        "message0": "addUnitToUnitGroup %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unitgroup",
              "check": "Unitgroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "add unit to unit group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "humanplayers",
        "message0": "humanPlayers ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playergroup",
        
        "tooltip": "human players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "lastuseditem",
        "message0": "lastUsedItem ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "last used item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playercustominput",
        "message0": "playerCustomInput %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "last player custom input",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "arctan",
        "message0": "arctan %1",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "arctan of angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "concat",
        "message0": "concat %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "texta",
              "check": [String,Number],
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "textb",
              "check": [String,Number],
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "concatenate",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayername",
        "message0": "getPlayerName %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "name of player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getsourceitemofprojectile",
        "message0": "getSourceItemOfProjectile %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Projectile",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "source item of projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunittypeofunit",
        "message0": "getUnitTypeOfUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unittype",
        
        "tooltip": "unit type of unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemtypeofitem",
        "message0": "getItemTypeOfItem %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemtype",
        
        "tooltip": "item type of item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettriggeringregion",
        "message0": "getTriggeringRegion ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "last triggering region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playercamerasetzoom",
        "message0": "playerCameraSetZoom %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "zoom",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Camera",
        
        "tooltip": "set player camera zoom",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "mathfloor",
        "message0": "mathFloor %1",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "math floor",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setunitnamelabel",
        "message0": "setUnitNameLabel %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "name",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "set unit name label",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunittypename",
        "message0": "getUnitTypeName %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "name of unit type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "openshopforplayer",
        "message0": "openShopForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "shop",
              "check": "Shop",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Shop",
        
        "tooltip": "open shop for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getycoordinateofregion",
        "message0": "getYCoordinateOfRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "y-coordinate of region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "squareroot",
        "message0": "squareRoot %1",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "square root",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "closedialogueforplayer",
        "message0": "closeDialogueForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Dialogue",
        
        "tooltip": "close dialogue for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "comment",
        "message0": "comment ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "comment",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "createentityatpositionwithdimensions",
        "message0": "createEntityAtPositionWithDimensions %1,%2,%3,%4,%5,%6,%7,%8,%9,%10,%11",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "height",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "width",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "create entity at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "increasevariablebynumber",
        "message0": "increaseVariableByNumber %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "variable",
              "check": "Variable",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "increase variable by number",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getmousecursorposition",
        "message0": "getMouseCursorPosition %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "mouse cursor position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastoverlappingunit",
        "message0": "getLastOverlappingUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last overlapping unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allitems",
        "message0": "allItems ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemgroup",
        
        "tooltip": "all items in the game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allitemsattachedtounit",
        "message0": "allItemsAttachedToUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemgroup",
        
        "tooltip": "all items attached to unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getentiremapregion",
        "message0": "getEntireMapRegion ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "entire map region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playercameratrackunit",
        "message0": "playerCameraTrackUnit %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Camera",
        
        "tooltip": "make player camera to track a unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "castability",
        "message0": "castAbility %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "abilityname",
              "check": "Ability",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit cast ability once",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playersarehostile",
        "message0": "playersAreHostile %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "playera",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "playerb",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player is hostile against another player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allitemsownedbyunit",
        "message0": "allItemsOwnedByUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemgroup",
        
        "tooltip": "all items owned by unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "computerplayers",
        "message0": "computerPlayers ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playergroup",
        
        "tooltip": "computer players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playentityanimation",
        "message0": "playEntityAnimation %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "animation",
              "check": "Animationtype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "play entity's animation",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "while",
        "message0": "while %1",
        "args0": [
          {
              "type": "input_value",
              "name": "conditions",
              "check": "Conditions",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "while",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allentities",
        "message0": "allEntities ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entitygroup",
        
        "tooltip": "all entities in the game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "lastpurchasedunittypetid",
        "message0": "lastPurchasedUnitTypetId ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unittype",
        
        "tooltip": "unit type of last purchased unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applyforceonentityxy",
        "message0": "applyForceOnEntityXY %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "forcex",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "forcey",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply force on entity XY",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showunitinplayerminimap",
        "message0": "showUnitInPlayerMinimap %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "color",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "show unit in minimap",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "saveplayerdata",
        "message0": "savePlayerData %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "save player data",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hideunitnamelabelfromplayer",
        "message0": "hideUnitNameLabelFromPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "hide unit's name label from player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "regionoverlapswithregion",
        "message0": "regionOverlapsWithRegion %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "regiona",
              "check": "Region",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "regionb",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "region overlaps with region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allitemtypesingame",
        "message0": "allItemTypesInGame ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemtypegroup",
        
        "tooltip": "all item types in game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettriggeringplayer",
        "message0": "getTriggeringPlayer ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "last triggering player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getprojectiletypeofprojectile",
        "message0": "getProjectileTypeOfProjectile %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Projectile",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectiletype",
        
        "tooltip": "projectile type of projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allplayers",
        "message0": "allPlayers ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playergroup",
        
        "tooltip": "All players including both human, bot, and computer players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setplayerattribute",
        "message0": "setPlayerAttribute %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "set player attribute value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "updateuitextforplayer",
        "message0": "updateUiTextForPlayer %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "target",
              "check": "Updateuitext.target",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "update overlay text for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showunitnamelabel",
        "message0": "showUnitNameLabel %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "show unit's name label to hostile players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "closeshopforplayer",
        "message0": "closeShopForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Shop",
        
        "tooltip": "close shop for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "repeat",
        "message0": "repeat %1",
        "args0": [
          {
              "type": "input_value",
              "name": "count",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "repeat X times",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopmusic",
        "message0": "stopMusic ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Sound",
        
        "tooltip": "stop music for everyone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setvelocityofentityxy",
        "message0": "setVelocityOfEntityXY %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "velocityx",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "velocityy",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set velocity of entity XY",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedregion",
        "message0": "selectedRegion ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "selected region (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showunitnamelabeltoplayer",
        "message0": "showUnitNameLabelToPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "show unit's name label to player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "spawnitem",
        "message0": "spawnItem %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "create item at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "createitemwithmaxquantityatposition",
        "message0": "createItemWithMaxQuantityAtPosition %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "create item with max quantity at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getrandomitemtypefromitemtypegroup",
        "message0": "getRandomItemTypeFromItemTypeGroup %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtypegroup",
              "check": "Itemtypegroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemtype",
        
        "tooltip": "random item type from item type group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastoverlappedunit",
        "message0": "getLastOverlappedUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last overlapped unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showmenu",
        "message0": "showMenu %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show menu",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "startacceptingplayers",
        "message0": "startAcceptingPlayers ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "start accepting players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallentities",
        "message0": "forAllEntities %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entitygroup",
              "check": "Entitygroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all entities in an entity group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeplayerselectunit",
        "message0": "makePlayerSelectUnit %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "make player select unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentityattribute",
        "message0": "setEntityAttribute %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity attribute value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastcreateditem",
        "message0": "getLastCreatedItem ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "last created item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastcreatedprojectile",
        "message0": "getLastCreatedProjectile ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "last created projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallitemtypes",
        "message0": "forAllItemTypes %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtypegroup",
              "check": "Itemtypegroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all item types in an item type group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "createentityforplayeratpositionwithdimensions",
        "message0": "createEntityForPlayerAtPositionWithDimensions %1,%2,%3,%4,%5,%6,%7,%8,%9,%10,%11",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "height",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "width",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "create unit at position with dimension",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunitcount",
        "message0": "getUnitCount ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number of all units in the game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlasttouchingunit",
        "message0": "getLastTouchingUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last touching unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastoverlappingitem",
        "message0": "getLastOverlappingItem ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "last overlapping item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemininventoryslot",
        "message0": "getItemInInventorySlot %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "slot",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "item in inventory slot of unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "updateuitextforeveryone",
        "message0": "updateUiTextForEveryone %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "target",
              "check": "Updateuitext.target",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "update overlay text for everyone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallprojectiles",
        "message0": "forAllProjectiles %1",
        "args0": [
          {
              "type": "input_value",
              "name": "projectilegroup",
              "check": "Projectilegroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all projectiles in a projectile group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playertypeofplayer",
        "message0": "playerTypeOfPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playertype",
        
        "tooltip": "player type of player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "anglebetweenpositions",
        "message0": "angleBetweenPositions %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "positiona",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "positionb",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "angle between positions",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopmusicforplayer",
        "message0": "stopMusicForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Music",
        
        "tooltip": "stop music for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "positioncamera",
        "message0": "positionCamera %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Camera",
        
        "tooltip": "make camera look at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "createprojectileatposition",
        "message0": "createProjectileAtPosition %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "projectiletype",
              "check": "Projectiletype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "force",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "create projectile at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getwidthofregion",
        "message0": "getWidthOfRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "width of region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showmenuandselectcurrentserver",
        "message0": "showMenuAndSelectCurrentServer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show menu and select currently connected server",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getsourceunitofprojectile",
        "message0": "getSourceUnitOfProjectile %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Projectile",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "source unit of projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setfadingtextofunit",
        "message0": "setFadingTextOfUnit %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "text",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "color",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "set fading text of unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changescaleofentitybody",
        "message0": "changeScaleOfEntityBody %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "scale",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "change scale of entity's body",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entitybounds",
        "message0": "entityBounds %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "entity bounds",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entityattributemin",
        "message0": "entityAttributeMin %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "entity attribute min",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallregions",
        "message0": "forAllRegions %1",
        "args0": [
          {
              "type": "input_value",
              "name": "regiongroup",
              "check": "Regiongroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all regions in a region group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "rotateentitytoradianslt",
        "message0": "rotateEntityToRadiansLT %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "radians",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "rotate entity to radians (loss tolerant)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stringtonumber",
        "message0": "stringToNumber %1",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number converted from string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setplayerattributemax",
        "message0": "setPlayerAttributeMax %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attributetype",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "set player attribute max value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setplayerattributeregenerationrate",
        "message0": "setPlayerAttributeRegenerationRate %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attributetype",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "set player attribute regeneration rate",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getquantityofunittypeinunittypegroup",
        "message0": "getQuantityOfUnitTypeInUnitTypeGroup %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unittypegroup",
              "check": "Unittypegroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "quantity of unit type in unit type group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallunittypes",
        "message0": "forAllUnitTypes %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittypegroup",
              "check": "Unittypegroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all unit types in a unit type group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "centerofregion",
        "message0": "centerOfRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "center of region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entitylastraycastcollisionposition",
        "message0": "entityLastRaycastCollisionPosition %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "get entity last raycast collision position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "decreasevariablebynumber",
        "message0": "decreaseVariableByNumber %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "variable",
              "check": "Variable",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "decrease variable by number",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getpositiony",
        "message0": "getPositionY %1",
        "args0": [
          {
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "y-coordinate of position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastcastingunit",
        "message0": "getLastCastingUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last ability casting unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlasttouchedunit",
        "message0": "getLastTouchedUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last touched unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedparticle",
        "message0": "selectedParticle ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Particle",
        
        "tooltip": "selected particle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunitsattachedtounit",
        "message0": "allUnitsAttachedToUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "all units attached to unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "kickplayer",
        "message0": "kickPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "message",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "kick player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallplayers",
        "message0": "forAllPlayers %1",
        "args0": [
          {
              "type": "input_value",
              "name": "playergroup",
              "check": "Playergroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all players in a player group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "removeunitfromunitgroup",
        "message0": "removeUnitFromUnitGroup %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unitgroup",
              "check": "Unitgroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "remove unit from unit group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playersareneutral",
        "message0": "playersAreNeutral %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "playera",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "playerb",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player is neutral to another player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "distancebetweenpositions",
        "message0": "distanceBetweenPositions %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "positiona",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "positionb",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "distance between positions",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "flipentitysprite",
        "message0": "flipEntitySprite %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "flip",
              "check": "Flip",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "flip entity sprite",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitinvisibletoneutralplayers",
        "message0": "makeUnitInvisibleToNeutralPlayers %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit invisible to neutral players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entityattributemax",
        "message0": "entityAttributeMax %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "entity attribute max",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getentityposition",
        "message0": "getEntityPosition %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "entity position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playerhasadblockenabled",
        "message0": "playerHasAdblockEnabled %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player has adblock enabled",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "saveunitdata",
        "message0": "saveUnitData %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "save unit data",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applytorqueonentity",
        "message0": "applyTorqueOnEntity %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "torque",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply torque on entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "givenewitemtounit",
        "message0": "giveNewItemToUnit %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "give new item to unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playerattributemin",
        "message0": "playerAttributeMin %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "player attribute min",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "startusingitem",
        "message0": "startUsingItem %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "start using item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "moveentity",
        "message0": "moveEntity %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "move entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "for",
        "message0": "for %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "variablename",
              "check": "Variable",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "start",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "stop",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for loop",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "sin",
        "message0": "sin %1",
        "args0": [
          {
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "sin of an angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getxcoordinateofregion",
        "message0": "getXCoordinateOfRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "x-coordinate of region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showmenuandselectbestserver",
        "message0": "showMenuAndSelectBestServer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show menu and select best server",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getvalueofentityvariable",
        "message0": "getValueOfEntityVariable %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "variable",
              "check": "Entityvariable",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        
        
        "tooltip": "entity variable",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entitiesinregion",
        "message0": "entitiesInRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entitygroup",
        
        "tooltip": "entities in region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applyforceonentityxyrelative",
        "message0": "applyForceOnEntityXYRelative %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "forcex",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "forcey",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply force on entity XY relative to its facing angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applyforceonentityxylt",
        "message0": "applyForceOnEntityXYLT %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "forcex",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "forcey",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply force on entity XY (loss tolerant)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "attachentitytoentity",
        "message0": "attachEntityToEntity %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "targetingentity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "attach entity to entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entityexists",
        "message0": "entityExists %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "entity exists",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "nameofregion",
        "message0": "nameOfRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "name of region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "undefinedvalue",
        "message0": "undefinedValue ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        
        
        "tooltip": "undefined value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "banplayerfromchat",
        "message0": "banPlayerFromChat %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "mute player from chat",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getentityvelocityy",
        "message0": "getEntityVelocityY %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get entity velocity y",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunittypesingame",
        "message0": "allUnitTypesInGame ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unittypegroup",
        
        "tooltip": "all unit types in game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getpositionx",
        "message0": "getPositionX %1",
        "args0": [
          {
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "x-coordinate of position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getrandompositioninregion",
        "message0": "getRandomPositionInRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "random position in region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettriggeringprojectile",
        "message0": "getTriggeringProjectile ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "last triggering projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunitparticle",
        "message0": "getUnitParticle %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "particletype",
              "check": "Particletype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Particle",
        
        "tooltip": "unit particle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changeunittype",
        "message0": "changeUnitType %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "change unit type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addplayertoplayergroup",
        "message0": "addPlayerToPlayerGroup %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "playergroup",
              "check": "Playergroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playergroup",
        
        "tooltip": "add player to player group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playmusicforplayerrepeatedly",
        "message0": "playMusicForPlayerRepeatedly %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "music",
              "check": "Music",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Music",
        
        "tooltip": "play music for player repeatedly",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showgamesuggestionsforplayer",
        "message0": "showGameSuggestionsForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "show game suggestions",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "ispositioninwall",
        "message0": "isPositionInWall %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "positionx",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "positiony",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "is position in wall",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entitiesinregioninfrontofentityatdistance",
        "message0": "entitiesInRegionInFrontOfEntityAtDistance %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "width",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "height",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "distance",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entitygroup",
        
        "tooltip": "entities in region[width, height] in front of entity at distance",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentityattributeregenerationrate",
        "message0": "setEntityAttributeRegenerationRate %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity attribute regeneration rate",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "lastplayedtimeofplayer",
        "message0": "lastPlayedTimeOfPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "player's last played time",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitselectitematslot",
        "message0": "makeUnitSelectItemAtSlot %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Selectedunit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "slotindex",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit select item at slot",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemtypename",
        "message0": "getItemTypeName %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "name of item type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getmax",
        "message0": "getMax %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "num1",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "num2",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "maximum value between two numbers",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastcreatedunit",
        "message0": "getLastCreatedUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last created unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getrotatespeed",
        "message0": "getRotateSpeed %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "rotate speed of unit type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getownerofitem",
        "message0": "getOwnerOfItem %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "owner of item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunits",
        "message0": "allUnits ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "all units in the game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopusingitem",
        "message0": "stopUsingItem %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "stop using item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitvisible",
        "message0": "makeUnitVisible %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit visible to hostile players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitinvisible",
        "message0": "makeUnitInvisible %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit invisible to hostile players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "break",
        "message0": "break ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "break",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getcurrentammoofitem",
        "message0": "getCurrentAmmoOfItem %1",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "ammo in current magazine of item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getheightofregion",
        "message0": "getHeightOfRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "height of region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changescaleofentitysprite",
        "message0": "changeScaleOfEntitySprite %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "scale",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "change scale of entity's sprite",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "substringof",
        "message0": "substringOf %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "fromindex",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "toindex",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "substring of",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setplayername",
        "message0": "setPlayerName %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "name",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "set player name",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitpickupitematslot",
        "message0": "makeUnitPickupItemAtSlot %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Selectedunit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "item",
              "check": "Item",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "slotindex",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit pick up item at slot",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "dropitemininventoryslot",
        "message0": "dropItemInInventorySlot %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Selectedunit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "slotindex",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "drop item in inventory at slot",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "substring",
        "message0": "subString %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "sourcestring",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "patternstring",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "string contains string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemmaxquantity",
        "message0": "getItemMaxQuantity %1",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "item quantity (max)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "unbanplayerfromchat",
        "message0": "unbanPlayerFromChat %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "unmute player from chat",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "absolutevalueofnumber",
        "message0": "absoluteValueOfNumber %1",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "absolute value of number",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changedescriptionofitem",
        "message0": "changeDescriptionOfItem %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "change description of item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettriggeringunit",
        "message0": "getTriggeringUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last triggering unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getowner",
        "message0": "getOwner %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "owner of a unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedplayer",
        "message0": "selectedPlayer ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "selected player (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlasttoucheditem",
        "message0": "getLastTouchedItem ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "last touched item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlasttouchedprojectile",
        "message0": "getLastTouchedProjectile ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "last touched projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunitsattachedtoitem",
        "message0": "allUnitsAttachedToItem %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "all units attached to item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "sendchatmessagetoplayer",
        "message0": "sendChatMessageToPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "message",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "send chat message to player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playadforeveryone",
        "message0": "playAdForEveryone ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ad",
        
        "tooltip": "play video ad for everyone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hideuitextforplayer",
        "message0": "hideUiTextForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "target",
              "check": "Updateuitext.target",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "hide overlay text for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showuitextforplayer",
        "message0": "showUiTextForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "target",
              "check": "Updateuitext.target",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show overlay text for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playmusic",
        "message0": "playMusic %1",
        "args0": [
          {
              "type": "input_value",
              "name": "music",
              "check": "Music",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Music",
        
        "tooltip": "play music for everyone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "assignplayertype",
        "message0": "assignPlayerType %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "playertype",
              "check": "Playertype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "assign player to player type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allprojectiles",
        "message0": "allProjectiles ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectilegroup",
        
        "tooltip": "all projectiles in the game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playmusicforplayer",
        "message0": "playMusicForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "music",
              "check": "Music",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Music",
        
        "tooltip": "play music for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "condition",
        "message0": "condition %1",
        "args0": [
          {
              "type": "input_value",
              "name": "conditions",
              "check": "Conditions",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "System",
        
        "tooltip": "if / else / then",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitvisibletoneutralplayers",
        "message0": "makeUnitVisibleToNeutralPlayers %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit visible to neutral players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitvisibletofriendlyplayers",
        "message0": "makeUnitVisibleToFriendlyPlayers %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit visible to friendly players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeunitpickupitem",
        "message0": "makeUnitPickupItem %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Selectedunit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "make unit pick up item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "dynamicregion",
        "message0": "dynamicRegion %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "x",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "y",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "width",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "height",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "dynamic region [ x, y, width, height ]",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getentityattribute",
        "message0": "getEntityAttribute %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "entity attribute value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "currenttimestamp",
        "message0": "currentTimeStamp ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "current time",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "givenewitemwithquantitytounit",
        "message0": "giveNewItemWithQuantityToUnit %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "give new item to unit with quantity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getentityvelocityx",
        "message0": "getEntityVelocityX %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get entity velocity x",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "defaultquantityofitemtype",
        "message0": "defaultQuantityOfItemType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "default quantity of item type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getquantityofitemtypeinitemtypegroup",
        "message0": "getQuantityOfItemTypeInItemTypeGroup %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "itemtypegroup",
              "check": "Itemtypegroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "quantity of item type in item type group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getrandomunittypefromunittypegroup",
        "message0": "getRandomUnitTypeFromUnitTypeGroup %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittypegroup",
              "check": "Unittypegroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unittype",
        
        "tooltip": "random unit type from unit type group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedunittype",
        "message0": "selectedUnitType ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unittype",
        
        "tooltip": "selected unit type (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getnumberofitemspresent",
        "message0": "getNumberOfItemsPresent ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number of items present",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getmin",
        "message0": "getMin %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "num1",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "num2",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "minimum value between two numbers",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedunit",
        "message0": "selectedUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "selected unit (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastoverlappingprojectile",
        "message0": "getLastOverlappingProjectile ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "last overlapping projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettriggeringattribute",
        "message0": "getTriggeringAttribute ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Attribute",
        
        "tooltip": "last triggering attribute",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunitsmountedonunit",
        "message0": "allUnitsMountedOnUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "all units mounted on unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunitsinregion",
        "message0": "allUnitsInRegion %1",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "all units in region",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "dropallitems",
        "message0": "dropAllItems %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "drop all items",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "useitemonce",
        "message0": "useItemOnce %1",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "use item once",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopacceptingplayers",
        "message0": "stopAcceptingPlayers ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "stop accepting players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentityvelocityatangle",
        "message0": "setEntityVelocityAtAngle %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "speed",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity velocity at angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setentityattributemax",
        "message0": "setEntityAttributeMax %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "set entity attribute max value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getvalueofplayervariable",
        "message0": "getValueOfPlayerVariable %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "variable",
              "check": "Playervariable",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        
        
        "tooltip": "player variable",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allregions",
        "message0": "allRegions ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Regiongroup",
        
        "tooltip": "all regions in the game",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "maxvalueofitemtype",
        "message0": "maxValueOfItemType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "max quantity of item type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "anglebetweenmouseandwindowcenter",
        "message0": "angleBetweenMouseAndWindowCenter %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "angle between player mouse cursor and center of window",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setplayerattributemin",
        "message0": "setPlayerAttributeMin %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "attributetype",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "set player attribute min value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeplayertradewithplayer",
        "message0": "makePlayerTradeWithPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "playera",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "playerb",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "make player initiate item trade with player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getexponent",
        "message0": "getExponent %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "base",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "power",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get exponent value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastattackedunit",
        "message0": "getLastAttackedUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last attacked unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastattackingunit",
        "message0": "getLastAttackingUnit ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "last attacking unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "updateuitextfortimeforplayer",
        "message0": "updateUiTextForTimeForPlayer %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "target",
              "check": "Updateuitext.target",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "time",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "update overlay text for X milliseconds",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getnumberofunitsofunittype",
        "message0": "getNumberOfUnitsOfUnitType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number of units of unit type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "aimovetoposition",
        "message0": "aiMoveToPosition %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "command AI unit to move to a position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "aiattackunit",
        "message0": "aiAttackUnit %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "targetunit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "command AI unit to attack a unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getnumberofplayersofplayertype",
        "message0": "getNumberOfPlayersOfPlayerType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "playertype",
              "check": "Playertype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number of players of player type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changesensorradius",
        "message0": "changeSensorRadius %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "sensor",
              "check": "Sensor",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "radius",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Sensor",
        
        "tooltip": "change sensor radius",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "ownerunitofsensor",
        "message0": "ownerUnitOfSensor %1",
        "args0": [
          {
              "type": "input_value",
              "name": "sensor",
              "check": "Sensor",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "owner unit of sensor",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getsensorofunit",
        "message0": "getSensorOfUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Sensor",
        
        "tooltip": "get sensor of unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettriggeringsensor",
        "message0": "getTriggeringSensor ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Sensor",
        
        "tooltip": "last triggering sensor",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastchatmessagesentbyplayer",
        "message0": "getLastChatMessageSentByPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "last chat message sent by player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "loadplayerdataandapplyit",
        "message0": "loadPlayerDataAndApplyIt %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "apply loaded user data to player and unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "createfloatingtext",
        "message0": "createFloatingText %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "text",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "color",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "create floating text",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlengthofstring",
        "message0": "getLengthOfString %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "length of string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setlastattackedunit",
        "message0": "setLastAttackedUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "set last attacked unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setlastattackingunit",
        "message0": "setLastAttackingUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "set last attacking unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setitemfirerate",
        "message0": "setItemFireRate %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "set fire rate of item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applyimpulseonentityxy",
        "message0": "applyImpulseOnEntityXY %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "impulsex",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "impulsey",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply impulse on entity XY",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "tolowercase",
        "message0": "toLowerCase %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "to lower case",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stringstartswith",
        "message0": "stringStartsWith %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "sourcestring",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "patternstring",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "string starts with string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stringendswith",
        "message0": "stringEndsWith %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "sourcestring",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "patternstring",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "string ends with string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "replacevaluesinstring",
        "message0": "replaceValuesInString %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "matchstring",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "sourcestring",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "newstring",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "replace value in string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlastattackingitem",
        "message0": "getLastAttackingItem ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "last attacking item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playsoundforplayer",
        "message0": "playSoundForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "sound",
              "check": "Sound",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "play sound for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopsoundforplayer",
        "message0": "stopSoundForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "sound",
              "check": "Sound",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "stop sound for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showdismissibleinputmodaltoplayer",
        "message0": "showDismissibleInputModalToPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "inputlabel",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show dismissible input modal to player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gettimestring",
        "message0": "getTimeString %1",
        "args0": [
          {
              "type": "input_value",
              "name": "seconds",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get time string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setitemname",
        "message0": "setItemName %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "name",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "set item name",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changeiteminventoryimage",
        "message0": "changeItemInventoryImage %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "url",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "set item inventory image",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemdescription",
        "message0": "getItemDescription %1",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get item description",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addattributebufftounit",
        "message0": "addAttributeBuffToUnit %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "time",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "add attribute buff to unit for x seconds",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addpercentageattributebufftounit",
        "message0": "addPercentageAttributeBuffToUnit %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "time",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "add attribute % buff to unit for x seconds",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stununit",
        "message0": "stunUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "stun unit (DEPRECATED)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "removestunfromunit",
        "message0": "removeStunFromUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "remove stun from unit (DEPRECATED)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setlastattackingitem",
        "message0": "setLastAttackingItem %1",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "set last attacking item",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "muteplayermicrophone",
        "message0": "mutePlayerMicrophone %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "mute player's microphone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "unmuteplayermicrophone",
        "message0": "unmutePlayerMicrophone %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "unmute player's microphone",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "sendpostrequest",
        "message0": "sendPostRequest %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "url",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "varname",
              "check": "Variable",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "System",
        
        "tooltip": "send post request",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "loadunitdatafromstring",
        "message0": "loadUnitDataFromString %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "load unit data from a string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "loadplayerdatafromstring",
        "message0": "loadPlayerDataFromString %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "load player data from string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunitdata",
        "message0": "getUnitData %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get unit data",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayerdata",
        "message0": "getPlayerData %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get player data",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunitid",
        "message0": "getUnitId %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get unit id",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayerid",
        "message0": "getPlayerId %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get player id",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunitfromid",
        "message0": "getUnitFromId %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "get unit from id",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayerfromid",
        "message0": "getPlayerFromId %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Player",
        
        "tooltip": "get player from id",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getstringarraylength",
        "message0": "getStringArrayLength %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get json array length",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getstringarrayelement",
        "message0": "getStringArrayElement %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get json array element",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "insertstringarrayelement",
        "message0": "insertStringArrayElement %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "insert element into json array",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "updatestringarrayelement",
        "message0": "updateStringArrayElement %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "string",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "update json array element",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "removestringarrayelement",
        "message0": "removeStringArrayElement %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "remove json array element",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "removeallattributebuffs",
        "message0": "removeAllAttributeBuffs %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "remove all attribute buffs from unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changeinventoryslotcolor",
        "message0": "changeInventorySlotColor %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Item",
        
        "tooltip": "change item inventory slot color",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setownerunitofprojectile",
        "message0": "setOwnerUnitOfProjectile %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "projectile",
              "check": "Projectile",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "set source unit of a projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "thisentity",
        "message0": "thisEntity ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "this entity (of entity-script)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entityname",
        "message0": "entityName %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "name of entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedinventoryslot",
        "message0": "selectedInventorySlot %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "selected inventory slot",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "log10",
        "message0": "log10 %1",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "log (base 10)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addbotplayer",
        "message0": "addBotPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "name",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "add a new bot player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "botplayers",
        "message0": "botPlayers ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playergroup",
        
        "tooltip": "bot players",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "enableai",
        "message0": "enableAI %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "enable AI",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "disableai",
        "message0": "disableAI %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "disable AI",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "isaienabled",
        "message0": "isAIEnabled %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "unit has AI enabled",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "isbotplayer",
        "message0": "isBotPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player is controlled by a bot",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "iscomputerplayer",
        "message0": "isComputerPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player is controlled by computer",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entitiesbetweentwopositions",
        "message0": "entitiesBetweenTwoPositions %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "positiona",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "positionb",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entitygroup",
        
        "tooltip": "entities between two positions",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "unitsensorradius",
        "message0": "unitSensorRadius %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "unit sensor radius",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "aigoidle",
        "message0": "aiGoIdle %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "command AI unit to go idle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "targetunit",
        "message0": "targetUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "target unit of a unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "sendcoinstoplayer",
        "message0": "sendCoinsToPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "coins",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Coins",
        
        "tooltip": "send Modd Coins to player (player pays fee)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addchatfilter",
        "message0": "addChatFilter %1",
        "args0": [
          {
              "type": "input_value",
              "name": "words",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "add words to chat filter",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "numbertostring",
        "message0": "numberToString %1",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "string converted from number",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "sendcoinstoplayer2",
        "message0": "sendCoinsToPlayer2 %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "coins",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Coins",
        
        "tooltip": "send Modd Coins to player (owner pays fee)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playeriscreator",
        "message0": "playerIsCreator %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "player is the creator",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setmaxattackrange",
        "message0": "setMaxAttackRange %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "set unit's max attack range",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setletgodistance",
        "message0": "setLetGoDistance %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "set unit's let go distance",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setmaxtraveldistance",
        "message0": "setMaxTravelDistance %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ai",
        
        "tooltip": "set unit's max travel distance",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayerselectedunit",
        "message0": "getPlayerSelectedUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "get selected unit of player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "todegrees",
        "message0": "toDegrees %1",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "convert radians to degrees",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "toradians",
        "message0": "toRadians %1",
        "args0": [
          {
              "type": "input_value",
              "name": "number",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "convert degrees into radians",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getpositioninfrontofposition",
        "message0": "getPositionInFrontOfPosition %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "position",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "distance",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "get position in front of position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "editmaptile",
        "message0": "editMapTile %1,%2,%3,%4,%5,%6,%7",
        "args0": [
          {
              "type": "input_value",
              "name": "gid",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "layer",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "x",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "y",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Multiple",
        
        "tooltip": "edit map tile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "loadmapfromstring",
        "message0": "loadMapFromString %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Multiple",
        
        "tooltip": "load map from string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getmapjson",
        "message0": "getMapJson ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get map json",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "teleportentity",
        "message0": "teleportEntity %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "teleport entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "foralldebris",
        "message0": "forAllDebris %1",
        "args0": [
          {
              "type": "input_value",
              "name": "debrisgroup",
              "check": "Debrisgroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all debris in a debris group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "roleexistsforplayer",
        "message0": "roleExistsForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "name",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "role name exists for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "emitparticlesfromentity",
        "message0": "emitParticlesFromEntity %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "particletype",
              "check": "Particletype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Particle",
        
        "tooltip": "create particle emitter on entity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "emitparticlesatposition",
        "message0": "emitParticlesAtPosition %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "particletype",
              "check": "Particletype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Particle",
        
        "tooltip": "create particle emitter at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "editmaptiles",
        "message0": "editMapTiles %1,%2,%3,%4,%5,%6,%7,%8,%9,%10,%11",
        "args0": [
          {
              "type": "input_value",
              "name": "gid",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "layer",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "x",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "y",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "width",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "height",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Multiple",
        
        "tooltip": "edit map tiles",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getmaptileid",
        "message0": "getMapTileId %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "x",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "y",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "layer",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get map tile ID at position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stringisanumber",
        "message0": "stringIsANumber %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "string is a number",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setsourceitemofprojectile",
        "message0": "setSourceItemOfProjectile %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "projectile",
              "check": "Projectile",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectile",
        
        "tooltip": "set source item of a projectile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getglobalvariable",
        "message0": "getGlobalVariable %1",
        "args0": [
          {
              "type": "input_value",
              "name": "name",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "System",
        
        "tooltip": "global variable by name",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "lastreceivedpostresponse",
        "message0": "lastReceivedPostResponse ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "last received POST response",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "lastupdatedvariablename",
        "message0": "lastUpdatedVariableName ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "last updated variable name",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getvariable",
        "message0": "getVariable %1",
        "args0": [
          {
              "type": "input_value",
              "name": "name",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Multiple",
        
        "tooltip": "global variable",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stringtoobject",
        "message0": "stringToObject %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "object converted from string",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "elementfromobject",
        "message0": "elementFromObject %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "key",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "element from object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "objecttostring",
        "message0": "objectToString %1",
        "args0": [
          {
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "string converted from object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "removeelement",
        "message0": "removeElement %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "key",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "remove element from object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "makeplayersendchatmessage",
        "message0": "makePlayerSendChatMessage %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "message",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Chat",
        
        "tooltip": "make player send chat message",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "emptyobject",
        "message0": "emptyObject ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "empty object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addstringelement",
        "message0": "addStringElement %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "key",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "add (string) element into object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "elementcount",
        "message0": "elementCount %1",
        "args0": [
          {
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "number of elements in object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addobjectelement",
        "message0": "addObjectElement %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "key",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Object",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "add (object) element into object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "requestpost",
        "message0": "requestPost %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "data",
              "check": "Object",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "url",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "varname",
              "check": "Variable",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "System",
        
        "tooltip": "send post request (new version)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "unitiscarryingitemtype",
        "message0": "unitIsCarryingItemType %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "unit is carrying an item of item type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "startcastingability",
        "message0": "startCastingAbility %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "ability",
              "check": "Ability",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "start casting ability",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopcastingability",
        "message0": "stopCastingAbility %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "ability",
              "check": "Ability",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "stop casting ability",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "applytorqueonentitytofaceposition",
        "message0": "applyTorqueOnEntityToFacePosition %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "force",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "position",
              "check": "Position",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Entity",
        
        "tooltip": "apply torque on entity to face position",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changeregioncolor",
        "message0": "changeRegionColor %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "region",
              "check": "Region",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "inside",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "alpha",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "change region color",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "startmovingunitup",
        "message0": "startMovingUnitUp %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "move unit up",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "startmovingunitdown",
        "message0": "startMovingUnitDown %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "move unit down",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "startmovingunitleft",
        "message0": "startMovingUnitLeft %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "move unit left",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "startmovingunitright",
        "message0": "startMovingUnitRight %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "move unit right",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopmovingunitx",
        "message0": "stopMovingUnitX %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "stop unit X",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopmovingunity",
        "message0": "stopMovingUnitY %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "stop unit Y",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "openbackpackforplayer",
        "message0": "openBackpackForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "open backpack for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "closebackpackforplayer",
        "message0": "closeBackpackForPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "close backpack for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setunitnamelabelcolor",
        "message0": "setUnitNameLabelColor %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "color",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "set unit name label color",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getcameraposition",
        "message0": "getCameraPosition ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "camera position (local)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getcamerawidth",
        "message0": "getCameraWidth ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "camera width (local)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getcameraheight",
        "message0": "getCameraHeight ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "camera height (local)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allunitsofunittype",
        "message0": "allUnitsOfUnitType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unitgroup",
        
        "tooltip": "all units of unit type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallunits",
        "message0": "forAllUnits %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unitgroup",
              "check": "Unitgroup",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all units in a unit group",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allitemsofitemtype",
        "message0": "allItemsOfItemType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemgroup",
        
        "tooltip": "all items of item type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setunitnamelabelcolorforplayer",
        "message0": "setUnitNameLabelColorForPlayer %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "color",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "set unit name label color for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getdefaultattributevalueofunittype",
        "message0": "getDefaultAttributeValueOfUnitType %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "attribute",
              "check": "Attributetype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "default attribute value of a unit type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playercamerastoptracking",
        "message0": "playerCameraStopTracking %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Camera",
        
        "tooltip": "make player camera to stop tracking a unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "hideuielementforplayer",
        "message0": "hideUiElementForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "elementid",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "hide UI element for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "showuielementforplayer",
        "message0": "showUiElementForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "elementid",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "show UI element for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setuielementhtml",
        "message0": "setUIElementHtml %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "htmlstr",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "elementid",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "set innerHTML of UI element with ID",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "lastclickeduielementid",
        "message0": "lastClickedUiElementId %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "last player clicked UI element ID",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "appendrealtimecssforplayer",
        "message0": "appendRealtimeCSSForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "append realtime CSS for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "updaterealtimecssforplayer",
        "message0": "updateRealtimeCSSForPlayer %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "update realtime CSS for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "realtimecssofplayer",
        "message0": "realtimeCSSOfPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "realtime CSS of player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "mathceiling",
        "message0": "mathCeiling %1",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "math ceiling",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "stopmovingunit",
        "message0": "stopMovingUnit %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unit",
        
        "tooltip": "stop moving unit",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "touppercase",
        "message0": "toUpperCase %1",
        "args0": [
          {
              "type": "input_value",
              "name": "string",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "to upper case",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "gethighscoreofplayer",
        "message0": "getHighScoreOfPlayer %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get player high score",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "isunitmoving",
        "message0": "isUnitMoving %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unit",
              "check": "Unit",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "is unit moving",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forin",
        "message0": "forIn %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "variablenamemain",
              "check": "Variable",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "variablenamesource",
              "check": "Variable",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for in loop",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addclasstouielement",
        "message0": "addClassToUIElement %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "classname",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "elementid",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "add class to UI element",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "removeclassfromuielement",
        "message0": "removeClassFromUIElement %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "classname",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "elementid",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Ui",
        
        "tooltip": "remove class from UI Element",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "isplayerclient",
        "message0": "isPlayerClient %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "is player (local) client",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "setcameradeadzone",
        "message0": "setCameraDeadzone %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "width",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "height",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Camera",
        
        "tooltip": "set camera deadzone (local)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "purchaseitemfromshop",
        "message0": "purchaseItemFromShop %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "Itemtype",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "shop",
              "check": "Shop",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Shop",
        
        "tooltip": "trigger purchase of item from shop for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getunittype",
        "message0": "getUnitType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Unittype",
        
        "tooltip": "get unit type from string id",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getitemtype",
        "message0": "getItemType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "itemtype",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Itemtype",
        
        "tooltip": "get item type from string id",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getprojectiletype",
        "message0": "getProjectileType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "projectiletype",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectiletype",
        
        "tooltip": "get projectile type from string id",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getsecondarytouchposition",
        "message0": "getSecondaryTouchPosition ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "mobile secondary touch position (local)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "allprojectilesofprojectiletype",
        "message0": "allProjectilesOfProjectileType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "projectiletype",
              "check": "Projectiletype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Projectilegroup",
        
        "tooltip": "all projectiles of projectile type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "unittypewidth",
        "message0": "unitTypeWidth %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "unit type's default width",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "unittypeheight",
        "message0": "unitTypeHeight %1",
        "args0": [
          {
              "type": "input_value",
              "name": "unittype",
              "check": "Unittype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "unit type's default height",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "notvalue",
        "message0": "notValue %1",
        "args0": [
          {
              "type": "input_value",
              "name": "boolean",
              "check": "Boolean",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "not value",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "isplayeronmobile",
        "message0": "isPlayerOnMobile %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "is player on mobile",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getplayerusername",
        "message0": "getPlayerUsername %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "get player username",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "repeatwithdelay",
        "message0": "repeatWithDelay %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "count",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "delay",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "repeat X times with delay",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "entityfacingangle",
        "message0": "entityFacingAngle %1",
        "args0": [
          {
              "type": "input_value",
              "name": "entity",
              "check": "Entity",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "entity's facing angle",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playersofplayertype",
        "message0": "playersOfPlayerType %1",
        "args0": [
          {
              "type": "input_value",
              "name": "playertype",
              "check": "Playertype",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Playergroup",
        
        "tooltip": "all players of player type",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "sendsecurepostrequest",
        "message0": "sendSecurePostRequest %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "apicredentials",
              "check": "Secrets",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "data",
              "check": "Object",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "varname",
              "check": "Variable",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "System",
        
        "tooltip": "send secure post request",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "openskinshop",
        "message0": "openSkinShop %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Shop",
        
        "tooltip": "open skin shop for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "openskinsubmissionpage",
        "message0": "openSkinSubmissionPage %1",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Shop",
        
        "tooltip": "open skin submission page for player",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playercamerasetpitch",
        "message0": "playerCameraSetPitch %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "angle",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Camera",
        
        "tooltip": "set player camera pitch",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getregionbyname",
        "message0": "getRegionByName %1",
        "args0": [
          {
              "type": "input_value",
              "name": "name",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Region",
        
        "tooltip": "region with matching name",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "changelayeropacity",
        "message0": "changeLayerOpacity %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "layer",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "alpha",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Multiple",
        
        "tooltip": "change layer opacity",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "forallelementsinobject",
        "message0": "forAllElementsInObject %1",
        "args0": [
          {
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Loop",
        
        "tooltip": "for all elements in an object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedelement",
        "message0": "selectedElement ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "selected element (from the loop)",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "objectcontainselement",
        "message0": "objectContainsElement %1,%2,%3",
        "args0": [
          {
              "type": "input_value",
              "name": "object",
              "check": "Object",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "key",
              "check": "String",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "object contains element",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "selectedelementskey",
        "message0": "selectedElementsKey ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "String",
        
        "tooltip": "selected element's key",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "playmusicforplayerattime",
        "message0": "playMusicForPlayerAtTime %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "music",
              "check": "Music",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "player",
              "check": "Player",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "time",
              "check": "Time",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Music",
        
        "tooltip": "play music for player at time",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getserverage",
        "message0": "getServerAge ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get server age",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getserverstarttime",
        "message0": "getServerStartTime ",
        "args0": [
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "get server start time",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "mathround",
        "message0": "mathRound %1",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "math round",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "addnumberelement",
        "message0": "addNumberElement %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "key",
              "check": "String",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "value",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "object",
              "check": "Object",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Object",
        
        "tooltip": "add (number) element into object",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "mathsign",
        "message0": "mathSign %1",
        "args0": [
          {
              "type": "input_value",
              "name": "value",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "math sign",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "itemfiresprojectiles",
        "message0": "itemFiresProjectiles %1",
        "args0": [
          {
              "type": "input_value",
              "name": "item",
              "check": "Item",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Boolean",
        
        "tooltip": "item fires projectiles",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "lerp",
        "message0": "lerp %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "valuea",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "valueb",
              "check": "Number",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "alpha",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Number",
        
        "tooltip": "lerp",
        "helpUrl": ""
      });
      actionsDefinition.push({
        "type": "getlerpposition",
        "message0": "getLerpPosition %1,%2,%3,%4,%5",
        "args0": [
          {
              "type": "input_value",
              "name": "positiona",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "positionb",
              "check": "Position",
            },{
              "type": "input_dummy"
            },{
              "type": "input_value",
              "name": "alpha",
              "check": "Number",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "output": "Position",
        
        "tooltip": "lerp position",
        "helpUrl": ""
      });
      
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(actionsDefinition)
