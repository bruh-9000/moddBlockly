export const forBlock = {
      getItemInFrontOfUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemInFrontOfUnit(${entity})`
},
selectedProjectile: (block, generator) => {
  return `selectedProjectile()`
},
getAttributeTypeOfAttribute: (block, generator) => {
  const entity = generator.valueToCode(block, 'attribute', Order.NONE) || "";
  return `getAttributeTypeOfAttribute(${entity})`
},
playAdForPlayer: (block, generator) => {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playAdForPlayer(${entity})`
},
getRandomNumberBetween: (block, generator) => {
  const min = generator.valueToCode(block, 'number', Order.NONE) || "";
  const max = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getRandomNumberBetween(${min, max})`
},
setTimeOut: (block, generator) => {
  const duration = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setTimeOut(${duration})`
},
unitsFacingAngle: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `unitsFacingAngle(${unit})`
},
getMapHeight: (block, generator) => {
  return `getMapHeight()`
},
getEntityType: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityType(${entity})`
},
getSelectedEntity: (block, generator) => {
  return `getSelectedEntity()`
},
rotateEntityToFacePosition: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `rotateEntityToFacePosition(${entity, position})`
},
destroyEntity: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `destroyEntity(${entity})`
},
setEntityDepth: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityDepth(${entity, value})`
},
getItemAtSlot: (block, generator) => {
  const slot = generator.valueToCode(block, 'number', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemAtSlot(${slot, unit})`
},
hideUnitFromPlayer: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUnitFromPlayer(${entity, player})`
},
showUnitToPlayer: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUnitToPlayer(${entity, player})`
},
entitiesCollidingWithLastRaycast: (block, generator) => {
  return `entitiesCollidingWithLastRaycast()`
},
getLastPurchasedUnit: (block, generator) => {
  return `getLastPurchasedUnit()`
},
sendChatMessage: (block, generator) => {
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `sendChatMessage(${message})`
},
playSoundAtPosition: (block, generator) => {
  const sound = generator.valueToCode(block, 'sound', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `playSoundAtPosition(${sound, position})`
},
xyCoordinate: (block, generator) => {
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `xyCoordinate(${x, y})`
},
toFixed: (block, generator) => {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const precision = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `toFixed(${value, precision})`
},
getEntityState: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityState(${entity})`
},
dropItemAtPosition: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `dropItemAtPosition(${item, position})`
},
applyForceOnEntityAngle: (block, generator) => {
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `applyForceOnEntityAngle(${force, entity, angle})`
},
showInputModalToPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const inputLabel = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `showInputModalToPlayer(${player, inputlabel})`
},
getItemQuantity: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemQuantity(${item})`
},
isPlayerLoggedIn: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isPlayerLoggedIn(${player})`
},
openDialogueForPlayer: (block, generator) => {
  const dialogue = generator.valueToCode(block, 'dialogue', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openDialogueForPlayer(${dialogue, player})`
},
continue: (block, generator) => {
  return `continue()`
},
openWebsiteForPlayer: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openWebsiteForPlayer(${string, player})`
},
setEntityLifeSpan: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const lifeSpan = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityLifeSpan(${entity, lifespan})`
},
selectedItem: (block, generator) => {
  return `selectedItem()`
},
hideUnitNameLabel: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `hideUnitNameLabel(${entity})`
},
setTriggeringUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setTriggeringUnit(${entity})`
},
createUnitAtPosition: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createUnitAtPosition(${unittype, entity, position, angle})`
},
hideUiTextForEveryone: (block, generator) => {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  return `hideUiTextForEveryone(${target})`
},
playersAreFriendly: (block, generator) => {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playersAreFriendly(${playera, playerb})`
},
hideGameSuggestionsForPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideGameSuggestionsForPlayer(${player})`
},
cos: (block, generator) => {
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `cos(${angle})`
},
transformRegionDimensions: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `transformRegionDimensions(${region, x, y, width, height})`
},
makeUnitInvisibleToFriendlyPlayers: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitInvisibleToFriendlyPlayers(${entity})`
},
setEntityAttributeMin: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttributeMin(${attribute, entity, value})`
},
entityHeight: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityHeight(${entity})`
},
allUnitsOwnedByPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `allUnitsOwnedByPlayer(${player})`
},
showInviteFriendsModal: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showInviteFriendsModal(${player})`
},
showCustomModalToPlayer: (block, generator) => {
  const htmlContent = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showCustomModalToPlayer(${htmlcontent, player})`
},
getLastPlayerSelectingDialogueOption: (block, generator) => {
  return `getLastPlayerSelectingDialogueOption()`
},
playerAttributeMax: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerAttributeMax(${attribute, entity})`
},
getTriggeringItem: (block, generator) => {
  return `getTriggeringItem()`
},
getItemParticle: (block, generator) => {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemParticle(${particletype, entity})`
},
allProjectilesAttachedToUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allProjectilesAttachedToUnit(${entity})`
},
showUiTextForEveryone: (block, generator) => {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  return `showUiTextForEveryone(${target})`
},
forAllItems: (block, generator) => {
  const itemGroup = generator.valueToCode(block, 'itemGroup', Order.NONE) || "";
  return `forAllItems(${itemgroup})`
},
removePlayerFromPlayerGroup: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerGroup = generator.valueToCode(block, 'playerGroup', Order.NONE) || "";
  return `removePlayerFromPlayerGroup(${player, playergroup})`
},
getPlayerAttribute: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerAttribute(${attribute, entity})`
},
playerIsControlledByHuman: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerIsControlledByHuman(${player})`
},
setUnitOwner: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `setUnitOwner(${unit, player})`
},
getMapWidth: (block, generator) => {
  return `getMapWidth()`
},
updateItemQuantity: (block, generator) => {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  const quantity = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `updateItemQuantity(${entity, quantity})`
},
applyForceOnEntityAngleLT: (block, generator) => {
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `applyForceOnEntityAngleLT(${force, entity, angle})`
},
setEntityState: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const state = generator.valueToCode(block, 'state', Order.NONE) || "";
  return `setEntityState(${entity, state})`
},
entityWidth: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityWidth(${entity})`
},
hideUnitInPlayerMinimap: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUnitInPlayerMinimap(${unit, player})`
},
selectedItemType: (block, generator) => {
  return `selectedItemType()`
},
getPlayerCount: (block, generator) => {
  return `getPlayerCount()`
},
getItemCurrentlyHeldByUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemCurrentlyHeldByUnit(${entity})`
},
allItemsDroppedOnGround: (block, generator) => {
  return `allItemsDroppedOnGround()`
},
return: (block, generator) => {
  return `return()`
},
runScript: (block, generator) => {
  const scriptName = generator.valueToCode(block, 'script', Order.NONE) || "";
  return `runScript(${scriptname})`
},
addUnitToUnitGroup: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const unitGroup = generator.valueToCode(block, 'unitGroup', Order.NONE) || "";
  return `addUnitToUnitGroup(${unit, unitgroup})`
},
humanPlayers: (block, generator) => {
  return `humanPlayers()`
},
lastUsedItem: (block, generator) => {
  return `lastUsedItem()`
},
playerCustomInput: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerCustomInput(${player})`
},
arctan: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `arctan(${number})`
},
concat: (block, generator) => {
  const textA = generator.valueToCode(block, 'string,number', Order.NONE) || "";
  const textB = generator.valueToCode(block, 'string,number', Order.NONE) || "";
  return `concat(${texta, textb})`
},
getPlayerName: (block, generator) => {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerName(${entity})`
},
getSourceItemOfProjectile: (block, generator) => {
  const entity = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  return `getSourceItemOfProjectile(${entity})`
},
getUnitTypeOfUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitTypeOfUnit(${entity})`
},
getItemTypeOfItem: (block, generator) => {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemTypeOfItem(${entity})`
},
getTriggeringRegion: (block, generator) => {
  return `getTriggeringRegion()`
},
playerCameraSetZoom: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const zoom = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `playerCameraSetZoom(${player, zoom})`
},
mathFloor: (block, generator) => {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathFloor(${value})`
},
setUnitNameLabel: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setUnitNameLabel(${unit, name})`
},
getUnitTypeName: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getUnitTypeName(${unittype})`
},
openShopForPlayer: (block, generator) => {
  const shop = generator.valueToCode(block, 'shop', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openShopForPlayer(${shop, player})`
},
getYCoordinateOfRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getYCoordinateOfRegion(${region})`
},
squareRoot: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `squareRoot(${number})`
},
closeDialogueForPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `closeDialogueForPlayer(${player})`
},
comment: (block, generator) => {
  return `comment()`
},
createEntityAtPositionWithDimensions: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createEntityAtPositionWithDimensions(${entity, position, player, height, width, angle})`
},
increaseVariableByNumber: (block, generator) => {
  const variable = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `increaseVariableByNumber(${variable, number})`
},
getMouseCursorPosition: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getMouseCursorPosition(${player})`
},
getLastOverlappingUnit: (block, generator) => {
  return `getLastOverlappingUnit()`
},
allItems: (block, generator) => {
  return `allItems()`
},
allItemsAttachedToUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allItemsAttachedToUnit(${entity})`
},
getEntireMapRegion: (block, generator) => {
  return `getEntireMapRegion()`
},
playerCameraTrackUnit: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `playerCameraTrackUnit(${player, unit})`
},
castAbility: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const abilityName = generator.valueToCode(block, 'ability', Order.NONE) || "";
  return `castAbility(${entity, abilityname})`
},
playersAreHostile: (block, generator) => {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playersAreHostile(${playera, playerb})`
},
allItemsOwnedByUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allItemsOwnedByUnit(${entity})`
},
computerPlayers: (block, generator) => {
  return `computerPlayers()`
},
playEntityAnimation: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const animation = generator.valueToCode(block, 'animationType', Order.NONE) || "";
  return `playEntityAnimation(${entity, animation})`
},
while: (block, generator) => {
  const conditions = generator.valueToCode(block, 'conditions', Order.NONE) || "";
  return `while(${conditions})`
},
allEntities: (block, generator) => {
  return `allEntities()`
},
lastPurchasedUnitTypetId: (block, generator) => {
  return `lastPurchasedUnitTypetId()`
},
applyForceOnEntityXY: (block, generator) => {
  const forcex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const forcey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyForceOnEntityXY(${forcex, forcey, entity})`
},
showUnitInPlayerMinimap: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUnitInPlayerMinimap(${unit, color, player})`
},
savePlayerData: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `savePlayerData(${player})`
},
hideUnitNameLabelFromPlayer: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUnitNameLabelFromPlayer(${entity, player})`
},
regionOverlapsWithRegion: (block, generator) => {
  const regionA = generator.valueToCode(block, 'region', Order.NONE) || "";
  const regionB = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `regionOverlapsWithRegion(${regiona, regionb})`
},
allItemTypesInGame: (block, generator) => {
  return `allItemTypesInGame()`
},
getTriggeringPlayer: (block, generator) => {
  return `getTriggeringPlayer()`
},
getProjectileTypeOfProjectile: (block, generator) => {
  const entity = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  return `getProjectileTypeOfProjectile(${entity})`
},
allPlayers: (block, generator) => {
  return `allPlayers()`
},
setPlayerAttribute: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttribute(${attribute, entity, value})`
},
updateUiTextForPlayer: (block, generator) => {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `updateUiTextForPlayer(${target, value, entity})`
},
showUnitNameLabel: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `showUnitNameLabel(${entity})`
},
closeShopForPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `closeShopForPlayer(${player})`
},
repeat: (block, generator) => {
  const count = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `repeat(${count})`
},
stopMusic: (block, generator) => {
  return `stopMusic()`
},
setVelocityOfEntityXY: (block, generator) => {
  const velocityx = generator.valueToCode(block, 'number', Order.NONE) || "";
  const velocityy = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `setVelocityOfEntityXY(${velocityx, velocityy, entity})`
},
selectedRegion: (block, generator) => {
  return `selectedRegion()`
},
showUnitNameLabelToPlayer: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUnitNameLabelToPlayer(${entity, player})`
},
spawnItem: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `spawnItem(${itemtype, position})`
},
createItemWithMaxQuantityAtPosition: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `createItemWithMaxQuantityAtPosition(${itemtype, position})`
},
getRandomItemTypeFromItemTypeGroup: (block, generator) => {
  const itemTypeGroup = generator.valueToCode(block, 'itemTypeGroup', Order.NONE) || "";
  return `getRandomItemTypeFromItemTypeGroup(${itemtypegroup})`
},
getLastOverlappedUnit: (block, generator) => {
  return `getLastOverlappedUnit()`
},
showMenu: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showMenu(${player})`
},
startAcceptingPlayers: (block, generator) => {
  return `startAcceptingPlayers()`
},
forAllEntities: (block, generator) => {
  const entityGroup = generator.valueToCode(block, 'entityGroup', Order.NONE) || "";
  return `forAllEntities(${entitygroup})`
},
makePlayerSelectUnit: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makePlayerSelectUnit(${player, unit})`
},
setEntityAttribute: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttribute(${attribute, entity, value})`
},
getLastCreatedItem: (block, generator) => {
  return `getLastCreatedItem()`
},
getLastCreatedProjectile: (block, generator) => {
  return `getLastCreatedProjectile()`
},
forAllItemTypes: (block, generator) => {
  const itemTypeGroup = generator.valueToCode(block, 'itemTypeGroup', Order.NONE) || "";
  return `forAllItemTypes(${itemtypegroup})`
},
createEntityForPlayerAtPositionWithDimensions: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createEntityForPlayerAtPositionWithDimensions(${entity, player, position, height, width, angle})`
},
getUnitCount: (block, generator) => {
  return `getUnitCount()`
},
getLastTouchingUnit: (block, generator) => {
  return `getLastTouchingUnit()`
},
getLastOverlappingItem: (block, generator) => {
  return `getLastOverlappingItem()`
},
getItemInInventorySlot: (block, generator) => {
  const slot = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getItemInInventorySlot(${slot, entity})`
},
updateUiTextForEveryone: (block, generator) => {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `updateUiTextForEveryone(${target, value})`
},
forAllProjectiles: (block, generator) => {
  const projectileGroup = generator.valueToCode(block, 'projectileGroup', Order.NONE) || "";
  return `forAllProjectiles(${projectilegroup})`
},
playerTypeOfPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerTypeOfPlayer(${player})`
},
angleBetweenPositions: (block, generator) => {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `angleBetweenPositions(${positiona, positionb})`
},
stopMusicForPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `stopMusicForPlayer(${player})`
},
positionCamera: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `positionCamera(${player, position})`
},
createProjectileAtPosition: (block, generator) => {
  const projectileType = generator.valueToCode(block, 'projectileType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `createProjectileAtPosition(${projectiletype, position, force, angle})`
},
getWidthOfRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getWidthOfRegion(${region})`
},
showMenuAndSelectCurrentServer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showMenuAndSelectCurrentServer(${player})`
},
getSourceUnitOfProjectile: (block, generator) => {
  const entity = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  return `getSourceUnitOfProjectile(${entity})`
},
setFadingTextOfUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const text = generator.valueToCode(block, 'string', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setFadingTextOfUnit(${unit, text, color})`
},
changeScaleOfEntityBody: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const scale = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeScaleOfEntityBody(${entity, scale})`
},
entityBounds: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityBounds(${entity})`
},
entityAttributeMin: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityAttributeMin(${attribute, entity})`
},
forAllRegions: (block, generator) => {
  const regionGroup = generator.valueToCode(block, 'regionGroup', Order.NONE) || "";
  return `forAllRegions(${regiongroup})`
},
rotateEntityToRadiansLT: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const radians = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `rotateEntityToRadiansLT(${entity, radians})`
},
stringToNumber: (block, generator) => {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringToNumber(${value})`
},
setPlayerAttributeMax: (block, generator) => {
  const attributeType = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttributeMax(${attributetype, player, number})`
},
setPlayerAttributeRegenerationRate: (block, generator) => {
  const attributeType = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttributeRegenerationRate(${attributetype, player, number})`
},
getQuantityOfUnitTypeInUnitTypeGroup: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  const unitTypeGroup = generator.valueToCode(block, 'unitTypeGroup', Order.NONE) || "";
  return `getQuantityOfUnitTypeInUnitTypeGroup(${unittype, unittypegroup})`
},
forAllUnitTypes: (block, generator) => {
  const unitTypeGroup = generator.valueToCode(block, 'unitTypeGroup', Order.NONE) || "";
  return `forAllUnitTypes(${unittypegroup})`
},
centerOfRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `centerOfRegion(${region})`
},
entityLastRaycastCollisionPosition: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityLastRaycastCollisionPosition(${entity})`
},
decreaseVariableByNumber: (block, generator) => {
  const variable = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `decreaseVariableByNumber(${variable, number})`
},
getPositionY: (block, generator) => {
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `getPositionY(${position})`
},
getLastCastingUnit: (block, generator) => {
  return `getLastCastingUnit()`
},
getLastTouchedUnit: (block, generator) => {
  return `getLastTouchedUnit()`
},
selectedParticle: (block, generator) => {
  return `selectedParticle()`
},
allUnitsAttachedToUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allUnitsAttachedToUnit(${entity})`
},
kickPlayer: (block, generator) => {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `kickPlayer(${entity, message})`
},
forAllPlayers: (block, generator) => {
  const playerGroup = generator.valueToCode(block, 'playerGroup', Order.NONE) || "";
  return `forAllPlayers(${playergroup})`
},
removeUnitFromUnitGroup: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const unitGroup = generator.valueToCode(block, 'unitGroup', Order.NONE) || "";
  return `removeUnitFromUnitGroup(${unit, unitgroup})`
},
playersAreNeutral: (block, generator) => {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playersAreNeutral(${playera, playerb})`
},
distanceBetweenPositions: (block, generator) => {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `distanceBetweenPositions(${positiona, positionb})`
},
flipEntitySprite: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const flip = generator.valueToCode(block, 'flip', Order.NONE) || "";
  return `flipEntitySprite(${entity, flip})`
},
makeUnitInvisibleToNeutralPlayers: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitInvisibleToNeutralPlayers(${entity})`
},
entityAttributeMax: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityAttributeMax(${attribute, entity})`
},
getEntityPosition: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityPosition(${entity})`
},
playerHasAdblockEnabled: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerHasAdblockEnabled(${player})`
},
saveUnitData: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `saveUnitData(${unit})`
},
applyTorqueOnEntity: (block, generator) => {
  const torque = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyTorqueOnEntity(${torque, entity})`
},
giveNewItemToUnit: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `giveNewItemToUnit(${itemtype, unit})`
},
playerAttributeMin: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerAttributeMin(${attribute, entity})`
},
startUsingItem: (block, generator) => {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `startUsingItem(${entity})`
},
moveEntity: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `moveEntity(${entity, position})`
},
for: (block, generator) => {
  const variableName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const start = generator.valueToCode(block, 'number', Order.NONE) || "";
  const stop = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `for(${variablename, start, stop})`
},
sin: (block, generator) => {
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `sin(${angle})`
},
getXCoordinateOfRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getXCoordinateOfRegion(${region})`
},
showMenuAndSelectBestServer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showMenuAndSelectBestServer(${player})`
},
getValueOfEntityVariable: (block, generator) => {
  const variable = generator.valueToCode(block, 'entityVariable', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getValueOfEntityVariable(${variable, entity})`
},
entitiesInRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `entitiesInRegion(${region})`
},
applyForceOnEntityXYRelative: (block, generator) => {
  const forcex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const forcey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyForceOnEntityXYRelative(${forcex, forcey, entity})`
},
applyForceOnEntityXYLT: (block, generator) => {
  const forcex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const forcey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyForceOnEntityXYLT(${forcex, forcey, entity})`
},
attachEntityToEntity: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const targetingEntity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `attachEntityToEntity(${entity, targetingentity})`
},
entityExists: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityExists(${entity})`
},
nameOfRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `nameOfRegion(${region})`
},
undefinedValue: (block, generator) => {
  return `undefinedValue()`
},
banPlayerFromChat: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `banPlayerFromChat(${player})`
},
getEntityVelocityY: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityVelocityY(${entity})`
},
allUnitTypesInGame: (block, generator) => {
  return `allUnitTypesInGame()`
},
getPositionX: (block, generator) => {
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `getPositionX(${position})`
},
getRandomPositionInRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getRandomPositionInRegion(${region})`
},
getTriggeringProjectile: (block, generator) => {
  return `getTriggeringProjectile()`
},
getUnitParticle: (block, generator) => {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitParticle(${particletype, entity})`
},
changeUnitType: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `changeUnitType(${entity, unittype})`
},
addPlayerToPlayerGroup: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerGroup = generator.valueToCode(block, 'playerGroup', Order.NONE) || "";
  return `addPlayerToPlayerGroup(${player, playergroup})`
},
playMusicForPlayerRepeatedly: (block, generator) => {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playMusicForPlayerRepeatedly(${music, player})`
},
showGameSuggestionsForPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showGameSuggestionsForPlayer(${player})`
},
isPositionInWall: (block, generator) => {
  const positionx = generator.valueToCode(block, 'number', Order.NONE) || "";
  const positiony = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `isPositionInWall(${positionx, positiony})`
},
entitiesInRegionInFrontOfEntityAtDistance: (block, generator) => {
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const distance = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `entitiesInRegionInFrontOfEntityAtDistance(${width, height, entity, distance})`
},
setEntityAttributeRegenerationRate: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttributeRegenerationRate(${attribute, entity, value})`
},
lastPlayedTimeOfPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `lastPlayedTimeOfPlayer(${player})`
},
makeUnitSelectItemAtSlot: (block, generator) => {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const slotIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `makeUnitSelectItemAtSlot(${unit, slotindex})`
},
getItemTypeName: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `getItemTypeName(${itemtype})`
},
getMax: (block, generator) => {
  const num1 = generator.valueToCode(block, 'number', Order.NONE) || "";
  const num2 = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getMax(${num1, num2})`
},
getLastCreatedUnit: (block, generator) => {
  return `getLastCreatedUnit()`
},
getRotateSpeed: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getRotateSpeed(${unittype})`
},
getOwnerOfItem: (block, generator) => {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getOwnerOfItem(${entity})`
},
allUnits: (block, generator) => {
  return `allUnits()`
},
stopUsingItem: (block, generator) => {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `stopUsingItem(${entity})`
},
makeUnitVisible: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitVisible(${entity})`
},
makeUnitInvisible: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitInvisible(${entity})`
},
break: (block, generator) => {
  return `break()`
},
getCurrentAmmoOfItem: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getCurrentAmmoOfItem(${item})`
},
getHeightOfRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `getHeightOfRegion(${region})`
},
changeScaleOfEntitySprite: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const scale = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeScaleOfEntitySprite(${entity, scale})`
},
substringOf: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const fromIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const toIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `substringOf(${string, fromindex, toindex})`
},
setPlayerName: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setPlayerName(${player, name})`
},
makeUnitPickupItemAtSlot: (block, generator) => {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const slotIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `makeUnitPickupItemAtSlot(${unit, item, slotindex})`
},
dropItemInInventorySlot: (block, generator) => {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const slotIndex = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `dropItemInInventorySlot(${unit, slotindex})`
},
subString: (block, generator) => {
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const patternString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `subString(${sourcestring, patternstring})`
},
getItemMaxQuantity: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemMaxQuantity(${item})`
},
unbanPlayerFromChat: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `unbanPlayerFromChat(${player})`
},
absoluteValueOfNumber: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `absoluteValueOfNumber(${number})`
},
changeDescriptionOfItem: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `changeDescriptionOfItem(${item, string})`
},
getTriggeringUnit: (block, generator) => {
  return `getTriggeringUnit()`
},
getOwner: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getOwner(${entity})`
},
selectedPlayer: (block, generator) => {
  return `selectedPlayer()`
},
getLastTouchedItem: (block, generator) => {
  return `getLastTouchedItem()`
},
getLastTouchedProjectile: (block, generator) => {
  return `getLastTouchedProjectile()`
},
allUnitsAttachedToItem: (block, generator) => {
  const entity = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `allUnitsAttachedToItem(${entity})`
},
sendChatMessageToPlayer: (block, generator) => {
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `sendChatMessageToPlayer(${message, player})`
},
playAdForEveryone: (block, generator) => {
  return `playAdForEveryone()`
},
hideUiTextForPlayer: (block, generator) => {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUiTextForPlayer(${target, entity})`
},
showUiTextForPlayer: (block, generator) => {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUiTextForPlayer(${target, entity})`
},
playMusic: (block, generator) => {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  return `playMusic(${music})`
},
assignPlayerType: (block, generator) => {
  const entity = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerType = generator.valueToCode(block, 'playerType', Order.NONE) || "";
  return `assignPlayerType(${entity, playertype})`
},
allProjectiles: (block, generator) => {
  return `allProjectiles()`
},
playMusicForPlayer: (block, generator) => {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playMusicForPlayer(${music, player})`
},
condition: (block, generator) => {
  const conditions = generator.valueToCode(block, 'conditions', Order.NONE) || "";
  return `condition(${conditions})`
},
makeUnitVisibleToNeutralPlayers: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitVisibleToNeutralPlayers(${entity})`
},
makeUnitVisibleToFriendlyPlayers: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `makeUnitVisibleToFriendlyPlayers(${entity})`
},
makeUnitPickupItem: (block, generator) => {
  const unit = generator.valueToCode(block, 'selectedUnit', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `makeUnitPickupItem(${unit, item})`
},
dynamicRegion: (block, generator) => {
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `dynamicRegion(${x, y, width, height})`
},
getEntityAttribute: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityAttribute(${attribute, entity})`
},
currentTimeStamp: (block, generator) => {
  return `currentTimeStamp()`
},
giveNewItemWithQuantityToUnit: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `giveNewItemWithQuantityToUnit(${itemtype, number, unit})`
},
getEntityVelocityX: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `getEntityVelocityX(${entity})`
},
defaultQuantityOfItemType: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `defaultQuantityOfItemType(${itemtype})`
},
getQuantityOfItemTypeInItemTypeGroup: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const itemTypeGroup = generator.valueToCode(block, 'itemTypeGroup', Order.NONE) || "";
  return `getQuantityOfItemTypeInItemTypeGroup(${itemtype, itemtypegroup})`
},
getRandomUnitTypeFromUnitTypeGroup: (block, generator) => {
  const unitTypeGroup = generator.valueToCode(block, 'unitTypeGroup', Order.NONE) || "";
  return `getRandomUnitTypeFromUnitTypeGroup(${unittypegroup})`
},
selectedUnitType: (block, generator) => {
  return `selectedUnitType()`
},
getNumberOfItemsPresent: (block, generator) => {
  return `getNumberOfItemsPresent()`
},
getMin: (block, generator) => {
  const num1 = generator.valueToCode(block, 'number', Order.NONE) || "";
  const num2 = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getMin(${num1, num2})`
},
selectedUnit: (block, generator) => {
  return `selectedUnit()`
},
getLastOverlappingProjectile: (block, generator) => {
  return `getLastOverlappingProjectile()`
},
getTriggeringAttribute: (block, generator) => {
  return `getTriggeringAttribute()`
},
allUnitsMountedOnUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `allUnitsMountedOnUnit(${entity})`
},
allUnitsInRegion: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  return `allUnitsInRegion(${region})`
},
dropAllItems: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `dropAllItems(${entity})`
},
useItemOnce: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `useItemOnce(${item})`
},
stopAcceptingPlayers: (block, generator) => {
  return `stopAcceptingPlayers()`
},
setEntityVelocityAtAngle: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const speed = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityVelocityAtAngle(${entity, speed, angle})`
},
setEntityAttributeMax: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setEntityAttributeMax(${attribute, entity, value})`
},
getValueOfPlayerVariable: (block, generator) => {
  const variable = generator.valueToCode(block, 'playerVariable', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getValueOfPlayerVariable(${variable, player})`
},
allRegions: (block, generator) => {
  return `allRegions()`
},
maxValueOfItemType: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `maxValueOfItemType(${itemtype})`
},
angleBetweenMouseAndWindowCenter: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `angleBetweenMouseAndWindowCenter(${player})`
},
setPlayerAttributeMin: (block, generator) => {
  const attributeType = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setPlayerAttributeMin(${attributetype, player, number})`
},
makePlayerTradeWithPlayer: (block, generator) => {
  const playerA = generator.valueToCode(block, 'player', Order.NONE) || "";
  const playerB = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `makePlayerTradeWithPlayer(${playera, playerb})`
},
getExponent: (block, generator) => {
  const base = generator.valueToCode(block, 'number', Order.NONE) || "";
  const power = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getExponent(${base, power})`
},
getLastAttackedUnit: (block, generator) => {
  return `getLastAttackedUnit()`
},
getLastAttackingUnit: (block, generator) => {
  return `getLastAttackingUnit()`
},
updateUiTextForTimeForPlayer: (block, generator) => {
  const target = generator.valueToCode(block, 'updateUiText.target', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const time = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `updateUiTextForTimeForPlayer(${target, value, player, time})`
},
getNumberOfUnitsOfUnitType: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getNumberOfUnitsOfUnitType(${unittype})`
},
aiMoveToPosition: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `aiMoveToPosition(${unit, position})`
},
aiAttackUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const targetUnit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `aiAttackUnit(${unit, targetunit})`
},
getNumberOfPlayersOfPlayerType: (block, generator) => {
  const playerType = generator.valueToCode(block, 'playerType', Order.NONE) || "";
  return `getNumberOfPlayersOfPlayerType(${playertype})`
},
changeSensorRadius: (block, generator) => {
  const sensor = generator.valueToCode(block, 'sensor', Order.NONE) || "";
  const radius = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeSensorRadius(${sensor, radius})`
},
ownerUnitOfSensor: (block, generator) => {
  const sensor = generator.valueToCode(block, 'sensor', Order.NONE) || "";
  return `ownerUnitOfSensor(${sensor})`
},
getSensorOfUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getSensorOfUnit(${unit})`
},
getTriggeringSensor: (block, generator) => {
  return `getTriggeringSensor()`
},
getLastChatMessageSentByPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getLastChatMessageSentByPlayer(${player})`
},
loadPlayerDataAndApplyIt: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `loadPlayerDataAndApplyIt(${player, unit})`
},
createFloatingText: (block, generator) => {
  const text = generator.valueToCode(block, 'string', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `createFloatingText(${text, position, color})`
},
getLengthOfString: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getLengthOfString(${string})`
},
setLastAttackedUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setLastAttackedUnit(${unit})`
},
setLastAttackingUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setLastAttackingUnit(${unit})`
},
setItemFireRate: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setItemFireRate(${number, item})`
},
applyImpulseOnEntityXY: (block, generator) => {
  const impulsex = generator.valueToCode(block, 'number', Order.NONE) || "";
  const impulsey = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `applyImpulseOnEntityXY(${impulsex, impulsey, entity})`
},
toLowerCase: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `toLowerCase(${string})`
},
stringStartsWith: (block, generator) => {
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const patternString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringStartsWith(${sourcestring, patternstring})`
},
stringEndsWith: (block, generator) => {
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const patternString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringEndsWith(${sourcestring, patternstring})`
},
replaceValuesInString: (block, generator) => {
  const matchString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const sourceString = generator.valueToCode(block, 'string', Order.NONE) || "";
  const newString = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `replaceValuesInString(${matchstring, sourcestring, newstring})`
},
getLastAttackingItem: (block, generator) => {
  return `getLastAttackingItem()`
},
playSoundForPlayer: (block, generator) => {
  const sound = generator.valueToCode(block, 'sound', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playSoundForPlayer(${sound, player})`
},
stopSoundForPlayer: (block, generator) => {
  const sound = generator.valueToCode(block, 'sound', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `stopSoundForPlayer(${sound, player})`
},
showDismissibleInputModalToPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const inputLabel = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `showDismissibleInputModalToPlayer(${player, inputlabel})`
},
getTimeString: (block, generator) => {
  const seconds = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getTimeString(${seconds})`
},
setItemName: (block, generator) => {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setItemName(${name, item})`
},
changeItemInventoryImage: (block, generator) => {
  const url = generator.valueToCode(block, 'string', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `changeItemInventoryImage(${url, item})`
},
getItemDescription: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `getItemDescription(${item})`
},
addAttributeBuffToUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const time = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `addAttributeBuffToUnit(${entity, value, attribute, time})`
},
addPercentageAttributeBuffToUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const time = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `addPercentageAttributeBuffToUnit(${entity, value, attribute, time})`
},
stunUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stunUnit(${unit})`
},
removeStunFromUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `removeStunFromUnit(${unit})`
},
setLastAttackingItem: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setLastAttackingItem(${item})`
},
mutePlayerMicrophone: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `mutePlayerMicrophone(${player})`
},
unmutePlayerMicrophone: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `unmutePlayerMicrophone(${player})`
},
sendPostRequest: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const url = generator.valueToCode(block, 'string', Order.NONE) || "";
  const varName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `sendPostRequest(${string, url, varname})`
},
loadUnitDataFromString: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `loadUnitDataFromString(${string, unit})`
},
loadPlayerDataFromString: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `loadPlayerDataFromString(${string, player})`
},
getUnitData: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitData(${unit})`
},
getPlayerData: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerData(${player})`
},
getUnitId: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `getUnitId(${unit})`
},
getPlayerId: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerId(${player})`
},
getUnitFromId: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getUnitFromId(${string})`
},
getPlayerFromId: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getPlayerFromId(${string})`
},
getStringArrayLength: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getStringArrayLength(${string})`
},
getStringArrayElement: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getStringArrayElement(${number, string})`
},
insertStringArrayElement: (block, generator) => {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `insertStringArrayElement(${value, string})`
},
updateStringArrayElement: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `updateStringArrayElement(${number, string, value})`
},
removeStringArrayElement: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `removeStringArrayElement(${number, string})`
},
removeAllAttributeBuffs: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `removeAllAttributeBuffs(${unit})`
},
changeInventorySlotColor: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `changeInventorySlotColor(${item, string})`
},
setOwnerUnitOfProjectile: (block, generator) => {
  const projectile = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `setOwnerUnitOfProjectile(${projectile, unit})`
},
thisEntity: (block, generator) => {
  return `thisEntity()`
},
entityName: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityName(${entity})`
},
selectedInventorySlot: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `selectedInventorySlot(${unit})`
},
log10: (block, generator) => {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `log10(${value})`
},
addBotPlayer: (block, generator) => {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `addBotPlayer(${name})`
},
botPlayers: (block, generator) => {
  return `botPlayers()`
},
enableAI: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `enableAI(${unit})`
},
disableAI: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `disableAI(${unit})`
},
isAIEnabled: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `isAIEnabled(${unit})`
},
isBotPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isBotPlayer(${player})`
},
isComputerPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isComputerPlayer(${player})`
},
entitiesBetweenTwoPositions: (block, generator) => {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `entitiesBetweenTwoPositions(${positiona, positionb})`
},
unitSensorRadius: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `unitSensorRadius(${unit})`
},
aiGoIdle: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `aiGoIdle(${unit})`
},
targetUnit: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `targetUnit(${unit})`
},
sendCoinsToPlayer: (block, generator) => {
  const coins = generator.valueToCode(block, 'number', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `sendCoinsToPlayer(${coins, player})`
},
addChatFilter: (block, generator) => {
  const words = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `addChatFilter(${words})`
},
numberToString: (block, generator) => {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `numberToString(${value})`
},
sendCoinsToPlayer2: (block, generator) => {
  const coins = generator.valueToCode(block, 'number', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `sendCoinsToPlayer2(${coins, player})`
},
playerIsCreator: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerIsCreator(${player})`
},
setMaxAttackRange: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setMaxAttackRange(${unit, number})`
},
setLetGoDistance: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setLetGoDistance(${unit, number})`
},
setMaxTravelDistance: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setMaxTravelDistance(${unit, number})`
},
getPlayerSelectedUnit: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerSelectedUnit(${player})`
},
toDegrees: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `toDegrees(${number})`
},
toRadians: (block, generator) => {
  const number = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `toRadians(${number})`
},
getPositionInFrontOfPosition: (block, generator) => {
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const distance = generator.valueToCode(block, 'number', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getPositionInFrontOfPosition(${position, distance, angle})`
},
editMapTile: (block, generator) => {
  const gid = generator.valueToCode(block, 'number', Order.NONE) || "";
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `editMapTile(${gid, layer, x, y})`
},
loadMapFromString: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `loadMapFromString(${string})`
},
getMapJson: (block, generator) => {
  return `getMapJson()`
},
teleportEntity: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `teleportEntity(${entity, position})`
},
forAllDebris: (block, generator) => {
  const debrisGroup = generator.valueToCode(block, 'debrisGroup', Order.NONE) || "";
  return `forAllDebris(${debrisgroup})`
},
roleExistsForPlayer: (block, generator) => {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `roleExistsForPlayer(${name, player})`
},
emitParticlesFromEntity: (block, generator) => {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `emitParticlesFromEntity(${particletype, angle, entity})`
},
emitParticlesAtPosition: (block, generator) => {
  const particleType = generator.valueToCode(block, 'particleType', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `emitParticlesAtPosition(${particletype, position, angle})`
},
editMapTiles: (block, generator) => {
  const gid = generator.valueToCode(block, 'number', Order.NONE) || "";
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `editMapTiles(${gid, layer, x, y, width, height})`
},
getMapTileId: (block, generator) => {
  const x = generator.valueToCode(block, 'number', Order.NONE) || "";
  const y = generator.valueToCode(block, 'number', Order.NONE) || "";
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getMapTileId(${x, y, layer})`
},
stringIsANumber: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringIsANumber(${string})`
},
setSourceItemOfProjectile: (block, generator) => {
  const projectile = generator.valueToCode(block, 'projectile', Order.NONE) || "";
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `setSourceItemOfProjectile(${projectile, item})`
},
getGlobalVariable: (block, generator) => {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getGlobalVariable(${name})`
},
lastReceivedPostResponse: (block, generator) => {
  return `lastReceivedPostResponse()`
},
lastUpdatedVariableName: (block, generator) => {
  return `lastUpdatedVariableName()`
},
getVariable: (block, generator) => {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getVariable(${name})`
},
stringToObject: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `stringToObject(${string})`
},
elementFromObject: (block, generator) => {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `elementFromObject(${key, object})`
},
objectToString: (block, generator) => {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `objectToString(${object})`
},
removeElement: (block, generator) => {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `removeElement(${key, object})`
},
makePlayerSendChatMessage: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `makePlayerSendChatMessage(${player, message})`
},
emptyObject: (block, generator) => {
  return `emptyObject()`
},
addStringElement: (block, generator) => {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `addStringElement(${key, value, object})`
},
elementCount: (block, generator) => {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `elementCount(${object})`
},
addObjectElement: (block, generator) => {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'object', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `addObjectElement(${key, value, object})`
},
requestPost: (block, generator) => {
  const data = generator.valueToCode(block, 'object', Order.NONE) || "";
  const url = generator.valueToCode(block, 'string', Order.NONE) || "";
  const varName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `requestPost(${data, url, varname})`
},
unitIsCarryingItemType: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `unitIsCarryingItemType(${unit, itemtype})`
},
startCastingAbility: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const ability = generator.valueToCode(block, 'ability', Order.NONE) || "";
  return `startCastingAbility(${entity, ability})`
},
stopCastingAbility: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const ability = generator.valueToCode(block, 'ability', Order.NONE) || "";
  return `stopCastingAbility(${entity, ability})`
},
applyTorqueOnEntityToFacePosition: (block, generator) => {
  const force = generator.valueToCode(block, 'number', Order.NONE) || "";
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const position = generator.valueToCode(block, 'position', Order.NONE) || "";
  return `applyTorqueOnEntityToFacePosition(${force, entity, position})`
},
changeRegionColor: (block, generator) => {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";
  const inside = generator.valueToCode(block, 'string', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeRegionColor(${region, inside, alpha})`
},
startMovingUnitUp: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitUp(${entity})`
},
startMovingUnitDown: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitDown(${entity})`
},
startMovingUnitLeft: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitLeft(${entity})`
},
startMovingUnitRight: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `startMovingUnitRight(${entity})`
},
stopMovingUnitX: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stopMovingUnitX(${entity})`
},
stopMovingUnitY: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stopMovingUnitY(${entity})`
},
openBackpackForPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openBackpackForPlayer(${player})`
},
closeBackpackForPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `closeBackpackForPlayer(${player})`
},
setUnitNameLabelColor: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `setUnitNameLabelColor(${unit, color})`
},
getCameraPosition: (block, generator) => {
  return `getCameraPosition()`
},
getCameraWidth: (block, generator) => {
  return `getCameraWidth()`
},
getCameraHeight: (block, generator) => {
  return `getCameraHeight()`
},
allUnitsOfUnitType: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `allUnitsOfUnitType(${unittype})`
},
forAllUnits: (block, generator) => {
  const unitGroup = generator.valueToCode(block, 'unitGroup', Order.NONE) || "";
  return `forAllUnits(${unitgroup})`
},
allItemsOfItemType: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  return `allItemsOfItemType(${itemtype})`
},
setUnitNameLabelColorForPlayer: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const color = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `setUnitNameLabelColorForPlayer(${unit, color, player})`
},
getDefaultAttributeValueOfUnitType: (block, generator) => {
  const attribute = generator.valueToCode(block, 'attributeType', Order.NONE) || "";
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `getDefaultAttributeValueOfUnitType(${attribute, unittype})`
},
playerCameraStopTracking: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `playerCameraStopTracking(${player})`
},
hideUiElementForPlayer: (block, generator) => {
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `hideUiElementForPlayer(${elementid, player})`
},
showUiElementForPlayer: (block, generator) => {
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `showUiElementForPlayer(${elementid, player})`
},
setUIElementHtml: (block, generator) => {
  const htmlStr = generator.valueToCode(block, 'string', Order.NONE) || "";
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `setUIElementHtml(${htmlstr, elementid, player})`
},
lastClickedUiElementId: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `lastClickedUiElementId(${player})`
},
appendRealtimeCSSForPlayer: (block, generator) => {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `appendRealtimeCSSForPlayer(${value, player})`
},
updateRealtimeCSSForPlayer: (block, generator) => {
  const value = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `updateRealtimeCSSForPlayer(${value, player})`
},
realtimeCSSOfPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `realtimeCSSOfPlayer(${player})`
},
mathCeiling: (block, generator) => {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathCeiling(${value})`
},
stopMovingUnit: (block, generator) => {
  const entity = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `stopMovingUnit(${entity})`
},
toUpperCase: (block, generator) => {
  const string = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `toUpperCase(${string})`
},
getHighScoreOfPlayer: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getHighScoreOfPlayer(${player})`
},
isUnitMoving: (block, generator) => {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  return `isUnitMoving(${unit})`
},
forIn: (block, generator) => {
  const variableNameMain = generator.valueToCode(block, 'variable', Order.NONE) || "";
  const variableNameSource = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `forIn(${variablenamemain, variablenamesource})`
},
addClassToUIElement: (block, generator) => {
  const className = generator.valueToCode(block, 'string', Order.NONE) || "";
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `addClassToUIElement(${classname, elementid, player})`
},
removeClassFromUIElement: (block, generator) => {
  const className = generator.valueToCode(block, 'string', Order.NONE) || "";
  const elementId = generator.valueToCode(block, 'string', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `removeClassFromUIElement(${classname, elementid, player})`
},
isPlayerClient: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isPlayerClient(${player})`
},
setCameraDeadzone: (block, generator) => {
  const width = generator.valueToCode(block, 'number', Order.NONE) || "";
  const height = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `setCameraDeadzone(${width, height})`
},
purchaseItemFromShop: (block, generator) => {
  const itemType = generator.valueToCode(block, 'itemType', Order.NONE) || "";
  const shop = generator.valueToCode(block, 'shop', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `purchaseItemFromShop(${itemtype, shop, player})`
},
getUnitType: (block, generator) => {
  const unitType = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getUnitType(${unittype})`
},
getItemType: (block, generator) => {
  const itemType = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getItemType(${itemtype})`
},
getProjectileType: (block, generator) => {
  const projectileType = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getProjectileType(${projectiletype})`
},
getSecondaryTouchPosition: (block, generator) => {
  return `getSecondaryTouchPosition()`
},
allProjectilesOfProjectileType: (block, generator) => {
  const projectileType = generator.valueToCode(block, 'projectileType', Order.NONE) || "";
  return `allProjectilesOfProjectileType(${projectiletype})`
},
unitTypeWidth: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `unitTypeWidth(${unittype})`
},
unitTypeHeight: (block, generator) => {
  const unitType = generator.valueToCode(block, 'unitType', Order.NONE) || "";
  return `unitTypeHeight(${unittype})`
},
notValue: (block, generator) => {
  const boolean = generator.valueToCode(block, 'boolean', Order.NONE) || "";
  return `notValue(${boolean})`
},
isPlayerOnMobile: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `isPlayerOnMobile(${player})`
},
getPlayerUsername: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `getPlayerUsername(${player})`
},
repeatWithDelay: (block, generator) => {
  const count = generator.valueToCode(block, 'number', Order.NONE) || "";
  const delay = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `repeatWithDelay(${count, delay})`
},
entityFacingAngle: (block, generator) => {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  return `entityFacingAngle(${entity})`
},
playersOfPlayerType: (block, generator) => {
  const playerType = generator.valueToCode(block, 'playerType', Order.NONE) || "";
  return `playersOfPlayerType(${playertype})`
},
sendSecurePostRequest: (block, generator) => {
  const apiCredentials = generator.valueToCode(block, 'secrets', Order.NONE) || "";
  const data = generator.valueToCode(block, 'object', Order.NONE) || "";
  const varName = generator.valueToCode(block, 'variable', Order.NONE) || "";
  return `sendSecurePostRequest(${apicredentials, data, varname})`
},
openSkinShop: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openSkinShop(${player})`
},
openSkinSubmissionPage: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  return `openSkinSubmissionPage(${player})`
},
playerCameraSetPitch: (block, generator) => {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `playerCameraSetPitch(${player, angle})`
},
getRegionByName: (block, generator) => {
  const name = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `getRegionByName(${name})`
},
changeLayerOpacity: (block, generator) => {
  const layer = generator.valueToCode(block, 'number', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `changeLayerOpacity(${layer, alpha})`
},
forAllElementsInObject: (block, generator) => {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `forAllElementsInObject(${object})`
},
selectedElement: (block, generator) => {
  return `selectedElement()`
},
objectContainsElement: (block, generator) => {
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  return `objectContainsElement(${object, key})`
},
selectedElementsKey: (block, generator) => {
  return `selectedElementsKey()`
},
playMusicForPlayerAtTime: (block, generator) => {
  const music = generator.valueToCode(block, 'music', Order.NONE) || "";
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const time = generator.valueToCode(block, 'time', Order.NONE) || "";
  return `playMusicForPlayerAtTime(${music, player, time})`
},
getServerAge: (block, generator) => {
  return `getServerAge()`
},
getServerStartTime: (block, generator) => {
  return `getServerStartTime()`
},
mathRound: (block, generator) => {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathRound(${value})`
},
addNumberElement: (block, generator) => {
  const key = generator.valueToCode(block, 'string', Order.NONE) || "";
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  const object = generator.valueToCode(block, 'object', Order.NONE) || "";
  return `addNumberElement(${key, value, object})`
},
mathSign: (block, generator) => {
  const value = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `mathSign(${value})`
},
itemFiresProjectiles: (block, generator) => {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";
  return `itemFiresProjectiles(${item})`
},
lerp: (block, generator) => {
  const valueA = generator.valueToCode(block, 'number', Order.NONE) || "";
  const valueB = generator.valueToCode(block, 'number', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `lerp(${valuea, valueb, alpha})`
},
getLerpPosition: (block, generator) => {
  const positionA = generator.valueToCode(block, 'position', Order.NONE) || "";
  const positionB = generator.valueToCode(block, 'position', Order.NONE) || "";
  const alpha = generator.valueToCode(block, 'number', Order.NONE) || "";
  return `getLerpPosition(${positiona, positionb, alpha})`
},

      }