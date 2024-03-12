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
      'name': 'Triggers',
      'categorystyle': 'procedure_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'triggers',
        },
        {
          'kind': 'block',
          'type': 'script',
        },
        {
          'kind': 'block',
          'type': 'secondtick',
        },
        {
          'kind': 'block',
          'type': 'frametick',
        },
        {
          'kind': 'block',
          'type': 'gamestart',
        },
        {
          'kind': 'block',
          'type': 'servershuttingdown',
        },
        {
          'kind': 'block',
          'type': 'onpostresponse',
        },
        {
          'kind': 'block',
          'type': 'playerSendsChatMessage',
        },
        {
          'kind': 'block',
          'type': 'unitTouchesWall',
        },
        {
          'kind': 'block',
          'type': 'unitUsesItem',
        },
        {
          'kind': 'block',
          'type': 'unitAttributeBecomesZero',
        },
        {
          'kind': 'block',
          'type': 'unitStartsUsingAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitAttributeBecomesFull',
        },
        {
          'kind': 'block',
          'type': 'unitEntersRegion',
        },
        {
          'kind': 'block',
          'type': 'unitDroppedAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitLeavesRegion',
        },
        {
          'kind': 'block',
          'type': 'unitSelectsItem',
        },
        {
          'kind': 'block',
          'type': 'unitAttacksUnit',
        },
        {
          'kind': 'block',
          'type': 'unitStopsUsingAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitTouchesProjectile',
        },
        {
          'kind': 'block',
          'type': 'unitPickedAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitTouchesItem',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Logic',
      'categorystyle': 'procedure_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'ifelse',
        },
        {
          'kind': 'category',
          'name': 'Math',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'math_number',
              'fields': {
                'NUM': 123,
              },
            },
            {
              'kind': 'block',
              'type': 'math_arithmetic',
              'inputs': {
                'A': {
                  'shadow': {
                    'type': 'math_number',
                    'fields': {
                      'NUM': 1,
                    },
                  },
                },
                'B': {
                  'shadow': {
                    'type': 'math_number',
                    'fields': {
                      'NUM': 1,
                    },
                  },
                },
              },
            },    
          ]
        },
        {
          'kind': 'category',
          'name': 'Positions',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'pos',
            },
          ]
        },
        {
          'kind': 'category',
          'name': 'Loops',
          'categorystyle': 'procedure_category',
          'contents': [
            
          ]
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Text',
      'categorystyle': 'procedure_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'text',
        },
        {
          'kind': 'block',
          'type': 'text_join',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Entity',
      'categorystyle': 'procedure_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'moveentity',
        },
        {
          'kind': 'block',
          'type': 'destroyentity',
        },
        {
          'kind': 'category',
          'name': 'Unit',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'triggeringunit',
            },
            {
              'kind': 'block',
              'type': 'selectedunit',
            },
          ]
        },
        {
          'kind': 'category',
          'name': 'Item',
          'categorystyle': 'procedure_category',
          'contents': [
    
          ]
        },
        {
          'kind': 'category',
          'name': 'Projectile',
          'categorystyle': 'procedure_category',
          'contents': [
    
          ]
        },
        {
          'kind': 'category',
          'name': 'Region',
          'categorystyle': 'procedure_category',
          'contents': [
    
          ]
        },
        {
          'kind': 'category',
          'name': 'Player',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'owner',
            },
            {
              'kind': 'block',
              'type': 'triggeringplayer',
            },
          ]
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Other',
      'categorystyle': 'procedure_category',
      'contents': [
        {
          'kind': 'category',
          'name': 'UI',
          'categorystyle': 'procedure_category',
          'contents': [
    
          ]
        },
        {
          'kind': 'category',
          'name': 'Chat',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'sendchatmessage',
            },
          ]
        },
        {
          'kind': 'category',
          'name': 'AI',
          'categorystyle': 'procedure_category',
          'contents': [
    
          ]
        },
        {
          'kind': 'category',
          'name': 'Sound & Music',
          'categorystyle': 'procedure_category',
          'contents': [
    
          ]
        },
      ]
    },
  ],
};
