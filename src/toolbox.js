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
          'type': 'playerjoinsgame',
        },
        {
          'kind': 'block',
          'type': 'playerleavesgame',
        },
        {
          'kind': 'block',
          'type': 'playerSendsChatMessage',
        },
        {
          'kind': 'block',
          'type': 'onpostresponse',
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
          'kind': 'category',
          'name': 'System',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'comment',
            },
            {
              'kind': 'block',
              'type': 'ifelse',
            },
            {
              'kind': 'block',
              'type': 'repeat',
            },
            {
              'kind': 'block',
              'type': 'while',
            },
            {
              'kind': 'block',
              'type': 'colour_picker',
            },
          ]
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
            {
              'kind': 'block',
              'type': 'str2num',
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
            {
              'kind': 'block',
              'type': 'num2str',
            },  
            {
              'kind': 'block',
              'type': 'getplayername',
            },
          ]
        },
        {
          'kind': 'category',
          'name': 'Boolean',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'logic_boolean',
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
              'inputs': {
                'x': {
                  'shadow': {
                    'type': 'math_number',
                    'fields': {
                      'NUM': 64,
                    },
                  },
                },
                'y': {
                  'shadow': {
                    'type': 'math_number',
                    'fields': {
                      'NUM': 64,
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
            {
              'kind': 'block',
              'type': 'break',
            }, 
            {
              'kind': 'block',
              'type': 'continue',
            },   
          ]
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Entity',
      'categorystyle': 'procedure_category',
      'contents': [
        {
          'kind': 'category',
          'name': 'All',
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
          ]
        },
        {
          'kind': 'category',
          'name': 'Unit',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'createunitatposition',
            },
            {
              'kind': 'block',
              'type': 'dropallitems',
            },
            {
              'kind': 'block',
              'type': 'triggeringunit',
            },
            {
              'kind': 'block',
              'type': 'selectedunit',
            },
            {
              'kind': 'block',
              'type': 'lastcreatedunit',
            },
          ]
        },
        {
          'kind': 'category',
          'name': 'Item',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'triggeringitem',
            },
          ]
        },
        {
          'kind': 'category',
          'name': 'Projectile',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'triggeringprojectile',
            },
          ]
        },
        {
          'kind': 'category',
          'name': 'Region',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'triggeringregion',
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
              'type': 'playercameratrackunit',
            },
            {
              'kind': 'block',
              'type': 'kickplayer',
            },
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
              'inputs': {
                'message': {
                  'shadow': {
                    'type': 'text',
                    'fields': {
                      'TEXT': "Hello world!",
                    },
                  },
                },
              },
            },
            {
              'kind': 'block',
              'type': 'sendchatmessagetoplayer',
              'inputs': {
                'message': {
                  'shadow': {
                    'type': 'text',
                    'fields': {
                      'TEXT': "Hello world!",
                    },
                  },
                },
              },
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
        {
          'kind': 'category',
          'name': 'Variables',
          'categorystyle': 'procedure_category',
          'contents': [
            {
              'kind': 'block',
              'type': 'increasevariablebynumber',
              'inputs': {
                'var': {
                  'shadow': {
                    'type': 'text',
                    'fields': {
                      'TEXT': "",
                    },
                  },
                },
                'num': {
                  'shadow': {
                    'type': 'math_number',
                    'fields': {
                      'NUM': 0,
                    },
                  },
                },
              },
            },
            {
              'kind': 'block',
              'type': 'decreasevariablebynumber',
              'inputs': {
                'var': {
                  'shadow': {
                    'type': 'text',
                    'fields': {
                      'TEXT': "",
                    },
                  },
                },
                'num': {
                  'shadow': {
                    'type': 'math_number',
                    'fields': {
                      'NUM': 0,
                    },
                  },
                },
              },
            },
            {
              'kind': 'block',
              'type': 'setvariable',
              'inputs': {
                'var': {
                  'shadow': {
                    'type': 'text',
                    'fields': {
                      'TEXT': "",
                    },
                  },
                },
              },
            },
          ]
        },
      ]
    },
  ],
};
