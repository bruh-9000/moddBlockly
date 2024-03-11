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
    {
      'kind': 'category',
      'name': 'UI',
      'categorystyle': 'procedure_category',
      'contents': [

      ]
    },
    {
      'kind': 'category',
      'name': 'Other',
      'categorystyle': 'procedure_category',
      'contents': [
        {
          'kind': 'category',
          'name': 'AI',
          'categorystyle': 'procedure_category',
          'contents': [
    
          ]
        },
        {
          'kind': 'block',
          'type': 'sendchatmessage',
        },
        {
          'kind': 'block',
          'type': 'pos',
        },
      ]
    },
  ],
};
