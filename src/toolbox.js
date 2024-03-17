/**
      * @license
      * Copyright 2023 Google LLC
      * SPDX-License-Identifier: Apache-2.0
      */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': 'item',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getiteminfrontofunit',
                }
                , {
                    'kind': 'block',
                    'type': 'getitematslot',
                }
                , {
                    'kind': 'block',
                    'type': 'dropitematposition',
                }
                , {
                    'kind': 'block',
                    'type': 'selecteditem',
                }
                , {
                    'kind': 'block',
                    'type': 'gettriggeringitem',
                }
                , {
                    'kind': 'block',
                    'type': 'updateitemquantity',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemcurrentlyheldbyunit',
                }
                , {
                    'kind': 'block',
                    'type': 'lastuseditem',
                }
                , {
                    'kind': 'block',
                    'type': 'getsourceitemofprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'spawnitem',
                }
                , {
                    'kind': 'block',
                    'type': 'createitemwithmaxquantityatposition',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastcreateditem',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastoverlappingitem',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemininventoryslot',
                }
                , {
                    'kind': 'block',
                    'type': 'givenewitemtounit',
                }
                , {
                    'kind': 'block',
                    'type': 'startusingitem',
                }
                , {
                    'kind': 'block',
                    'type': 'stopusingitem',
                }
                , {
                    'kind': 'block',
                    'type': 'changedescriptionofitem',
                }
                , {
                    'kind': 'block',
                    'type': 'getlasttoucheditem',
                }
                , {
                    'kind': 'block',
                    'type': 'givenewitemwithquantitytounit',
                }
                , {
                    'kind': 'block',
                    'type': 'useitemonce',
                }
                , {
                    'kind': 'block',
                    'type': 'setitemfirerate',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastattackingitem',
                }
                , {
                    'kind': 'block',
                    'type': 'setitemname',
                }
                , {
                    'kind': 'block',
                    'type': 'changeiteminventoryimage',
                }
                , {
                    'kind': 'block',
                    'type': 'setlastattackingitem',
                }
                , {
                    'kind': 'block',
                    'type': 'changeinventoryslotcolor',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'projectile',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'selectedprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastcreatedprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'createprojectileatposition',
                }
                , {
                    'kind': 'block',
                    'type': 'gettriggeringprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'getlasttouchedprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastoverlappingprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'setownerunitofprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'setsourceitemofprojectile',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'attributetype',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getattributetypeofattribute',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'ad',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'playadforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'playadforeveryone',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'number',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getrandomnumberbetween',
                }
                , {
                    'kind': 'block',
                    'type': 'unitsfacingangle',
                }
                , {
                    'kind': 'block',
                    'type': 'getmapheight',
                }
                , {
                    'kind': 'block',
                    'type': 'tofixed',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemquantity',
                }
                , {
                    'kind': 'block',
                    'type': 'cos',
                }
                , {
                    'kind': 'block',
                    'type': 'entityheight',
                }
                , {
                    'kind': 'block',
                    'type': 'playerattributemax',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayerattribute',
                }
                , {
                    'kind': 'block',
                    'type': 'getmapwidth',
                }
                , {
                    'kind': 'block',
                    'type': 'entitywidth',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayercount',
                }
                , {
                    'kind': 'block',
                    'type': 'arctan',
                }
                , {
                    'kind': 'block',
                    'type': 'mathfloor',
                }
                , {
                    'kind': 'block',
                    'type': 'getycoordinateofregion',
                }
                , {
                    'kind': 'block',
                    'type': 'squareroot',
                }
                , {
                    'kind': 'block',
                    'type': 'increasevariablebynumber',
                }
                , {
                    'kind': 'block',
                    'type': 'getunitcount',
                }
                , {
                    'kind': 'block',
                    'type': 'anglebetweenpositions',
                }
                , {
                    'kind': 'block',
                    'type': 'getwidthofregion',
                }
                , {
                    'kind': 'block',
                    'type': 'entityattributemin',
                }
                , {
                    'kind': 'block',
                    'type': 'stringtonumber',
                }
                , {
                    'kind': 'block',
                    'type': 'getquantityofunittypeinunittypegroup',
                }
                , {
                    'kind': 'block',
                    'type': 'decreasevariablebynumber',
                }
                , {
                    'kind': 'block',
                    'type': 'getpositiony',
                }
                , {
                    'kind': 'block',
                    'type': 'distancebetweenpositions',
                }
                , {
                    'kind': 'block',
                    'type': 'entityattributemax',
                }
                , {
                    'kind': 'block',
                    'type': 'playerattributemin',
                }
                , {
                    'kind': 'block',
                    'type': 'sin',
                }
                , {
                    'kind': 'block',
                    'type': 'getxcoordinateofregion',
                }
                , {
                    'kind': 'block',
                    'type': 'getentityvelocityy',
                }
                , {
                    'kind': 'block',
                    'type': 'getpositionx',
                }
                , {
                    'kind': 'block',
                    'type': 'lastplayedtimeofplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'getmax',
                }
                , {
                    'kind': 'block',
                    'type': 'getrotatespeed',
                }
                , {
                    'kind': 'block',
                    'type': 'getcurrentammoofitem',
                }
                , {
                    'kind': 'block',
                    'type': 'getheightofregion',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemmaxquantity',
                }
                , {
                    'kind': 'block',
                    'type': 'absolutevalueofnumber',
                }
                , {
                    'kind': 'block',
                    'type': 'getentityattribute',
                }
                , {
                    'kind': 'block',
                    'type': 'currenttimestamp',
                }
                , {
                    'kind': 'block',
                    'type': 'getentityvelocityx',
                }
                , {
                    'kind': 'block',
                    'type': 'defaultquantityofitemtype',
                }
                , {
                    'kind': 'block',
                    'type': 'getquantityofitemtypeinitemtypegroup',
                }
                , {
                    'kind': 'block',
                    'type': 'getnumberofitemspresent',
                }
                , {
                    'kind': 'block',
                    'type': 'getmin',
                }
                , {
                    'kind': 'block',
                    'type': 'maxvalueofitemtype',
                }
                , {
                    'kind': 'block',
                    'type': 'anglebetweenmouseandwindowcenter',
                }
                , {
                    'kind': 'block',
                    'type': 'getexponent',
                }
                , {
                    'kind': 'block',
                    'type': 'getnumberofunitsofunittype',
                }
                , {
                    'kind': 'block',
                    'type': 'getnumberofplayersofplayertype',
                }
                , {
                    'kind': 'block',
                    'type': 'getlengthofstring',
                }
                , {
                    'kind': 'block',
                    'type': 'getstringarraylength',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedinventoryslot',
                }
                , {
                    'kind': 'block',
                    'type': 'log10',
                }
                , {
                    'kind': 'block',
                    'type': 'unitsensorradius',
                }
                , {
                    'kind': 'block',
                    'type': 'todegrees',
                }
                , {
                    'kind': 'block',
                    'type': 'toradians',
                }
                , {
                    'kind': 'block',
                    'type': 'getmaptileid',
                }
                , {
                    'kind': 'block',
                    'type': 'elementcount',
                }
                , {
                    'kind': 'block',
                    'type': 'getcamerawidth',
                }
                , {
                    'kind': 'block',
                    'type': 'getcameraheight',
                }
                , {
                    'kind': 'block',
                    'type': 'getdefaultattributevalueofunittype',
                }
                , {
                    'kind': 'block',
                    'type': 'mathceiling',
                }
                , {
                    'kind': 'block',
                    'type': 'gethighscoreofplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'unittypewidth',
                }
                , {
                    'kind': 'block',
                    'type': 'unittypeheight',
                }
                , {
                    'kind': 'block',
                    'type': 'entityfacingangle',
                }
                , {
                    'kind': 'block',
                    'type': 'getserverage',
                }
                , {
                    'kind': 'block',
                    'type': 'getserverstarttime',
                }
                , {
                    'kind': 'block',
                    'type': 'mathround',
                }
                , {
                    'kind': 'block',
                    'type': 'mathsign',
                }
                , {
                    'kind': 'block',
                    'type': 'lerp',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'timer',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'settimeout',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'string',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getentitytype',
                }
                , {
                    'kind': 'block',
                    'type': 'playercustominput',
                }
                , {
                    'kind': 'block',
                    'type': 'concat',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayername',
                }
                , {
                    'kind': 'block',
                    'type': 'getunittypename',
                }
                , {
                    'kind': 'block',
                    'type': 'nameofregion',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemtypename',
                }
                , {
                    'kind': 'block',
                    'type': 'substringof',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastchatmessagesentbyplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'tolowercase',
                }
                , {
                    'kind': 'block',
                    'type': 'replacevaluesinstring',
                }
                , {
                    'kind': 'block',
                    'type': 'gettimestring',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemdescription',
                }
                , {
                    'kind': 'block',
                    'type': 'getunitdata',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayerdata',
                }
                , {
                    'kind': 'block',
                    'type': 'getunitid',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayerid',
                }
                , {
                    'kind': 'block',
                    'type': 'getstringarrayelement',
                }
                , {
                    'kind': 'block',
                    'type': 'insertstringarrayelement',
                }
                , {
                    'kind': 'block',
                    'type': 'updatestringarrayelement',
                }
                , {
                    'kind': 'block',
                    'type': 'removestringarrayelement',
                }
                , {
                    'kind': 'block',
                    'type': 'entityname',
                }
                , {
                    'kind': 'block',
                    'type': 'numbertostring',
                }
                , {
                    'kind': 'block',
                    'type': 'getmapjson',
                }
                , {
                    'kind': 'block',
                    'type': 'lastreceivedpostresponse',
                }
                , {
                    'kind': 'block',
                    'type': 'lastupdatedvariablename',
                }
                , {
                    'kind': 'block',
                    'type': 'objecttostring',
                }
                , {
                    'kind': 'block',
                    'type': 'lastclickeduielementid',
                }
                , {
                    'kind': 'block',
                    'type': 'realtimecssofplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'touppercase',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayerusername',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedelementskey',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'entity',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getselectedentity',
                }
                , {
                    'kind': 'block',
                    'type': 'rotateentitytofaceposition',
                }
                , {
                    'kind': 'block',
                    'type': 'destroyentity',
                }
                , {
                    'kind': 'block',
                    'type': 'setentitydepth',
                }
                , {
                    'kind': 'block',
                    'type': 'applyforceonentityangle',
                }
                , {
                    'kind': 'block',
                    'type': 'setentitylifespan',
                }
                , {
                    'kind': 'block',
                    'type': 'setentityattributemin',
                }
                , {
                    'kind': 'block',
                    'type': 'applyforceonentityanglelt',
                }
                , {
                    'kind': 'block',
                    'type': 'setentitystate',
                }
                , {
                    'kind': 'block',
                    'type': 'createentityatpositionwithdimensions',
                }
                , {
                    'kind': 'block',
                    'type': 'playentityanimation',
                }
                , {
                    'kind': 'block',
                    'type': 'applyforceonentityxy',
                }
                , {
                    'kind': 'block',
                    'type': 'setvelocityofentityxy',
                }
                , {
                    'kind': 'block',
                    'type': 'setentityattribute',
                }
                , {
                    'kind': 'block',
                    'type': 'changescaleofentitybody',
                }
                , {
                    'kind': 'block',
                    'type': 'rotateentitytoradianslt',
                }
                , {
                    'kind': 'block',
                    'type': 'flipentitysprite',
                }
                , {
                    'kind': 'block',
                    'type': 'applytorqueonentity',
                }
                , {
                    'kind': 'block',
                    'type': 'applyforceonentityxyrelative',
                }
                , {
                    'kind': 'block',
                    'type': 'applyforceonentityxylt',
                }
                , {
                    'kind': 'block',
                    'type': 'attachentitytoentity',
                }
                , {
                    'kind': 'block',
                    'type': 'setentityattributeregenerationrate',
                }
                , {
                    'kind': 'block',
                    'type': 'changescaleofentitysprite',
                }
                , {
                    'kind': 'block',
                    'type': 'setentityvelocityatangle',
                }
                , {
                    'kind': 'block',
                    'type': 'setentityattributemax',
                }
                , {
                    'kind': 'block',
                    'type': 'applyimpulseonentityxy',
                }
                , {
                    'kind': 'block',
                    'type': 'thisentity',
                }
                , {
                    'kind': 'block',
                    'type': 'applytorqueonentitytofaceposition',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'unit',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'hideunitfromplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'showunittoplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastpurchasedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'hideunitnamelabel',
                }
                , {
                    'kind': 'block',
                    'type': 'settriggeringunit',
                }
                , {
                    'kind': 'block',
                    'type': 'createunitatposition',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitinvisibletofriendlyplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'setunitowner',
                }
                , {
                    'kind': 'block',
                    'type': 'hideunitinplayerminimap',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastoverlappingunit',
                }
                , {
                    'kind': 'block',
                    'type': 'castability',
                }
                , {
                    'kind': 'block',
                    'type': 'showunitinplayerminimap',
                }
                , {
                    'kind': 'block',
                    'type': 'hideunitnamelabelfromplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'showunitnamelabel',
                }
                , {
                    'kind': 'block',
                    'type': 'showunitnamelabeltoplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastoverlappedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'createentityforplayeratpositionwithdimensions',
                }
                , {
                    'kind': 'block',
                    'type': 'getlasttouchingunit',
                }
                , {
                    'kind': 'block',
                    'type': 'getsourceunitofprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'setfadingtextofunit',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastcastingunit',
                }
                , {
                    'kind': 'block',
                    'type': 'getlasttouchedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitinvisibletoneutralplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'saveunitdata',
                }
                , {
                    'kind': 'block',
                    'type': 'moveentity',
                }
                , {
                    'kind': 'block',
                    'type': 'changeunittype',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitselectitematslot',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastcreatedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'getownerofitem',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitvisible',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitinvisible',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitpickupitematslot',
                }
                , {
                    'kind': 'block',
                    'type': 'dropitemininventoryslot',
                }
                , {
                    'kind': 'block',
                    'type': 'gettriggeringunit',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitvisibletoneutralplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitvisibletofriendlyplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'makeunitpickupitem',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'dropallitems',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastattackedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastattackingunit',
                }
                , {
                    'kind': 'block',
                    'type': 'ownerunitofsensor',
                }
                , {
                    'kind': 'block',
                    'type': 'setlastattackedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'setlastattackingunit',
                }
                , {
                    'kind': 'block',
                    'type': 'addattributebufftounit',
                }
                , {
                    'kind': 'block',
                    'type': 'addpercentageattributebufftounit',
                }
                , {
                    'kind': 'block',
                    'type': 'stununit',
                }
                , {
                    'kind': 'block',
                    'type': 'removestunfromunit',
                }
                , {
                    'kind': 'block',
                    'type': 'loadunitdatafromstring',
                }
                , {
                    'kind': 'block',
                    'type': 'getunitfromid',
                }
                , {
                    'kind': 'block',
                    'type': 'removeallattributebuffs',
                }
                , {
                    'kind': 'block',
                    'type': 'targetunit',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayerselectedunit',
                }
                , {
                    'kind': 'block',
                    'type': 'teleportentity',
                }
                , {
                    'kind': 'block',
                    'type': 'startcastingability',
                }
                , {
                    'kind': 'block',
                    'type': 'stopcastingability',
                }
                , {
                    'kind': 'block',
                    'type': 'startmovingunitup',
                }
                , {
                    'kind': 'block',
                    'type': 'startmovingunitdown',
                }
                , {
                    'kind': 'block',
                    'type': 'startmovingunitleft',
                }
                , {
                    'kind': 'block',
                    'type': 'startmovingunitright',
                }
                , {
                    'kind': 'block',
                    'type': 'stopmovingunitx',
                }
                , {
                    'kind': 'block',
                    'type': 'stopmovingunity',
                }
                , {
                    'kind': 'block',
                    'type': 'stopmovingunit',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'entitygroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'entitiescollidingwithlastraycast',
                }
                , {
                    'kind': 'block',
                    'type': 'allentities',
                }
                , {
                    'kind': 'block',
                    'type': 'entitiesinregion',
                }
                , {
                    'kind': 'block',
                    'type': 'entitiesinregioninfrontofentityatdistance',
                }
                , {
                    'kind': 'block',
                    'type': 'entitiesbetweentwopositions',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'ui',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'sendchatmessage',
                }
                , {
                    'kind': 'block',
                    'type': 'showinputmodaltoplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'hideuitextforeveryone',
                }
                , {
                    'kind': 'block',
                    'type': 'showinvitefriendsmodal',
                }
                , {
                    'kind': 'block',
                    'type': 'showcustommodaltoplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'showuitextforeveryone',
                }
                , {
                    'kind': 'block',
                    'type': 'setunitnamelabel',
                }
                , {
                    'kind': 'block',
                    'type': 'comment',
                }
                , {
                    'kind': 'block',
                    'type': 'updateuitextforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'showmenu',
                }
                , {
                    'kind': 'block',
                    'type': 'updateuitextforeveryone',
                }
                , {
                    'kind': 'block',
                    'type': 'showmenuandselectcurrentserver',
                }
                , {
                    'kind': 'block',
                    'type': 'showmenuandselectbestserver',
                }
                , {
                    'kind': 'block',
                    'type': 'sendchatmessagetoplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'hideuitextforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'showuitextforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'updateuitextfortimeforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'createfloatingtext',
                }
                , {
                    'kind': 'block',
                    'type': 'showdismissibleinputmodaltoplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'addchatfilter',
                }
                , {
                    'kind': 'block',
                    'type': 'openbackpackforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'closebackpackforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'setunitnamelabelcolor',
                }
                , {
                    'kind': 'block',
                    'type': 'setunitnamelabelcolorforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'hideuielementforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'showuielementforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'setuielementhtml',
                }
                , {
                    'kind': 'block',
                    'type': 'appendrealtimecssforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'updaterealtimecssforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'addclasstouielement',
                }
                , {
                    'kind': 'block',
                    'type': 'removeclassfromuielement',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'sound',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'playsoundatposition',
                }
                , {
                    'kind': 'block',
                    'type': 'stopmusic',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'position',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'xycoordinate',
                }
                , {
                    'kind': 'block',
                    'type': 'getmousecursorposition',
                }
                , {
                    'kind': 'block',
                    'type': 'centerofregion',
                }
                , {
                    'kind': 'block',
                    'type': 'entitylastraycastcollisionposition',
                }
                , {
                    'kind': 'block',
                    'type': 'getentityposition',
                }
                , {
                    'kind': 'block',
                    'type': 'getrandompositioninregion',
                }
                , {
                    'kind': 'block',
                    'type': 'getpositioninfrontofposition',
                }
                , {
                    'kind': 'block',
                    'type': 'getcameraposition',
                }
                , {
                    'kind': 'block',
                    'type': 'getsecondarytouchposition',
                }
                , {
                    'kind': 'block',
                    'type': 'getlerpposition',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'state',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getentitystate',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'boolean',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'isplayerloggedin',
                }
                , {
                    'kind': 'block',
                    'type': 'playersarefriendly',
                }
                , {
                    'kind': 'block',
                    'type': 'playeriscontrolledbyhuman',
                }
                , {
                    'kind': 'block',
                    'type': 'playersarehostile',
                }
                , {
                    'kind': 'block',
                    'type': 'regionoverlapswithregion',
                }
                , {
                    'kind': 'block',
                    'type': 'playersareneutral',
                }
                , {
                    'kind': 'block',
                    'type': 'playerhasadblockenabled',
                }
                , {
                    'kind': 'block',
                    'type': 'entityexists',
                }
                , {
                    'kind': 'block',
                    'type': 'ispositioninwall',
                }
                , {
                    'kind': 'block',
                    'type': 'substring',
                }
                , {
                    'kind': 'block',
                    'type': 'stringstartswith',
                }
                , {
                    'kind': 'block',
                    'type': 'stringendswith',
                }
                , {
                    'kind': 'block',
                    'type': 'isaienabled',
                }
                , {
                    'kind': 'block',
                    'type': 'isbotplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'iscomputerplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'playeriscreator',
                }
                , {
                    'kind': 'block',
                    'type': 'roleexistsforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'stringisanumber',
                }
                , {
                    'kind': 'block',
                    'type': 'unitiscarryingitemtype',
                }
                , {
                    'kind': 'block',
                    'type': 'isunitmoving',
                }
                , {
                    'kind': 'block',
                    'type': 'isplayerclient',
                }
                , {
                    'kind': 'block',
                    'type': 'notvalue',
                }
                , {
                    'kind': 'block',
                    'type': 'isplayeronmobile',
                }
                , {
                    'kind': 'block',
                    'type': 'objectcontainselement',
                }
                , {
                    'kind': 'block',
                    'type': 'itemfiresprojectiles',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'dialogue',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'opendialogueforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'closedialogueforplayer',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'loop',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'continue',
                }
                , {
                    'kind': 'block',
                    'type': 'forallitems',
                }
                , {
                    'kind': 'block',
                    'type': 'while',
                }
                , {
                    'kind': 'block',
                    'type': 'repeat',
                }
                , {
                    'kind': 'block',
                    'type': 'forallentities',
                }
                , {
                    'kind': 'block',
                    'type': 'forallitemtypes',
                }
                , {
                    'kind': 'block',
                    'type': 'forallprojectiles',
                }
                , {
                    'kind': 'block',
                    'type': 'forallregions',
                }
                , {
                    'kind': 'block',
                    'type': 'forallunittypes',
                }
                , {
                    'kind': 'block',
                    'type': 'forallplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'for',
                }
                , {
                    'kind': 'block',
                    'type': 'break',
                }
                , {
                    'kind': 'block',
                    'type': 'foralldebris',
                }
                , {
                    'kind': 'block',
                    'type': 'forallunits',
                }
                , {
                    'kind': 'block',
                    'type': 'forin',
                }
                , {
                    'kind': 'block',
                    'type': 'repeatwithdelay',
                }
                , {
                    'kind': 'block',
                    'type': 'forallelementsinobject',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'player',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'openwebsiteforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'hidegamesuggestionsforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'getlastplayerselectingdialogueoption',
                }
                , {
                    'kind': 'block',
                    'type': 'saveplayerdata',
                }
                , {
                    'kind': 'block',
                    'type': 'gettriggeringplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'setplayerattribute',
                }
                , {
                    'kind': 'block',
                    'type': 'startacceptingplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'makeplayerselectunit',
                }
                , {
                    'kind': 'block',
                    'type': 'setplayerattributemax',
                }
                , {
                    'kind': 'block',
                    'type': 'setplayerattributeregenerationrate',
                }
                , {
                    'kind': 'block',
                    'type': 'kickplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'banplayerfromchat',
                }
                , {
                    'kind': 'block',
                    'type': 'showgamesuggestionsforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'setplayername',
                }
                , {
                    'kind': 'block',
                    'type': 'unbanplayerfromchat',
                }
                , {
                    'kind': 'block',
                    'type': 'getowner',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'assignplayertype',
                }
                , {
                    'kind': 'block',
                    'type': 'stopacceptingplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'setplayerattributemin',
                }
                , {
                    'kind': 'block',
                    'type': 'makeplayertradewithplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'loadplayerdataandapplyit',
                }
                , {
                    'kind': 'block',
                    'type': 'playsoundforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'stopsoundforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'muteplayermicrophone',
                }
                , {
                    'kind': 'block',
                    'type': 'unmuteplayermicrophone',
                }
                , {
                    'kind': 'block',
                    'type': 'loadplayerdatafromstring',
                }
                , {
                    'kind': 'block',
                    'type': 'getplayerfromid',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'region',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'transformregiondimensions',
                }
                , {
                    'kind': 'block',
                    'type': 'gettriggeringregion',
                }
                , {
                    'kind': 'block',
                    'type': 'getentiremapregion',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedregion',
                }
                , {
                    'kind': 'block',
                    'type': 'entitybounds',
                }
                , {
                    'kind': 'block',
                    'type': 'dynamicregion',
                }
                , {
                    'kind': 'block',
                    'type': 'changeregioncolor',
                }
                , {
                    'kind': 'block',
                    'type': 'getregionbyname',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'unitgroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'allunitsownedbyplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'addunittounitgroup',
                }
                , {
                    'kind': 'block',
                    'type': 'allunitsattachedtounit',
                }
                , {
                    'kind': 'block',
                    'type': 'removeunitfromunitgroup',
                }
                , {
                    'kind': 'block',
                    'type': 'allunits',
                }
                , {
                    'kind': 'block',
                    'type': 'allunitsattachedtoitem',
                }
                , {
                    'kind': 'block',
                    'type': 'allunitsmountedonunit',
                }
                , {
                    'kind': 'block',
                    'type': 'allunitsinregion',
                }
                , {
                    'kind': 'block',
                    'type': 'allunitsofunittype',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'particle',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getitemparticle',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedparticle',
                }
                , {
                    'kind': 'block',
                    'type': 'getunitparticle',
                }
                , {
                    'kind': 'block',
                    'type': 'emitparticlesfromentity',
                }
                , {
                    'kind': 'block',
                    'type': 'emitparticlesatposition',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'projectilegroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'allprojectilesattachedtounit',
                }
                , {
                    'kind': 'block',
                    'type': 'allprojectiles',
                }
                , {
                    'kind': 'block',
                    'type': 'allprojectilesofprojectiletype',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'playergroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'removeplayerfromplayergroup',
                }
                , {
                    'kind': 'block',
                    'type': 'humanplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'computerplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'allplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'addplayertoplayergroup',
                }
                , {
                    'kind': 'block',
                    'type': 'botplayers',
                }
                , {
                    'kind': 'block',
                    'type': 'playersofplayertype',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'itemtype',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'selecteditemtype',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemtypeofitem',
                }
                , {
                    'kind': 'block',
                    'type': 'getrandomitemtypefromitemtypegroup',
                }
                , {
                    'kind': 'block',
                    'type': 'getitemtype',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'itemgroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'allitemsdroppedonground',
                }
                , {
                    'kind': 'block',
                    'type': 'allitems',
                }
                , {
                    'kind': 'block',
                    'type': 'allitemsattachedtounit',
                }
                , {
                    'kind': 'block',
                    'type': 'allitemsownedbyunit',
                }
                , {
                    'kind': 'block',
                    'type': 'allitemsofitemtype',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'system',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'return',
                }
                , {
                    'kind': 'block',
                    'type': 'condition',
                }
                , {
                    'kind': 'block',
                    'type': 'sendpostrequest',
                }
                , {
                    'kind': 'block',
                    'type': 'getglobalvariable',
                }
                , {
                    'kind': 'block',
                    'type': 'requestpost',
                }
                , {
                    'kind': 'block',
                    'type': 'sendsecurepostrequest',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'script',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'runscript',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'unittype',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getunittypeofunit',
                }
                , {
                    'kind': 'block',
                    'type': 'lastpurchasedunittypetid',
                }
                , {
                    'kind': 'block',
                    'type': 'getrandomunittypefromunittypegroup',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedunittype',
                }
                , {
                    'kind': 'block',
                    'type': 'getunittype',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'camera',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'playercamerasetzoom',
                }
                , {
                    'kind': 'block',
                    'type': 'playercameratrackunit',
                }
                , {
                    'kind': 'block',
                    'type': 'positioncamera',
                }
                , {
                    'kind': 'block',
                    'type': 'playercamerastoptracking',
                }
                , {
                    'kind': 'block',
                    'type': 'setcameradeadzone',
                }
                , {
                    'kind': 'block',
                    'type': 'playercamerasetpitch',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'shop',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'openshopforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'closeshopforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'purchaseitemfromshop',
                }
                , {
                    'kind': 'block',
                    'type': 'openskinshop',
                }
                , {
                    'kind': 'block',
                    'type': 'openskinsubmissionpage',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'itemtypegroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'allitemtypesingame',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'projectiletype',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getprojectiletypeofprojectile',
                }
                , {
                    'kind': 'block',
                    'type': 'getprojectiletype',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'playertype',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'playertypeofplayer',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'music',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'stopmusicforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'playmusicforplayerrepeatedly',
                }
                , {
                    'kind': 'block',
                    'type': 'playmusic',
                }
                , {
                    'kind': 'block',
                    'type': 'playmusicforplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'playmusicforplayerattime',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'undefined',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'getvalueofentityvariable',
                }
                , {
                    'kind': 'block',
                    'type': 'undefinedvalue',
                }
                , {
                    'kind': 'block',
                    'type': 'getvalueofplayervariable',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'unittypegroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'allunittypesingame',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'attribute',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'gettriggeringattribute',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'regiongroup',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'allregions',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'ai',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'aimovetoposition',
                }
                , {
                    'kind': 'block',
                    'type': 'aiattackunit',
                }
                , {
                    'kind': 'block',
                    'type': 'addbotplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'enableai',
                }
                , {
                    'kind': 'block',
                    'type': 'disableai',
                }
                , {
                    'kind': 'block',
                    'type': 'aigoidle',
                }
                , {
                    'kind': 'block',
                    'type': 'setmaxattackrange',
                }
                , {
                    'kind': 'block',
                    'type': 'setletgodistance',
                }
                , {
                    'kind': 'block',
                    'type': 'setmaxtraveldistance',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'sensor',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'changesensorradius',
                }
                , {
                    'kind': 'block',
                    'type': 'getsensorofunit',
                }
                , {
                    'kind': 'block',
                    'type': 'gettriggeringsensor',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'coins',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'sendcoinstoplayer',
                }
                , {
                    'kind': 'block',
                    'type': 'sendcoinstoplayer2',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'multiple',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'editmaptile',
                }
                , {
                    'kind': 'block',
                    'type': 'loadmapfromstring',
                }
                , {
                    'kind': 'block',
                    'type': 'editmaptiles',
                }
                , {
                    'kind': 'block',
                    'type': 'getvariable',
                }
                , {
                    'kind': 'block',
                    'type': 'changelayeropacity',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'object',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'stringtoobject',
                }
                , {
                    'kind': 'block',
                    'type': 'elementfromobject',
                }
                , {
                    'kind': 'block',
                    'type': 'removeelement',
                }
                , {
                    'kind': 'block',
                    'type': 'emptyobject',
                }
                , {
                    'kind': 'block',
                    'type': 'addstringelement',
                }
                , {
                    'kind': 'block',
                    'type': 'addobjectelement',
                }
                , {
                    'kind': 'block',
                    'type': 'selectedelement',
                }
                , {
                    'kind': 'block',
                    'type': 'addnumberelement',
                }

            ]
        }, {
            'kind': 'category',
            'name': 'chat',
            'categorystyle': 'procedure_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'makeplayersendchatmessage',
                }

            ]
        }
    ],
};
