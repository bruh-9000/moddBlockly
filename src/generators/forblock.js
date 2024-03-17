/**
      * @license
      * Copyright 2023 Google LLC
      * SPDX-License-Identifier: Apache-2.0
      */
     
     import { FieldTextInput } from 'blockly';
     import {Order} from 'blockly/javascript';
      export const forBlock = {
      getiteminfrontofunit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemInFrontOfUnit(${entity})`
},
selectedprojectile: function (block, generator) {
  return `selectedProjectile()`
},
getattributetypeofattribute: function (block, generator) {
  const entity = generator.valueToCode(block, 'attribute', Order.NONE) || "";
  return `getAttributeTypeOfAttribute(${entity})`
},
playadforplayer: function (block, generator) {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playAdForPlayer(${entity})`
},
getrandomnumberbetween: function (block, generator) {
  const min = generator.valueToCode(block, 'number', Order.NONE) || "";
  const max = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getRandomNumberBetween(${min, max})`
},
settimeout: function (block, generator) {
  const duration = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setTimeOut(${duration})`
},
unitsfacingangle: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `unitsFacingAngle(${unit})`
},
getmapheight: function (block, generator) {
  return `getMapHeight()`
},
getentitytype: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityType(${entity})`
},
getselectedentity: function (block, generator) {
  return `getSelectedEntity()`
},
rotateentitytofaceposition: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `rotateEntityToFacePosition(${entity, position})`
},
destroyentity: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `destroyEntity(${entity})`
},
setentitydepth: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityDepth(${entity, value})`
},
getitematslot: function (block, generator) {
  const slot = generator.valueToCode(block, 'number', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemAtSlot(${slot, unit})`
},
hideunitfromplayer: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUnitFromPlayer(${entity, player})`
},
showunittoplayer: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUnitToPlayer(${entity, player})`
},
entitiescollidingwithlastraycast: function (block, generator) {
  return `entitiesCollidingWithLastRaycast()`
},
getlastpurchasedunit: function (block, generator) {
  return `getLastPurchasedUnit()`
},
sendchatmessage: function (block, generator) {
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `sendChatMessage(${message})`
},
playsoundatposition: function (block, generator) {
  const sound = generator.valueToCode(block, 'sound', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `playSoundAtPosition(${sound, position})`
},
xycoordinate: function (block, generator) {
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `xyCoordinate(${x, y})`
},
tofixed: function (block, generator) {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const precision = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `toFixed(${value, precision})`
},
getentitystate: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityState(${entity})`
},
dropitematposition: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `dropItemAtPosition(${item, position})`
},
applyforceonentityangle: function (block, generator) {
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `applyForceOnEntityAngle(${force, entity, angle})`
},
showinputmodaltoplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const inputLabel = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `showInputModalToPlayer(${player, inputlabel})`
},
getitemquantity: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemQuantity(${item})`
},
isplayerloggedin: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isPlayerLoggedIn(${player})`
},
opendialogueforplayer: function (block, generator) {
  const dialogue = generator.valueToCode(block, 'dialogue', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openDialogueForPlayer(${dialogue, player})`
},
continue: function (block, generator) {
  return `continue()`
},
openwebsiteforplayer: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openWebsiteForPlayer(${string, player})`
},
setentitylifespan: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const lifeSpan = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityLifeSpan(${entity, lifespan})`
},
selecteditem: function (block, generator) {
  return `selectedItem()`
},
hideunitnamelabel: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `hideUnitNameLabel(${entity})`
},
settriggeringunit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setTriggeringUnit(${entity})`
},
createunitatposition: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createUnitAtPosition(${unittype, entity, position, angle})`
},
hideuitextforeveryone: function (block, generator) {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  return `hideUiTextForEveryone(${target})`
},
playersarefriendly: function (block, generator) {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playersAreFriendly(${playera, playerb})`
},
hidegamesuggestionsforplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideGameSuggestionsForPlayer(${player})`
},
cos: function (block, generator) {
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `cos(${angle})`
},
transformregiondimensions: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `transformRegionDimensions(${region, x, y, width, height})`
},
makeunitinvisibletofriendlyplayers: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitInvisibleToFriendlyPlayers(${entity})`
},
setentityattributemin: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttributeMin(${attribute, entity, value})`
},
entityheight: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityHeight(${entity})`
},
allunitsownedbyplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `allUnitsOwnedByPlayer(${player})`
},
showinvitefriendsmodal: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showInviteFriendsModal(${player})`
},
showcustommodaltoplayer: function (block, generator) {
  const htmlContent = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showCustomModalToPlayer(${htmlcontent, player})`
},
getlastplayerselectingdialogueoption: function (block, generator) {
  return `getLastPlayerSelectingDialogueOption()`
},
playerattributemax: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerAttributeMax(${attribute, entity})`
},
gettriggeringitem: function (block, generator) {
  return `getTriggeringItem()`
},
getitemparticle: function (block, generator) {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemParticle(${particletype, entity})`
},
allprojectilesattachedtounit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allProjectilesAttachedToUnit(${entity})`
},
showuitextforeveryone: function (block, generator) {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  return `showUiTextForEveryone(${target})`
},
forallitems: function (block, generator) {
  const itemGroup = generator.valueToCode(block, 'itemGroup', Order.NONE) || "";
  return `forAllItems(${itemgroup})`
},
removeplayerfromplayergroup: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerGroup = generator.valueToCode(block, 'playerGroup', Order.NONE) || "";
  return `removePlayerFromPlayerGroup(${player, playergroup})`
},
getplayerattribute: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerAttribute(${attribute, entity})`
},
playeriscontrolledbyhuman: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerIsControlledByHuman(${player})`
},
setunitowner: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `setUnitOwner(${unit, player})`
},
getmapwidth: function (block, generator) {
  return `getMapWidth()`
},
updateitemquantity: function (block, generator) {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  const quantity = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `updateItemQuantity(${entity, quantity})`
},
applyforceonentityanglelt: function (block, generator) {
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `applyForceOnEntityAngleLT(${force, entity, angle})`
},
setentitystate: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const state = generator.valueToCode(block, 'state', Order.NONE) || "";
  return `setEntityState(${entity, state})`
},
entitywidth: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityWidth(${entity})`
},
hideunitinplayerminimap: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUnitInPlayerMinimap(${unit, player})`
},
selecteditemtype: function (block, generator) {
  return `selectedItemType()`
},
getplayercount: function (block, generator) {
  return `getPlayerCount()`
},
getitemcurrentlyheldbyunit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemCurrentlyHeldByUnit(${entity})`
},
allitemsdroppedonground: function (block, generator) {
  return `allItemsDroppedOnGround()`
},
return: function (block, generator) {
  return `return()`
},
runscript: function (block, generator) {
  const scriptName = generator.valueToCode(block, 'script', Order.NONE) || "";
  return `runScript(${scriptname})`
},
addunittounitgroup: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const unitGroup = generator.valueToCode(block, 'unitGroup', Order.NONE) || "";
  return `addUnitToUnitGroup(${unit, unitgroup})`
},
humanplayers: function (block, generator) {
  return `humanPlayers()`
},
lastuseditem: function (block, generator) {
  return `lastUsedItem()`
},
playercustominput: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerCustomInput(${player})`
},
arctan: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `arctan(${number})`
},
concat: function (block, generator) {
  const textA = generator.valueToCode(block, 'string,number', Order.NONE) || "";
  const textB = generator.valueToCode(block, 'string,number', Order.NONE) || "";
  return `concat(${texta, textb})`
},
getplayername: function (block, generator) {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerName(${entity})`
},
getsourceitemofprojectile: function (block, generator) {
  const entity = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  return `getSourceItemOfProjectile(${entity})`
},
getunittypeofunit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitTypeOfUnit(${entity})`
},
getitemtypeofitem: function (block, generator) {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemTypeOfItem(${entity})`
},
gettriggeringregion: function (block, generator) {
  return `getTriggeringRegion()`
},
playercamerasetzoom: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const zoom = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `playerCameraSetZoom(${player, zoom})`
},
mathfloor: function (block, generator) {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathFloor(${value})`
},
setunitnamelabel: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setUnitNameLabel(${unit, name})`
},
getunittypename: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getUnitTypeName(${unittype})`
},
openshopforplayer: function (block, generator) {
  const shop = generator.valueToCode(block, 'shop', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openShopForPlayer(${shop, player})`
},
getycoordinateofregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getYCoordinateOfRegion(${region})`
},
squareroot: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `squareRoot(${number})`
},
closedialogueforplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `closeDialogueForPlayer(${player})`
},
comment: function (block, generator) {
  return `comment()`
},
createentityatpositionwithdimensions: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createEntityAtPositionWithDimensions(${entity, position, player, height, width, angle})`
},
increasevariablebynumber: function (block, generator) {
  const variable = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `increaseVariableByNumber(${variable, number})`
},
getmousecursorposition: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getMouseCursorPosition(${player})`
},
getlastoverlappingunit: function (block, generator) {
  return `getLastOverlappingUnit()`
},
allitems: function (block, generator) {
  return `allItems()`
},
allitemsattachedtounit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allItemsAttachedToUnit(${entity})`
},
getentiremapregion: function (block, generator) {
  return `getEntireMapRegion()`
},
playercameratrackunit: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `playerCameraTrackUnit(${player, unit})`
},
castability: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const abilityName = generator.valueToCode(block, 'ability', Order.NONE) || "";
  return `castAbility(${entity, abilityname})`
},
playersarehostile: function (block, generator) {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playersAreHostile(${playera, playerb})`
},
allitemsownedbyunit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allItemsOwnedByUnit(${entity})`
},
computerplayers: function (block, generator) {
  return `computerPlayers()`
},
playentityanimation: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const animation = generator.valueToCode(block, 'animationType', Order.NONE) || "";
  return `playEntityAnimation(${entity, animation})`
},
while: function (block, generator) {
  const conditions = generator.valueToCode(block, 'conditions', Order.NONE) || "";
  return `while(${conditions})`
},
allentities: function (block, generator) {
  return `allEntities()`
},
lastpurchasedunittypetid: function (block, generator) {
  return `lastPurchasedUnitTypetId()`
},
applyforceonentityxy: function (block, generator) {
  const forcex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const forcey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyForceOnEntityXY(${forcex, forcey, entity})`
},
showunitinplayerminimap: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUnitInPlayerMinimap(${unit, color, player})`
},
saveplayerdata: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `savePlayerData(${player})`
},
hideunitnamelabelfromplayer: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUnitNameLabelFromPlayer(${entity, player})`
},
regionoverlapswithregion: function (block, generator) {
  const regionA = generator.valueToCode(block, 'region', Order.NONE) || "";
  const regionB = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `regionOverlapsWithRegion(${regiona, regionb})`
},
allitemtypesingame: function (block, generator) {
  return `allItemTypesInGame()`
},
gettriggeringplayer: function (block, generator) {
  return `getTriggeringPlayer()`
},
getprojectiletypeofprojectile: function (block, generator) {
  const entity = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  return `getProjectileTypeOfProjectile(${entity})`
},
allplayers: function (block, generator) {
  return `allPlayers()`
},
setplayerattribute: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttribute(${attribute, entity, value})`
},
updateuitextforplayer: function (block, generator) {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `updateUiTextForPlayer(${target, value, entity})`
},
showunitnamelabel: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `showUnitNameLabel(${entity})`
},
closeshopforplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `closeShopForPlayer(${player})`
},
repeat: function (block, generator) {
  const count = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `repeat(${count})`
},
stopmusic: function (block, generator) {
  return `stopMusic()`
},
setvelocityofentityxy: function (block, generator) {
  const velocityx = generator.valueToCode(block, 'number', Order.NONE) || "";
  const velocityy = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `setVelocityOfEntityXY(${velocityx, velocityy, entity})`
},
selectedregion: function (block, generator) {
  return `selectedRegion()`
},
showunitnamelabeltoplayer: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUnitNameLabelToPlayer(${entity, player})`
},
spawnitem: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `spawnItem(${itemtype, position})`
},
createitemwithmaxquantityatposition: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `createItemWithMaxQuantityAtPosition(${itemtype, position})`
},
getrandomitemtypefromitemtypegroup: function (block, generator) {
  const itemTypeGroup = generator.valueToCode(block, 'itemTypeGroup', Order.NONE) || "";
  return `getRandomItemTypeFromItemTypeGroup(${itemtypegroup})`
},
getlastoverlappedunit: function (block, generator) {
  return `getLastOverlappedUnit()`
},
showmenu: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showMenu(${player})`
},
startacceptingplayers: function (block, generator) {
  return `startAcceptingPlayers()`
},
forallentities: function (block, generator) {
  const entityGroup = generator.valueToCode(block, 'entityGroup', Order.NONE) || "";
  return `forAllEntities(${entitygroup})`
},
makeplayerselectunit: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makePlayerSelectUnit(${player, unit})`
},
setentityattribute: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttribute(${attribute, entity, value})`
},
getlastcreateditem: function (block, generator) {
  return `getLastCreatedItem()`
},
getlastcreatedprojectile: function (block, generator) {
  return `getLastCreatedProjectile()`
},
forallitemtypes: function (block, generator) {
  const itemTypeGroup = generator.valueToCode(block, 'itemTypeGroup', Order.NONE) || "";
  return `forAllItemTypes(${itemtypegroup})`
},
createentityforplayeratpositionwithdimensions: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createEntityForPlayerAtPositionWithDimensions(${entity, player, position, height, width, angle})`
},
getunitcount: function (block, generator) {
  return `getUnitCount()`
},
getlasttouchingunit: function (block, generator) {
  return `getLastTouchingUnit()`
},
getlastoverlappingitem: function (block, generator) {
  return `getLastOverlappingItem()`
},
getitemininventoryslot: function (block, generator) {
  const slot = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemInInventorySlot(${slot, entity})`
},
updateuitextforeveryone: function (block, generator) {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `updateUiTextForEveryone(${target, value})`
},
forallprojectiles: function (block, generator) {
  const projectileGroup = generator.valueToCode(block, 'projectileGroup', Order.NONE) || "";
  return `forAllProjectiles(${projectilegroup})`
},
playertypeofplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerTypeOfPlayer(${player})`
},
anglebetweenpositions: function (block, generator) {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `angleBetweenPositions(${positiona, positionb})`
},
stopmusicforplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `stopMusicForPlayer(${player})`
},
positioncamera: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `positionCamera(${player, position})`
},
createprojectileatposition: function (block, generator) {
  const projectileType = generator.valueToCode(block, 'projectileType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createProjectileAtPosition(${projectiletype, position, force, angle})`
},
getwidthofregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getWidthOfRegion(${region})`
},
showmenuandselectcurrentserver: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showMenuAndSelectCurrentServer(${player})`
},
getsourceunitofprojectile: function (block, generator) {
  const entity = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  return `getSourceUnitOfProjectile(${entity})`
},
setfadingtextofunit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const text = generator.valueToCode(block, 'string', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setFadingTextOfUnit(${unit, text, color})`
},
changescaleofentitybody: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const scale = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeScaleOfEntityBody(${entity, scale})`
},
entitybounds: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityBounds(${entity})`
},
entityattributemin: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityAttributeMin(${attribute, entity})`
},
forallregions: function (block, generator) {
  const regionGroup = generator.valueToCode(block, 'regionGroup', Order.NONE) || "";
  return `forAllRegions(${regiongroup})`
},
rotateentitytoradianslt: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const radians = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `rotateEntityToRadiansLT(${entity, radians})`
},
stringtonumber: function (block, generator) {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringToNumber(${value})`
},
setplayerattributemax: function (block, generator) {
  const attributeType = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttributeMax(${attributetype, player, number})`
},
setplayerattributeregenerationrate: function (block, generator) {
  const attributeType = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttributeRegenerationRate(${attributetype, player, number})`
},
getquantityofunittypeinunittypegroup: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  const unitTypeGroup = generator.valueToCode(block, 'unitTypeGroup', Order.NONE) || "";
  return `getQuantityOfUnitTypeInUnitTypeGroup(${unittype, unittypegroup})`
},
forallunittypes: function (block, generator) {
  const unitTypeGroup = generator.valueToCode(block, 'unitTypeGroup', Order.NONE) || "";
  return `forAllUnitTypes(${unittypegroup})`
},
centerofregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `centerOfRegion(${region})`
},
entitylastraycastcollisionposition: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityLastRaycastCollisionPosition(${entity})`
},
decreasevariablebynumber: function (block, generator) {
  const variable = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `decreaseVariableByNumber(${variable, number})`
},
getpositiony: function (block, generator) {
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `getPositionY(${position})`
},
getlastcastingunit: function (block, generator) {
  return `getLastCastingUnit()`
},
getlasttouchedunit: function (block, generator) {
  return `getLastTouchedUnit()`
},
selectedparticle: function (block, generator) {
  return `selectedParticle()`
},
allunitsattachedtounit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allUnitsAttachedToUnit(${entity})`
},
kickplayer: function (block, generator) {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `kickPlayer(${entity, message})`
},
forallplayers: function (block, generator) {
  const playerGroup = generator.valueToCode(block, 'playerGroup', Order.NONE) || "";
  return `forAllPlayers(${playergroup})`
},
removeunitfromunitgroup: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const unitGroup = generator.valueToCode(block, 'unitGroup', Order.NONE) || "";
  return `removeUnitFromUnitGroup(${unit, unitgroup})`
},
playersareneutral: function (block, generator) {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playersAreNeutral(${playera, playerb})`
},
distancebetweenpositions: function (block, generator) {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `distanceBetweenPositions(${positiona, positionb})`
},
flipentitysprite: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const flip = generator.valueToCode(block, 'flip', Order.NONE) || "";
  return `flipEntitySprite(${entity, flip})`
},
makeunitinvisibletoneutralplayers: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitInvisibleToNeutralPlayers(${entity})`
},
entityattributemax: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityAttributeMax(${attribute, entity})`
},
getentityposition: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityPosition(${entity})`
},
playerhasadblockenabled: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerHasAdblockEnabled(${player})`
},
saveunitdata: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `saveUnitData(${unit})`
},
applytorqueonentity: function (block, generator) {
  const torque = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyTorqueOnEntity(${torque, entity})`
},
givenewitemtounit: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `giveNewItemToUnit(${itemtype, unit})`
},
playerattributemin: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerAttributeMin(${attribute, entity})`
},
startusingitem: function (block, generator) {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `startUsingItem(${entity})`
},
moveentity: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `moveEntity(${entity, position})`
},
for: function (block, generator) {
  const variableName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const start = generator.valueToCode(block, 'number', Order.NONE) || "";
  const stop = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `for(${variablename, start, stop})`
},
sin: function (block, generator) {
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `sin(${angle})`
},
getxcoordinateofregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getXCoordinateOfRegion(${region})`
},
showmenuandselectbestserver: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showMenuAndSelectBestServer(${player})`
},
getvalueofentityvariable: function (block, generator) {
  const variable = generator.valueToCode(block, 'entityVariable', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getValueOfEntityVariable(${variable, entity})`
},
entitiesinregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `entitiesInRegion(${region})`
},
applyforceonentityxyrelative: function (block, generator) {
  const forcex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const forcey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyForceOnEntityXYRelative(${forcex, forcey, entity})`
},
applyforceonentityxylt: function (block, generator) {
  const forcex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const forcey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyForceOnEntityXYLT(${forcex, forcey, entity})`
},
attachentitytoentity: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const targetingEntity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `attachEntityToEntity(${entity, targetingentity})`
},
entityexists: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityExists(${entity})`
},
nameofregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `nameOfRegion(${region})`
},
undefinedvalue: function (block, generator) {
  return `undefinedValue()`
},
banplayerfromchat: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `banPlayerFromChat(${player})`
},
getentityvelocityy: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityVelocityY(${entity})`
},
allunittypesingame: function (block, generator) {
  return `allUnitTypesInGame()`
},
getpositionx: function (block, generator) {
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `getPositionX(${position})`
},
getrandompositioninregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getRandomPositionInRegion(${region})`
},
gettriggeringprojectile: function (block, generator) {
  return `getTriggeringProjectile()`
},
getunitparticle: function (block, generator) {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitParticle(${particletype, entity})`
},
changeunittype: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `changeUnitType(${entity, unittype})`
},
addplayertoplayergroup: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerGroup = generator.valueToCode(block, 'playerGroup', Order.NONE) || "";
  return `addPlayerToPlayerGroup(${player, playergroup})`
},
playmusicforplayerrepeatedly: function (block, generator) {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playMusicForPlayerRepeatedly(${music, player})`
},
showgamesuggestionsforplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showGameSuggestionsForPlayer(${player})`
},
ispositioninwall: function (block, generator) {
  const positionx = generator.valueToCode(block, 'number', Order.NONE) || "";
  const positiony = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `isPositionInWall(${positionx, positiony})`
},
entitiesinregioninfrontofentityatdistance: function (block, generator) {
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const distance = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `entitiesInRegionInFrontOfEntityAtDistance(${width, height, entity, distance})`
},
setentityattributeregenerationrate: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttributeRegenerationRate(${attribute, entity, value})`
},
lastplayedtimeofplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `lastPlayedTimeOfPlayer(${player})`
},
makeunitselectitematslot: function (block, generator) {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const slotIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `makeUnitSelectItemAtSlot(${unit, slotindex})`
},
getitemtypename: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `getItemTypeName(${itemtype})`
},
getmax: function (block, generator) {
  const num1 = generator.valueToCode(block, 'number', Order.NONE) || "";
  const num2 = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getMax(${num1, num2})`
},
getlastcreatedunit: function (block, generator) {
  return `getLastCreatedUnit()`
},
getrotatespeed: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getRotateSpeed(${unittype})`
},
getownerofitem: function (block, generator) {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getOwnerOfItem(${entity})`
},
allunits: function (block, generator) {
  return `allUnits()`
},
stopusingitem: function (block, generator) {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `stopUsingItem(${entity})`
},
makeunitvisible: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitVisible(${entity})`
},
makeunitinvisible: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitInvisible(${entity})`
},
break: function (block, generator) {
  return `break()`
},
getcurrentammoofitem: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getCurrentAmmoOfItem(${item})`
},
getheightofregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getHeightOfRegion(${region})`
},
changescaleofentitysprite: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const scale = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeScaleOfEntitySprite(${entity, scale})`
},
substringof: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const fromIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const toIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `substringOf(${string, fromindex, toindex})`
},
setplayername: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setPlayerName(${player, name})`
},
makeunitpickupitematslot: function (block, generator) {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const slotIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `makeUnitPickupItemAtSlot(${unit, item, slotindex})`
},
dropitemininventoryslot: function (block, generator) {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const slotIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `dropItemInInventorySlot(${unit, slotindex})`
},
substring: function (block, generator) {
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const patternString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `subString(${sourcestring, patternstring})`
},
getitemmaxquantity: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemMaxQuantity(${item})`
},
unbanplayerfromchat: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `unbanPlayerFromChat(${player})`
},
absolutevalueofnumber: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `absoluteValueOfNumber(${number})`
},
changedescriptionofitem: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `changeDescriptionOfItem(${item, string})`
},
gettriggeringunit: function (block, generator) {
  return `getTriggeringUnit()`
},
getowner: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getOwner(${entity})`
},
selectedplayer: function (block, generator) {
  return `selectedPlayer()`
},
getlasttoucheditem: function (block, generator) {
  return `getLastTouchedItem()`
},
getlasttouchedprojectile: function (block, generator) {
  return `getLastTouchedProjectile()`
},
allunitsattachedtoitem: function (block, generator) {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `allUnitsAttachedToItem(${entity})`
},
sendchatmessagetoplayer: function (block, generator) {
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `sendChatMessageToPlayer(${message, player})`
},
playadforeveryone: function (block, generator) {
  return `playAdForEveryone()`
},
hideuitextforplayer: function (block, generator) {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUiTextForPlayer(${target, entity})`
},
showuitextforplayer: function (block, generator) {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUiTextForPlayer(${target, entity})`
},
playmusic: function (block, generator) {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  return `playMusic(${music})`
},
assignplayertype: function (block, generator) {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerType = generator.valueToCode(block, 'playerType', Order.NONE) || "";
  return `assignPlayerType(${entity, playertype})`
},
allprojectiles: function (block, generator) {
  return `allProjectiles()`
},
playmusicforplayer: function (block, generator) {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playMusicForPlayer(${music, player})`
},
condition: function (block, generator) {
  const conditions = generator.valueToCode(block, 'conditions', Order.NONE) || "";
  return `condition(${conditions})`
},
makeunitvisibletoneutralplayers: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitVisibleToNeutralPlayers(${entity})`
},
makeunitvisibletofriendlyplayers: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitVisibleToFriendlyPlayers(${entity})`
},
makeunitpickupitem: function (block, generator) {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `makeUnitPickupItem(${unit, item})`
},
dynamicregion: function (block, generator) {
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `dynamicRegion(${x, y, width, height})`
},
getentityattribute: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityAttribute(${attribute, entity})`
},
currenttimestamp: function (block, generator) {
  return `currentTimeStamp()`
},
givenewitemwithquantitytounit: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `giveNewItemWithQuantityToUnit(${itemtype, number, unit})`
},
getentityvelocityx: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityVelocityX(${entity})`
},
defaultquantityofitemtype: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `defaultQuantityOfItemType(${itemtype})`
},
getquantityofitemtypeinitemtypegroup: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const itemTypeGroup = generator.valueToCode(block, 'itemTypeGroup', Order.NONE) || "";
  return `getQuantityOfItemTypeInItemTypeGroup(${itemtype, itemtypegroup})`
},
getrandomunittypefromunittypegroup: function (block, generator) {
  const unitTypeGroup = generator.valueToCode(block, 'unitTypeGroup', Order.NONE) || "";
  return `getRandomUnitTypeFromUnitTypeGroup(${unittypegroup})`
},
selectedunittype: function (block, generator) {
  return `selectedUnitType()`
},
getnumberofitemspresent: function (block, generator) {
  return `getNumberOfItemsPresent()`
},
getmin: function (block, generator) {
  const num1 = generator.valueToCode(block, 'number', Order.NONE) || "";
  const num2 = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getMin(${num1, num2})`
},
selectedunit: function (block, generator) {
  return `selectedUnit()`
},
getlastoverlappingprojectile: function (block, generator) {
  return `getLastOverlappingProjectile()`
},
gettriggeringattribute: function (block, generator) {
  return `getTriggeringAttribute()`
},
allunitsmountedonunit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allUnitsMountedOnUnit(${entity})`
},
allunitsinregion: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `allUnitsInRegion(${region})`
},
dropallitems: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `dropAllItems(${entity})`
},
useitemonce: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `useItemOnce(${item})`
},
stopacceptingplayers: function (block, generator) {
  return `stopAcceptingPlayers()`
},
setentityvelocityatangle: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const speed = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityVelocityAtAngle(${entity, speed, angle})`
},
setentityattributemax: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttributeMax(${attribute, entity, value})`
},
getvalueofplayervariable: function (block, generator) {
  const variable = generator.valueToCode(block, 'playerVariable', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getValueOfPlayerVariable(${variable, player})`
},
allregions: function (block, generator) {
  return `allRegions()`
},
maxvalueofitemtype: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `maxValueOfItemType(${itemtype})`
},
anglebetweenmouseandwindowcenter: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `angleBetweenMouseAndWindowCenter(${player})`
},
setplayerattributemin: function (block, generator) {
  const attributeType = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttributeMin(${attributetype, player, number})`
},
makeplayertradewithplayer: function (block, generator) {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `makePlayerTradeWithPlayer(${playera, playerb})`
},
getexponent: function (block, generator) {
  const base = generator.valueToCode(block, 'number', Order.NONE) || "";
  const power = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getExponent(${base, power})`
},
getlastattackedunit: function (block, generator) {
  return `getLastAttackedUnit()`
},
getlastattackingunit: function (block, generator) {
  return `getLastAttackingUnit()`
},
updateuitextfortimeforplayer: function (block, generator) {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const time = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `updateUiTextForTimeForPlayer(${target, value, player, time})`
},
getnumberofunitsofunittype: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getNumberOfUnitsOfUnitType(${unittype})`
},
aimovetoposition: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `aiMoveToPosition(${unit, position})`
},
aiattackunit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const targetUnit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `aiAttackUnit(${unit, targetunit})`
},
getnumberofplayersofplayertype: function (block, generator) {
  const playerType = generator.valueToCode(block, 'playerType', Order.NONE) || "";
  return `getNumberOfPlayersOfPlayerType(${playertype})`
},
changesensorradius: function (block, generator) {
  const sensor = generator.valueToCode(block, 'sensor', Order.NONE) || "";
  const radius = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeSensorRadius(${sensor, radius})`
},
ownerunitofsensor: function (block, generator) {
  const sensor = generator.valueToCode(block, 'sensor', Order.NONE) || "";
  return `ownerUnitOfSensor(${sensor})`
},
getsensorofunit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getSensorOfUnit(${unit})`
},
gettriggeringsensor: function (block, generator) {
  return `getTriggeringSensor()`
},
getlastchatmessagesentbyplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getLastChatMessageSentByPlayer(${player})`
},
loadplayerdataandapplyit: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `loadPlayerDataAndApplyIt(${player, unit})`
},
createfloatingtext: function (block, generator) {
  const text = generator.valueToCode(block, 'string', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `createFloatingText(${text, position, color})`
},
getlengthofstring: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getLengthOfString(${string})`
},
setlastattackedunit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setLastAttackedUnit(${unit})`
},
setlastattackingunit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setLastAttackingUnit(${unit})`
},
setitemfirerate: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setItemFireRate(${number, item})`
},
applyimpulseonentityxy: function (block, generator) {
  const impulsex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const impulsey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyImpulseOnEntityXY(${impulsex, impulsey, entity})`
},
tolowercase: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `toLowerCase(${string})`
},
stringstartswith: function (block, generator) {
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const patternString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringStartsWith(${sourcestring, patternstring})`
},
stringendswith: function (block, generator) {
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const patternString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringEndsWith(${sourcestring, patternstring})`
},
replacevaluesinstring: function (block, generator) {
  const matchString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const newString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `replaceValuesInString(${matchstring, sourcestring, newstring})`
},
getlastattackingitem: function (block, generator) {
  return `getLastAttackingItem()`
},
playsoundforplayer: function (block, generator) {
  const sound = generator.valueToCode(block, 'sound', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playSoundForPlayer(${sound, player})`
},
stopsoundforplayer: function (block, generator) {
  const sound = generator.valueToCode(block, 'sound', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `stopSoundForPlayer(${sound, player})`
},
showdismissibleinputmodaltoplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const inputLabel = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `showDismissibleInputModalToPlayer(${player, inputlabel})`
},
gettimestring: function (block, generator) {
  const seconds = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getTimeString(${seconds})`
},
setitemname: function (block, generator) {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setItemName(${name, item})`
},
changeiteminventoryimage: function (block, generator) {
  const url = generator.valueToCode(block, 'string', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `changeItemInventoryImage(${url, item})`
},
getitemdescription: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemDescription(${item})`
},
addattributebufftounit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const time = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `addAttributeBuffToUnit(${entity, value, attribute, time})`
},
addpercentageattributebufftounit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const time = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `addPercentageAttributeBuffToUnit(${entity, value, attribute, time})`
},
stununit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stunUnit(${unit})`
},
removestunfromunit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `removeStunFromUnit(${unit})`
},
setlastattackingitem: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setLastAttackingItem(${item})`
},
muteplayermicrophone: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `mutePlayerMicrophone(${player})`
},
unmuteplayermicrophone: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `unmutePlayerMicrophone(${player})`
},
sendpostrequest: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const url = generator.valueToCode(block, 'string', Order.NONE) || "";
  const varName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `sendPostRequest(${string, url, varname})`
},
loadunitdatafromstring: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `loadUnitDataFromString(${string, unit})`
},
loadplayerdatafromstring: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `loadPlayerDataFromString(${string, player})`
},
getunitdata: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitData(${unit})`
},
getplayerdata: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerData(${player})`
},
getunitid: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitId(${unit})`
},
getplayerid: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerId(${player})`
},
getunitfromid: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getUnitFromId(${string})`
},
getplayerfromid: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getPlayerFromId(${string})`
},
getstringarraylength: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getStringArrayLength(${string})`
},
getstringarrayelement: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getStringArrayElement(${number, string})`
},
insertstringarrayelement: function (block, generator) {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `insertStringArrayElement(${value, string})`
},
updatestringarrayelement: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `updateStringArrayElement(${number, string, value})`
},
removestringarrayelement: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `removeStringArrayElement(${number, string})`
},
removeallattributebuffs: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `removeAllAttributeBuffs(${unit})`
},
changeinventoryslotcolor: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `changeInventorySlotColor(${item, string})`
},
setownerunitofprojectile: function (block, generator) {
  const projectile = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setOwnerUnitOfProjectile(${projectile, unit})`
},
thisentity: function (block, generator) {
  return `thisEntity()`
},
entityname: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityName(${entity})`
},
selectedinventoryslot: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `selectedInventorySlot(${unit})`
},
log10: function (block, generator) {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `log10(${value})`
},
addbotplayer: function (block, generator) {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `addBotPlayer(${name})`
},
botplayers: function (block, generator) {
  return `botPlayers()`
},
enableai: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `enableAI(${unit})`
},
disableai: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `disableAI(${unit})`
},
isaienabled: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `isAIEnabled(${unit})`
},
isbotplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isBotPlayer(${player})`
},
iscomputerplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isComputerPlayer(${player})`
},
entitiesbetweentwopositions: function (block, generator) {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `entitiesBetweenTwoPositions(${positiona, positionb})`
},
unitsensorradius: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `unitSensorRadius(${unit})`
},
aigoidle: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `aiGoIdle(${unit})`
},
targetunit: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `targetUnit(${unit})`
},
sendcoinstoplayer: function (block, generator) {
  const coins = generator.valueToCode(block, 'number', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `sendCoinsToPlayer(${coins, player})`
},
addchatfilter: function (block, generator) {
  const words = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `addChatFilter(${words})`
},
numbertostring: function (block, generator) {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `numberToString(${value})`
},
sendcoinstoplayer2: function (block, generator) {
  const coins = generator.valueToCode(block, 'number', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `sendCoinsToPlayer2(${coins, player})`
},
playeriscreator: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerIsCreator(${player})`
},
setmaxattackrange: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setMaxAttackRange(${unit, number})`
},
setletgodistance: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setLetGoDistance(${unit, number})`
},
setmaxtraveldistance: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setMaxTravelDistance(${unit, number})`
},
getplayerselectedunit: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerSelectedUnit(${player})`
},
todegrees: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `toDegrees(${number})`
},
toradians: function (block, generator) {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `toRadians(${number})`
},
getpositioninfrontofposition: function (block, generator) {
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const distance = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getPositionInFrontOfPosition(${position, distance, angle})`
},
editmaptile: function (block, generator) {
  const gid = generator.valueToCode(block, 'number', Order.NONE) || "";
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `editMapTile(${gid, layer, x, y})`
},
loadmapfromstring: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `loadMapFromString(${string})`
},
getmapjson: function (block, generator) {
  return `getMapJson()`
},
teleportentity: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `teleportEntity(${entity, position})`
},
foralldebris: function (block, generator) {
  const debrisGroup = generator.valueToCode(block, 'debrisGroup', Order.NONE) || "";
  return `forAllDebris(${debrisgroup})`
},
roleexistsforplayer: function (block, generator) {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `roleExistsForPlayer(${name, player})`
},
emitparticlesfromentity: function (block, generator) {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `emitParticlesFromEntity(${particletype, angle, entity})`
},
emitparticlesatposition: function (block, generator) {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `emitParticlesAtPosition(${particletype, position, angle})`
},
editmaptiles: function (block, generator) {
  const gid = generator.valueToCode(block, 'number', Order.NONE) || "";
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `editMapTiles(${gid, layer, x, y, width, height})`
},
getmaptileid: function (block, generator) {
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getMapTileId(${x, y, layer})`
},
stringisanumber: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringIsANumber(${string})`
},
setsourceitemofprojectile: function (block, generator) {
  const projectile = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setSourceItemOfProjectile(${projectile, item})`
},
getglobalvariable: function (block, generator) {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getGlobalVariable(${name})`
},
lastreceivedpostresponse: function (block, generator) {
  return `lastReceivedPostResponse()`
},
lastupdatedvariablename: function (block, generator) {
  return `lastUpdatedVariableName()`
},
getvariable: function (block, generator) {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getVariable(${name})`
},
stringtoobject: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringToObject(${string})`
},
elementfromobject: function (block, generator) {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `elementFromObject(${key, object})`
},
objecttostring: function (block, generator) {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `objectToString(${object})`
},
removeelement: function (block, generator) {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `removeElement(${key, object})`
},
makeplayersendchatmessage: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `makePlayerSendChatMessage(${player, message})`
},
emptyobject: function (block, generator) {
  return `emptyObject()`
},
addstringelement: function (block, generator) {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `addStringElement(${key, value, object})`
},
elementcount: function (block, generator) {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `elementCount(${object})`
},
addobjectelement: function (block, generator) {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'object', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `addObjectElement(${key, value, object})`
},
requestpost: function (block, generator) {
  const data = generator.valueToCode(block, 'object', Order.NONE) || "";
  const url = generator.valueToCode(block, 'string', Order.NONE) || "";
  const varName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `requestPost(${data, url, varname})`
},
unitiscarryingitemtype: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `unitIsCarryingItemType(${unit, itemtype})`
},
startcastingability: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const ability = generator.valueToCode(block, 'ability', Order.NONE) || "";
  return `startCastingAbility(${entity, ability})`
},
stopcastingability: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const ability = generator.valueToCode(block, 'ability', Order.NONE) || "";
  return `stopCastingAbility(${entity, ability})`
},
applytorqueonentitytofaceposition: function (block, generator) {
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `applyTorqueOnEntityToFacePosition(${force, entity, position})`
},
changeregioncolor: function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  const inside = generator.valueToCode(block, 'string', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeRegionColor(${region, inside, alpha})`
},
startmovingunitup: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitUp(${entity})`
},
startmovingunitdown: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitDown(${entity})`
},
startmovingunitleft: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitLeft(${entity})`
},
startmovingunitright: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitRight(${entity})`
},
stopmovingunitx: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stopMovingUnitX(${entity})`
},
stopmovingunity: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stopMovingUnitY(${entity})`
},
openbackpackforplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openBackpackForPlayer(${player})`
},
closebackpackforplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `closeBackpackForPlayer(${player})`
},
setunitnamelabelcolor: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setUnitNameLabelColor(${unit, color})`
},
getcameraposition: function (block, generator) {
  return `getCameraPosition()`
},
getcamerawidth: function (block, generator) {
  return `getCameraWidth()`
},
getcameraheight: function (block, generator) {
  return `getCameraHeight()`
},
allunitsofunittype: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `allUnitsOfUnitType(${unittype})`
},
forallunits: function (block, generator) {
  const unitGroup = generator.valueToCode(block, 'unitGroup', Order.NONE) || "";
  return `forAllUnits(${unitgroup})`
},
allitemsofitemtype: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `allItemsOfItemType(${itemtype})`
},
setunitnamelabelcolorforplayer: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `setUnitNameLabelColorForPlayer(${unit, color, player})`
},
getdefaultattributevalueofunittype: function (block, generator) {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getDefaultAttributeValueOfUnitType(${attribute, unittype})`
},
playercamerastoptracking: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerCameraStopTracking(${player})`
},
hideuielementforplayer: function (block, generator) {
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUiElementForPlayer(${elementid, player})`
},
showuielementforplayer: function (block, generator) {
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUiElementForPlayer(${elementid, player})`
},
setuielementhtml: function (block, generator) {
  const htmlStr = generator.valueToCode(block, 'string', Order.NONE) || "";
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `setUIElementHtml(${htmlstr, elementid, player})`
},
lastclickeduielementid: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `lastClickedUiElementId(${player})`
},
appendrealtimecssforplayer: function (block, generator) {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `appendRealtimeCSSForPlayer(${value, player})`
},
updaterealtimecssforplayer: function (block, generator) {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `updateRealtimeCSSForPlayer(${value, player})`
},
realtimecssofplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `realtimeCSSOfPlayer(${player})`
},
mathceiling: function (block, generator) {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathCeiling(${value})`
},
stopmovingunit: function (block, generator) {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stopMovingUnit(${entity})`
},
touppercase: function (block, generator) {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `toUpperCase(${string})`
},
gethighscoreofplayer: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getHighScoreOfPlayer(${player})`
},
isunitmoving: function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `isUnitMoving(${unit})`
},
forin: function (block, generator) {
  const variableNameMain = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const variableNameSource = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `forIn(${variablenamemain, variablenamesource})`
},
addclasstouielement: function (block, generator) {
  const className = generator.valueToCode(block, 'string', Order.NONE) || "";
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `addClassToUIElement(${classname, elementid, player})`
},
removeclassfromuielement: function (block, generator) {
  const className = generator.valueToCode(block, 'string', Order.NONE) || "";
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `removeClassFromUIElement(${classname, elementid, player})`
},
isplayerclient: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isPlayerClient(${player})`
},
setcameradeadzone: function (block, generator) {
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setCameraDeadzone(${width, height})`
},
purchaseitemfromshop: function (block, generator) {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const shop = generator.valueToCode(block, 'shop', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `purchaseItemFromShop(${itemtype, shop, player})`
},
getunittype: function (block, generator) {
  const unitType = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getUnitType(${unittype})`
},
getitemtype: function (block, generator) {
  const itemType = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getItemType(${itemtype})`
},
getprojectiletype: function (block, generator) {
  const projectileType = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getProjectileType(${projectiletype})`
},
getsecondarytouchposition: function (block, generator) {
  return `getSecondaryTouchPosition()`
},
allprojectilesofprojectiletype: function (block, generator) {
  const projectileType = generator.valueToCode(block, 'projectileType', Order.NONE) || "";
  return `allProjectilesOfProjectileType(${projectiletype})`
},
unittypewidth: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `unitTypeWidth(${unittype})`
},
unittypeheight: function (block, generator) {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `unitTypeHeight(${unittype})`
},
notvalue: function (block, generator) {
  const boolean = generator.valueToCode(block, 'boolean', Order.NONE) || "";
  return `notValue(${boolean})`
},
isplayeronmobile: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isPlayerOnMobile(${player})`
},
getplayerusername: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerUsername(${player})`
},
repeatwithdelay: function (block, generator) {
  const count = generator.valueToCode(block, 'number', Order.NONE) || "";
  const delay = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `repeatWithDelay(${count, delay})`
},
entityfacingangle: function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityFacingAngle(${entity})`
},
playersofplayertype: function (block, generator) {
  const playerType = generator.valueToCode(block, 'playerType', Order.NONE) || "";
  return `playersOfPlayerType(${playertype})`
},
sendsecurepostrequest: function (block, generator) {
  const apiCredentials = generator.valueToCode(block, 'secrets', Order.NONE) || "";
  const data = generator.valueToCode(block, 'object', Order.NONE) || "";
  const varName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `sendSecurePostRequest(${apicredentials, data, varname})`
},
openskinshop: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openSkinShop(${player})`
},
openskinsubmissionpage: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openSkinSubmissionPage(${player})`
},
playercamerasetpitch: function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `playerCameraSetPitch(${player, angle})`
},
getregionbyname: function (block, generator) {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getRegionByName(${name})`
},
changelayeropacity: function (block, generator) {
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeLayerOpacity(${layer, alpha})`
},
forallelementsinobject: function (block, generator) {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `forAllElementsInObject(${object})`
},
selectedelement: function (block, generator) {
  return `selectedElement()`
},
objectcontainselement: function (block, generator) {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `objectContainsElement(${object, key})`
},
selectedelementskey: function (block, generator) {
  return `selectedElementsKey()`
},
playmusicforplayerattime: function (block, generator) {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const time = generator.valueToCode(block, 'time', Order.NONE) || "";
  return `playMusicForPlayerAtTime(${music, player, time})`
},
getserverage: function (block, generator) {
  return `getServerAge()`
},
getserverstarttime: function (block, generator) {
  return `getServerStartTime()`
},
mathround: function (block, generator) {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathRound(${value})`
},
addnumberelement: function (block, generator) {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `addNumberElement(${key, value, object})`
},
mathsign: function (block, generator) {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathSign(${value})`
},
itemfiresprojectiles: function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `itemFiresProjectiles(${item})`
},
lerp: function (block, generator) {
  const valueA = generator.valueToCode(block, 'number', Order.NONE) || "";
  const valueB = generator.valueToCode(block, 'number', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `lerp(${valuea, valueb, alpha})`
},
getlerpposition: function (block, generator) {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getLerpPosition(${positiona, positionb, alpha})`
},

      }